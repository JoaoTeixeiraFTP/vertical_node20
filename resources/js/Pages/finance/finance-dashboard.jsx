import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import { VerticalBarChart } from '@/Components/chart/vertical-bar-chart.jsx';
import Loading from '@/Components/Loading.jsx';

export default function FinanceDashboard({ invoices, currentAccount, receipts }) {
    // const [sidebarOpen, setSidebarOpen] = useState(false);

    const areaConfig = {
        first: {
            label: 'Faturas',
            color: 'var(--chart-1-1)',
            start: 'var(--chart-1-1)',
            middle: 'var(--chart-1-2)',
            end: 'var(--chart-1-3)'
        },
    };

    const barConfig = {
        first: {
            label: 'Conta Corrente',
            color: 'var(--chart-1-1)',
            start: 'var(--chart-1-1)',
            middle: 'var(--chart-1-2)',
            end: 'var(--chart-1-3)'
        },
    };

    return (
        <AuthenticatedLayout header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Financeira Dashboard</span>}>
            <Head title="Financeira Dashboard" />

            <div className="grid grid-flow-col-dense grid-cols-4 gap-4 p-4 grow">
                <div className="col-span-2 h-fill">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="pb-1 pr-4 pl-0 text-gray-900 dark:text-gray-100">
                            {invoices === undefined
                                ? <Loading />
                                :<VerticalBarChart
                                title={'Faturação'}
                                description={'Showing total visitors for the last 6 months'}
                                yfield={'etotal'}
                                xfield={'fdata'}
                                data={invoices.data}
                                config={barConfig}
                                xlabel={'Dia'}
                                ylabel={'Valores (€)'}
                            >
                                <div className="flex items-start">
                                    <div
                                        className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">9 513
                                    </div>
                                    <div
                                        className="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">+49%
                                    </div>
                                </div>
                            </VerticalBarChart>}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
