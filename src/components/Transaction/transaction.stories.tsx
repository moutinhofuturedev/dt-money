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
    tableTitle: 'Salário',
    tableValue: 'R$ 5.400,00',
    tableType: 'Salário',
    tableDate: '06/04/2023',
    typeExpense: 'income',
  },
}

export const Despesas: StoryObj<typeof Transaction> = {
  args: {
    tableTitle: 'Contas',
    tableValue: '- R$ 5.400,00',
    tableType: 'Contas',
    tableDate: '06/04/2023',
    typeExpense: 'outcome',
  },
}
