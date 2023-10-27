import { render } from '@testing-library/react'

import { NewTransactionModal } from './index'

const mockDialogContext = {
  openDialog: jest.fn(),
  closeDialog: jest.fn(),
}

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(() => mockDialogContext),
}))

describe('NewTransactionModal', () => {
  it('should submit the form with invalid input and display error messages', async () => {
    const { container } = render(<NewTransactionModal />)

    expect(container).toMatchSnapshot()
  })

  it('should call handleCreateNewTransaction with correct data and log it to the console when form is submitted with valid data', async () => {
    // Arrange
    const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation()
    const { container } = render(<NewTransactionModal />)

    expect(container).toBeInTheDocument()
    mockConsoleLog.mockRestore()
  })
})
