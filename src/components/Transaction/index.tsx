import {
  TransactionContainer,
  TransactionTable,
  PriceHighLight,
} from './styles'
export interface TransactionTableProps {
  tableDescription: string
  tablePrice: number
  tableCategory: string
  tableDate: string
  tableExpense: 'income' | 'outcome'
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}

export const Transaction = ({
  tableDescription,
  tablePrice,
  tableCategory,
  tableDate,
  tableExpense,
}: TransactionTableProps) => {
  return (
    <TransactionContainer>
      <TransactionTable>
        <tbody>
          <tr>
            <td>{tableDescription}</td>
            <td>
              <PriceHighLight variant={tableExpense}>
                {`R$ ${tablePrice}`}
              </PriceHighLight>
            </td>
            <td>{tableCategory}</td>
            <td>{formatDate(tableDate)}</td>
          </tr>
        </tbody>
      </TransactionTable>
    </TransactionContainer>
  )
}
