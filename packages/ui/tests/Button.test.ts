import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../components/Button.vue'

describe('Button', () => {
  it('is defined', () => {
    const wrapper = mount(Button)
    expect(wrapper).toBeDefined()
  })

  it('is disabled', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    })

    const button = wrapper.find('button')
    expect(button.element.disabled).toBe(true)
  })

  it('has a slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Submit test',
      },
    })

    expect(wrapper.html()).toContain('Submit test')
  })
})
