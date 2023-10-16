import { useSummary } from '../../hooks/useSummary'
import { SummaryCard } from './SummaryCards'
import { SummaryContainer } from './styles'
import { ArrowUpCircle, ArrowDownCircle, DollarSign } from 'lucide-react'

export const Summary = () => {
  const { income, outcome, total } = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard
        coloring="gray"
        headerType="Entradas"
        icon={<ArrowUpCircle size={32} color="#00B37E" />}
        price={income}
      />
      <SummaryCard
        coloring="gray"
        headerType="Saídas"
        icon={<ArrowDownCircle size={32} color="#F75A68" />}
        price={outcome}
      />
      <SummaryCard
        coloring="green"
        headerType="Total"
        icon={<DollarSign size={32} color="#FFFFFF" />}
        price={total}
      />
    </SummaryContainer>
  )
}
