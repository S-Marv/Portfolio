import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LinkButton from '../card/LinkButton.vue'
import { Link } from '@/objects/data_structures/Link'

describe('LinkButton', () => {
  it('renders properly', () => {
    const wrapper = mount(LinkButton, { props: { link: new Link("testText", "GITHUB", "github.com") } })
    expect(wrapper.text()).toContain('testText')
    expect(wrapper.get('[data-test="icon"]').attributes().src).toBe("icons/github.png")
  })
})
