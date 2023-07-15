import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  TransactionsContainer,
  TransactionsTable,
  PriceHighLight,
} from './styles'

export const Transactions = () => {
  return (
    <>
      <Header title="DT Money" name="Nova transação" />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td width="50%">Aluguel do apartamento</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 1.200,00</PriceHighLight>
              </td>
              <td>Casa</td>
              <td>13/04/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}
