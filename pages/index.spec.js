/* global jest describe, it, expect */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import HomePage from './index.vue'

const mockRouterPush = jest.fn()
const localVue = createLocalVue()
localVue.use(Vuex)

const factory = () => {
  const store = new Vuex.Store({
    modules: {
      movies: {
        state: {
          isLoading: false
        }
      }
    }
  })
  return shallowMount(HomePage, {
    localVue,
    store,
    stubs: {
      fa: true
    },
    mocks: {
      $router: {
        push: mockRouterPush
      }
    }
  })
}

describe('Home Page', () => {
  it('should render the component', () => {
    // Arrange.
    // Act.
    const wrapper = factory()
    // Assert.
    expect(wrapper).toMatchSnapshot()
  })

  it('should be initialize without query', () => {
    // Arrange.
    // Act.
    const wrapper = factory()
    // Assert.
    expect(wrapper.vm.query).toBe('')
  })

  it('searchMovie', async () => {
    // Arrange.
    // Act.
    const wrapper = factory()
    await wrapper.find('input').setValue('Star Wars')
    wrapper.find('form').trigger('submit.prevent')
    // Assert.
    expect(wrapper.vm.query).toBe('Star Wars')
    expect(mockRouterPush).toHaveBeenCalled()
  })
})
