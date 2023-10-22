import { useSummary } from '../../hooks/useSummary'
import { SummaryCard } from './SummaryCards'
import { SummaryContainer } from './styles'
import { ArrowUpCircle, ArrowDownCircle, DollarSign } from 'lucide-react'

export const Summary = () => {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard
        coloring="gray"
        headerType="Entradas"
        icon={<ArrowUpCircle size={32} color="#00B37E" />}
        price={summary?.income}
      />
      <SummaryCard
        coloring="gray"
        headerType="Saídas"
        icon={<ArrowDownCircle size={32} color="#F75A68" />}
        price={summary?.outcome}
      />
      <SummaryCard
        coloring="green"
        headerType="Total"
        icon={<DollarSign size={32} color="#FFFFFF" />}
        price={summary?.total}
      />
    </SummaryContainer>
  )
}
