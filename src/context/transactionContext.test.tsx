import { render, screen } from '@testing-library/react'
import { TransactionsContext } from './TransactionContext'

describe('TransactionContext', () => {
  it('should render children with value prop when TransactionsContext.Provider is rendered', () => {
    render(
      <TransactionsContext.Provider
        value={{ transactions: [], fetchTransactions: jest.fn() }}
      >
        <div>Test Children</div>
      </TransactionsContext.Provider>,
    )

    const childrenElement = screen.getByText('Test Children')

    expect(childrenElement).toBeInTheDocument()
  })
})
