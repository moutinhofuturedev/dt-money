import {
  TransactionContainer,
  TransactionTable,
  PriceHighLight,
} from './styles'

type TransactionTableProps = {
  tableTitle: string
  tableValue: string
  tableType: string
  tableDate: string
  typeExpense: 'income' | 'outcome'
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}

export const Transaction = ({
  tableTitle,
  tableValue,
  tableType,
  tableDate,
  typeExpense,
}: TransactionTableProps) => {
  return (
    <TransactionContainer>
      <TransactionTable>
        <tbody>
          <tr>
            <td>{tableTitle}</td>
            <td>
              <PriceHighLight variant={typeExpense}>
                {tableValue}
              </PriceHighLight>
            </td>
            <td>{tableType}</td>
            <td>{formatDate(tableDate)}</td>
          </tr>
        </tbody>
      </TransactionTable>
    </TransactionContainer>
  )
}
