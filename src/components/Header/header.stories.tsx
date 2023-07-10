import { Meta, StoryObj } from '@storybook/react'
import { Header } from '.'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta

export const Primary: StoryObj<typeof Header> = {
  args: {
    title: 'DT Money',
    name: 'Nova transação',
  },
}
