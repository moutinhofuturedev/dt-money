import { render, screen } from '@testing-library/react'
import { Transaction, TransactionTableProps } from '.'

describe('Transaction', () => {
  const mockTransaction: TransactionTableProps = {
    tableTitle: 'Item A',
    tableValue: '100.00',
    tableType: 'Category',
    tableDate: '2023-08-12',
    typeExpense: 'outcome',
  }

  it('renders the transaction details correctly', () => {
    render(<Transaction {...mockTransaction} />)

    const formattedDate = new Date(
      mockTransaction.tableDate,
    ).toLocaleDateString()

    const title = screen.getByText(mockTransaction.tableTitle)
    const values = screen.getByText(mockTransaction.tableValue)
    const types = screen.getByText(mockTransaction.tableType)
    const formatted = screen.getByText(formattedDate)

    expect(title).toBeInTheDocument()
    expect(values).toBeInTheDocument()
    expect(types).toBeInTheDocument()
    expect(formatted).toBeInTheDocument()
  })

  it('applies the correct styling for income transactions', () => {
    const incomeTransaction: TransactionTableProps = {
      ...mockTransaction,
      typeExpense: 'income',
    }

    render(<Transaction {...incomeTransaction} />)

    const priceElements = screen.getAllByText(incomeTransaction.tableValue)

    expect(priceElements[0]).toBeInTheDocument()
  })
})
