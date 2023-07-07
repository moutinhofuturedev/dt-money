import { Meta, StoryObj } from '@storybook/react'
import { Summary } from '.'

const meta: Meta<typeof Summary> = {
  title: 'Components/Summary',
  component: Summary,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Primary: StoryObj<typeof Summary> = {
  render: () => <Summary />,
}
