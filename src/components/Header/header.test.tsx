import { render, screen } from '@testing-library/react'

import { Header } from '.'

describe('Header', () => {
  it('renders Header component', () => {
    render(<Header title="Test Title" name="Test Name" />)

    const titleElement = screen.getByText(/Test Title/i)
    const nameElement = screen.getByText(/Test Name/i)

    expect(titleElement).toBeInTheDocument()
    expect(nameElement).toBeInTheDocument()
  })
})
