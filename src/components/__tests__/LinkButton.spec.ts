import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LinkButton from '../card/LinkButton.vue'
import { Link } from '@/objects/data_structures/Link'
import { Button } from 'primevue'

describe('LinkButton', () => {
  it('renders properly', () => {
    const wrapper = mount(LinkButton, { props: { link: new Link("testText", "GITHUB", "github.com") } })
    expect(wrapper.text()).toContain('testText')
    expect(wrapper.findComponent(Image).html()).toContain("icons/github.png")
  })
})
