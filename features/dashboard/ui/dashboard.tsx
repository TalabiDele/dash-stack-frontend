import { Text } from '@/shared/ui/Text/text'
import SalesChartCard from '@/widgets/sales-chart/ui/sales-chart-card'
import { SummaryCards } from '@/widgets/summary-cards/ui/summary-cards'

const Dashboard = () => {
	return (
		<div className='flex flex-col gap-8'>
			<Text variant='h1'>Dashboard</Text>
			<SummaryCards />
			<SalesChartCard />
		</div>
	)
}

export default Dashboard
