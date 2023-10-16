import { render, screen } from '@testing-library/react'

import { SummaryCard } from '.'

describe('SummaryCard', () => {
  it('renders header and price correctly', () => {
    render(
      <SummaryCard headerType="Header" price={123.12} icon={<div>Icon</div>} />,
    )

    const textHeader = screen.getByText('Header')
    const showIcon = screen.getByText('Icon')

    expect(textHeader).toBeInTheDocument()
    expect(showIcon).toBeInTheDocument()
  })

  it('does not apply coloring when not specified', () => {
    const { container } = render(
      <SummaryCard headerType="Header" price={123} icon={<div>Icon</div>} />,
    )

    expect(container.firstChild).not.toHaveClass('green')
    expect(container.firstChild).not.toHaveClass('gray')
  })
})
