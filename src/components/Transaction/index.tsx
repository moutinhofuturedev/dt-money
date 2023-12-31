import { priceFormatter, dateFormatter } from '../../utils/formatter'
import {
  TransactionContainer,
  TransactionTable,
  PriceHighLight,
} from './styles'
import { CalendarCheck } from 'lucide-react'
export interface TransactionTableProps {
  tableDescription: string
  tablePrice: number
  tableCategory: string
  tableDate: string
  tableExpense: 'income' | 'outcome'
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
                {tableExpense === 'outcome' && '- '}
                {priceFormatter.format(tablePrice)}
              </PriceHighLight>
            </td>
            <td>{tableCategory}</td>
            <td>
              <CalendarCheck size={18} />
              {dateFormatter.format(new Date(tableDate))}
            </td>
          </tr>
        </tbody>
      </TransactionTable>
    </TransactionContainer>
  )
}
