/* global jest describe, it, expect */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ResultPage from './_query.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const mockRoute = {
  query: {
    t: 'dummy'
  }
}
const mockRouterPush = jest.fn()
const mockDispatch = jest.fn()

const factory = () => {
  const store = new Vuex.Store({
    modules: {
      movies: {
        state: {
          items: [],
          isLoading: false
        },
        actions: {
          'movies/search': jest.fn()
        }
      }
    }
  })
  return shallowMount(ResultPage, {
    localVue,
    store,
    stubs: {
      fa: true
    },
    mocks: {
      $route: mockRoute,
      $router: {
        push: mockRouterPush
      }
    }
  })
}

describe.only('Results Page', () => {
  it('should render the component', () => {
    // Arrange.
    // Act.
    const wrapper = factory()
    // Assert.
    expect(wrapper).toMatchSnapshot()
  })

  it('resetSearch method', async () => {
    // Arrange.
    // Act.
    const wrapper = factory()
    await wrapper.find('form').trigger('click.prevent')
    // Assert.
    expect(mockRouterPush).toHaveBeenCalled()
  })

  it('fetch method', async () => {
    // Arrange.
    // Act.
    const wrapper = factory()
    wrapper.vm.$store.dispatch = mockDispatch
    await wrapper.vm.$options.fetch()
    // Assert.
    expect(mockDispatch).not.toHaveBeenCalled()
  })
})
