import { render, screen } from '@testing-library/react'
import { Transaction, TransactionTableProps } from '.'
import { dateFormatter } from '../../utils/formatter'

describe('Transaction', () => {
  const mockTransaction: TransactionTableProps = {
    tableDescription: 'Item A',
    tablePrice: 100.0,
    tableCategory: 'Category',
    tableDate: '2023-09-24T02:00:29.871Z',
    tableExpense: 'outcome',
  }

  it('renders the transaction details correctly', () => {
    render(<Transaction {...mockTransaction} />)

    const formattedDate = dateFormatter.format(
      new Date(mockTransaction.tableDate),
    )
    const description = screen.getByText(mockTransaction.tableDescription)
    const price = screen.getByText(
      new RegExp(mockTransaction.tablePrice.toString()),
    )
    const category = screen.getByText(mockTransaction.tableCategory)
    const formatted = screen.getByText(formattedDate)

    expect(description).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    expect(category).toBeInTheDocument()
    expect(formatted).toBeInTheDocument()
  })

  it('applies the correct styling for income transactions', () => {
    const incomeTransaction: TransactionTableProps = {
      ...mockTransaction,
      tableExpense: 'income',
    }

    render(<Transaction {...incomeTransaction} />)

    const priceElements = screen.getAllByText(
      new RegExp(incomeTransaction.tablePrice.toString()),
    )

    expect(priceElements[0]).toBeInTheDocument()
  })
})
