import AutoScrollList from '@/Components/auto-scroll-list.jsx';
import LineAreaChart from '@/Components/chart/line-area-chart.jsx';
import { VerticalBarChart } from '@/Components/chart/vertical-bar-chart.jsx';
import Loading from '@/Components/Loading.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';

export default function FinanceDashboard({ invoices, currentAccount, receipts }) {
    const areaConfig = {
        first: {
            label: 'Faturas',
            color: 'var(--chart-1-1)',
            start: 'var(--chart-1-1)',
            middle: 'var(--chart-1-2)',
            end: 'var(--chart-1-3)',
        },
    };

    const barConfig = {
        ecred: {
            label: 'Creditos',
            color: 'var(--chart-3)',
        },
        edeb: {
            label: 'Debitos',
            color: 'var(--chart-4)',
        },
    };

    return (
        <AuthenticatedLayout header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Financeira Dashboard</span>}>
            <Head title="Financeira Dashboard" />

            <div className="grid grow grid-flow-col-dense grid-cols-4 gap-4 p-4">
                <div className="h-fill col-span-3">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="pb-1 pl-0 pr-4 text-gray-900 dark:text-gray-100">
                            {invoices === undefined ? (
                                <Loading />
                            ) : (
                                <LineAreaChart
                                    title={'Faturas'}
                                    description={''}
                                    firstLine={'etotal'}
                                    xfield={'fdata'}
                                    data={invoices.data}
                                    config={areaConfig}
                                    xlabel={'Dia'}
                                    ylabel={'Valores(€)'}
                                >
                                    <div className="flex items-start">
                                        <div className="mr-2 text-3xl font-bold text-gray-800 dark:text-gray-100">9 513</div>
                                        <div className="rounded-full bg-green-500/20 px-1.5 text-sm font-medium text-green-700">+49%</div>
                                    </div>
                                </LineAreaChart>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-span-1 col-start-4">
                    <div className="col-span-full flex h-full flex-col rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-4">
                        <div className="h-[70vh] p-6 text-gray-900 dark:text-gray-100">
                            {invoices === undefined ? (
                                <Loading />
                            ) : (
                                <AutoScrollList length={invoices.data.length}>
                                    {invoices.data.map((inv) => (
                                        <li key={inv.ftstamp} className={'flex gap-4'}>
                                            <span className="first:font-medium">{inv.nmdoc}</span>
                                            <span>{inv.fdata}</span>
                                            <span>{inv.etotal}</span>
                                        </li>
                                    ))}
                                </AutoScrollList>
                            )}
                        </div>
                    </div>
                </div>
                <div className="h-fill col-span-3">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="pb-1 pl-0 pr-4 text-gray-900 dark:text-gray-100">
                            {currentAccount === undefined ? (
                                <Loading />
                            ) : (
                                <VerticalBarChart
                                    title={'Contas Correntes'}
                                    description={''}
                                    yfield={['ecred', 'edeb']}
                                    xfield={'datalc'}
                                    data={currentAccount.data}
                                    config={barConfig}
                                    xlabel={'Dia'}
                                    ylabel={'Valores (€)'}
                                >
                                    <div className="flex items-start">
                                        <div className="mr-2 text-3xl font-bold text-gray-800 dark:text-gray-100">9 513</div>
                                        <div className="rounded-full bg-green-500/20 px-1.5 text-sm font-medium text-green-700">+49%</div>
                                    </div>
                                </VerticalBarChart>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-span-1 col-start-4">
                    <div className="col-span-full flex h-full flex-col rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-4">
                        <div className="h-[70vh] p-6 text-gray-900 dark:text-gray-100">
                            {currentAccount === undefined ? (
                                <Loading />
                            ) : (
                                <AutoScrollList length={currentAccount.data.length}>
                                    {currentAccount.data.map((ca) => (
                                        <li key={ca.nrdoc} className={'flex gap-4'}>
                                            <span className="first:font-medium">{ca.nrdoc}</span>
                                            <span>{ca.cmdesc}</span>
                                            <span>{ca.edebf}</span>
                                        </li>
                                    ))}
                                </AutoScrollList>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
