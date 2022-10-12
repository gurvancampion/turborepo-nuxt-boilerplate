import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../components/Button.vue'

describe('Button', () => {
  it('is defined', () => {
    const wrapper = mount(Button)
    expect(wrapper).toBeDefined()
  })

  it('has class', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).toContain('a-btn')
  })

  it('has icon', () => {
    const icon = 'i-bx-star'
    const wrapper = mount(Button, {
      props: {
        icon,
      },
    })
    const iconEl = wrapper.find('i')

    expect(wrapper.find('i')).toBeDefined()
    expect(iconEl.classes()).toContain(icon)
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
