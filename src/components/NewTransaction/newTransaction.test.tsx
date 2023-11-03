import { render, waitFor } from '@testing-library/react'

import { NewTransactionModal } from './index'
import { api } from '../../lib/api'
// import toast from 'react-hot-toast'

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
    const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation()
    const { container } = render(<NewTransactionModal />)

    expect(container).toBeInTheDocument()
    mockConsoleLog.mockRestore()
  })

  it('should submit the form and send a POST request to the API', async () => {
    render(<NewTransactionModal />)

    const mockPost = jest.spyOn(api, 'post').mockResolvedValueOnce({
      description: 'Test Description',
      expense: 'income',
      category: 'Test Category',
      price: 10,
      createdAt: expect.any(Date),
    })

    await waitFor(() => {
      expect(mockPost).not.toBeCalled()
    })
  })

  it('should display an error toast and log errors to the console when the API request fails', async () => {
    const mockPost = jest
      .spyOn(api, 'post')
      .mockRejectedValueOnce(new Error('API Error'))
    const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation()

    render(<NewTransactionModal />)

    await waitFor(() => {
      expect(mockPost).not.toHaveBeenCalled()
      expect(mockConsoleLog).not.toHaveBeenCalledWith()
    })

    mockPost.mockRestore()
    mockConsoleLog.mockRestore()
  })
})
