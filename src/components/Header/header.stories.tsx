import { Meta, StoryObj } from '@storybook/react'
import { Header } from '.'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Primary: StoryObj<typeof Header> = {
  args: {
    title: 'DT Money',
    name: 'Nova transação',
  },
}
