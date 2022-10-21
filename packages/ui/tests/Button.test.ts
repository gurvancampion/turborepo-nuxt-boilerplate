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
    expect(wrapper.classes()).toContain('v-btn')
  })
})
