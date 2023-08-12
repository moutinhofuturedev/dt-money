import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SearchForm } from '.'

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
})
