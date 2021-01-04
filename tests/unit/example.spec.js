import { shallowMount } from '@vue/test-utils'
import TypeWriter from '@/components/TypeWriter.vue'

describe('TypeWriter.vue', () => {
  it('renders props.txt when passed', () => {
    const txt = 'new message'
    const wrapper = shallowMount(TypeWriter, {
      propsData: { txt }
    })
    expect(wrapper.text()).toMatch(txt)
  })
})
