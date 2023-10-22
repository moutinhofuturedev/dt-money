import { render } from '@testing-library/react'

import { NewTransactionModal } from './index'

const mockDialogContext = {
  // Inclua quaisquer valores que o componente precise do contexto
  openDialog: jest.fn(),
  closeDialog: jest.fn(),
}

// Substitua o useContext do React
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(() => mockDialogContext),
}))

describe('NewTransactionModal', () => {
  it('should submit the form with invalid input and display error messages', async () => {
    const { container } = render(<NewTransactionModal />)

    expect(container).toMatchSnapshot()
  })
})
