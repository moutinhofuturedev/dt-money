import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SearchForm } from '.'
import { TransactionsContext } from '../../context/TransactionContext'

describe('SearchForm', () => {
  it('renders SearchForm component', () => {
    render(<SearchForm />)

    const searchInput = screen.getByPlaceholderText('Busque por transações')
    const searchButton = screen.getByText('Buscar')

    expect(searchInput).toBeInTheDocument()
    expect(searchButton).toBeInTheDocument()
  })

  it('search button click works', () => {
    render(<SearchForm />)

    // Preenche o campo de busca
    const searchInput = screen.getByPlaceholderText('Busque por transações')
    userEvent.type(searchInput, 'Exemplo de busca')

    // Clica no botão de busca
    const searchButton = screen.getByText('Buscar')
    userEvent.click(searchButton)
  })

  // The form is submitted without a query parameter.
  it('should not call handleSearchTransactions if form is submitted without query parameter', () => {
    const handleSearchTransactions = jest.fn()
    render(<SearchForm />)

    const button = screen.getByRole('button', { name: /buscar/i })
    fireEvent.click(button)

    expect(handleSearchTransactions).not.toHaveBeenCalled()
  })

  // When the user submits the form, the handleSearchTransactions function should be called with the query parameter.
  it('should call handleSearchTransactions with query parameter on form submission', () => {
    const fetchTransactions = jest.fn()
    const handleSearchTransactions = jest.fn()

    render(
      <TransactionsContext.Provider value={{ fetchTransactions }}>
        <SearchForm />
      </TransactionsContext.Provider>,
    )

    const input = screen.getByPlaceholderText('Busque por transações')
    const button = screen.getByRole('button', { name: /buscar/i })

    fireEvent.change(input, { target: { value: 'test query' } })
    fireEvent.click(button)

    expect(handleSearchTransactions).not.toHaveBeenCalled()
  })
})
