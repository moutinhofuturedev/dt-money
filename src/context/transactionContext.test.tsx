import { render, screen, waitFor } from '@testing-library/react'
import { TransactionsContext } from './TransactionContext'
import { api } from '../lib/api'

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

  it('should handle error when API response data is null', async () => {
    const response = { data: null }
    jest.spyOn(api, 'get').mockResolvedValue(response)

    render(
      <TransactionsContext.Provider
        value={{ transactions: [], fetchTransactions: jest.fn() }}
      >
        <div>Test Children</div>
      </TransactionsContext.Provider>,
    )

    await waitFor(() => {
      expect(api.get).toHaveBeenCalledTimes(0)
      expect(screen.getByText('Test Children')).toBeInTheDocument()
      expect(
        screen.queryByText('Erro na resposta da API:'),
      ).not.toBeInTheDocument()
      expect(
        screen.queryByText('Erro na solicitação da API:'),
      ).not.toBeInTheDocument()
      expect(
        screen.queryByText('Erro ao configurar a solicitação da API:'),
      ).not.toBeInTheDocument()
    })
  })

  it('should not call fetchTransactions function on component mount', () => {
    const fetchTransactions = jest.fn()

    render(
      <TransactionsContext.Provider
        value={{ transactions: [], fetchTransactions: jest.fn() }}
      >
        <div>Test Children</div>
      </TransactionsContext.Provider>,
    )

    expect(fetchTransactions).not.toBeCalled()
  })
})
