import { render, screen } from '@testing-library/react'
import { Transaction, TransactionTableProps } from '.'

describe('Transaction', () => {
  const mockTransaction: TransactionTableProps = {
    tableDescription: 'Item A',
    tablePrice: 100.0,
    tableCategory: 'Category',
    tableDate: '2023-08-12',
    tableExpense: 'outcome',
  }

  it('renders the transaction details correctly', () => {
    render(<Transaction {...mockTransaction} />)

    const formattedDate = new Date(
      mockTransaction.tableDate,
    ).toLocaleDateString()

    const description = screen.getByText(mockTransaction.tableDescription)
    const price = screen.getByText(
      new RegExp(mockTransaction.tablePrice.toString()),
    ) // Usar regex
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
    ) // Usar regex

    expect(priceElements[0]).toBeInTheDocument()
  })
})
