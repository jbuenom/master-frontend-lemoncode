import { render, screen } from '@testing-library/vue'

import { setActivePinia, createPinia } from 'pinia'

import MemberItem from './MemberItem.vue'

describe('MemberList', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render MemberItem', () => {
    render(MemberItem, {
      props: {
        member: {
          id: 123, login: 'Prueba Prop', avatar_url: ''
        }
      }
    })

    screen.getByText('Prueba Prop');
  })
})