import { StoryObj, Meta } from '@storybook/react'
import { Transaction } from '.'

const meta = {
  title: 'Components/Transaction',
  component: Transaction,
  tags: ['autodocs'],
} satisfies Meta<typeof Transaction>

export default meta

export const Rendas: StoryObj<typeof Transaction> = {
  args: {
    tableDescription: 'Salário',
    tablePrice: 5.4,
    tableCategory: 'Salário',
    tableDate: '06/04/2023',
    tableExpense: 'income',
  },
}

export const Despesas: StoryObj<typeof Transaction> = {
  args: {
    tableDescription: 'Contas',
    tablePrice: 5.4,
    tableCategory: 'Contas',
    tableDate: '06/04/2023',
    tableExpense: 'outcome',
  },
}
