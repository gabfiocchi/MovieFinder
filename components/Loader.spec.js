import { mount } from '@vue/test-utils'
import Loader from './Loader.vue'

describe('Loader', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Loader, {
      stubs: {
        fa: true
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
