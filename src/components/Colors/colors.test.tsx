import { render, screen } from '@testing-library/react'
import { defaultTheme } from '../../styles/theme/default'

import { ColorsGrid } from '.'

describe('ColorsGrid', () => {
  it('renders colors grid with correct entries', () => {
    render(<ColorsGrid />)

    const colorEntries = screen.getAllByTestId(/^color-entry-/)

    expect(colorEntries).toHaveLength(Object.keys(defaultTheme).length)

    colorEntries.forEach((colorEntry, index) => {
      const color = Object.values(defaultTheme)[index]
      const key = Object.keys(defaultTheme)[index]

      const colorNameElement = colorEntry.querySelector('strong')
      const colorValueElement = colorEntry.querySelector('span')

      expect(colorNameElement).toHaveTextContent(key)
      expect(colorValueElement).toHaveTextContent(color)
    })
  })
})
