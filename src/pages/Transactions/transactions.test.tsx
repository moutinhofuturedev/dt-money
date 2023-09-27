import { render, screen } from '@testing-library/react'
import { Transactions } from '.'
import {
  TransactionsContext,
  TransactionType,
} from '../../contexts/TransactionContext'

const mockTransactions: TransactionType[] = [
  {
    id: 1,
    description: 'Compra de comida',
    price: 50.0,
    category: 'Alimentação',
    createdAt: '2023-09-27',
    expense: 'outcome',
  },
  {
    id: 2,
    description: 'Salário',
    price: 2000.0,
    category: 'Salário',
    createdAt: '2023-09-28',
    expense: 'income',
  },
]

describe('Transactions', () => {
  it('should render component Transactions', () => {
    render(
      <TransactionsContext.Provider value={{ transactions: mockTransactions }}>
        <Transactions />
      </TransactionsContext.Provider>,
    )

    const titleElement = screen.getByText('DT Money')
    expect(titleElement).toBeInTheDocument()

    const nameElement = screen.getByText('Nova transação')
    expect(nameElement).toBeInTheDocument()
  })
})
