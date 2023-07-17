import { StoryObj, Meta } from '@storybook/react'

import { SearchForm } from '.'

const meta = {
  title: 'Components/SearchForm',
  component: SearchForm,
  tags: ['autdocs'],
} satisfies Meta<typeof SearchForm>

export default meta

export const Busca: StoryObj<typeof SearchForm> = {
  render: () => <SearchForm />,
}
