import { SummaryContainer, SummaryCard } from './styles'
import { ArrowUpCircle, ArrowDownCircle, DollarSign } from 'lucide-react'

export const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowUpCircle size={32} color="#00B37E" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowDownCircle size={32} color="#F75A68" />
        </header>
        <strong>R$ 1.259,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <DollarSign size={32} color="#FFFFFF" />
        </header>
        <strong>R$ 16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
