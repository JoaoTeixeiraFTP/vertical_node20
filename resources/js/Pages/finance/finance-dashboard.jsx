import AutoScrollList from '@/Components/auto-scroll-list.jsx';
import LineAreaChart from '@/Components/chart/line-area-chart.jsx';
import { VerticalBarChart } from '@/Components/chart/vertical-bar-chart.jsx';
import Loading from '@/Components/Loading.jsx';
import NavLink from '@/Components/navigation/nav-link.jsx';
import { Badge } from '@/Components/ui/badge.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { formatEuro, getBadgeColors } from '@/utils/Utils.js';
import { Head } from '@inertiajs/react';
import { useRef } from 'react';

export default function FinanceDashboard({ invoices, currentAccount, receipts }) {
    const totalDebits = useRef(0);
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

    const addDebit = (debit) => {
        totalDebits.current = totalDebits.current + debit;
        return formatEuro(debit);
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
                        <div className="h-[60vh] text-gray-900 dark:text-gray-100">
                            {invoices === undefined ? (
                                <Loading />
                            ) : (
                                <AutoScrollList title={'Lista de Faturas'} length={invoices.data.length}>
                                    {invoices.data.map((inv) => (
                                        <NavLink
                                            href={route('finance.documents', ['invoices', inv.ftstamp])}
                                            key={inv.ftstamp}
                                            className={'flex gap-4'}
                                        >
                                            <Badge variant="simple" className={getBadgeColors(inv.nmdoc) + ' text-[0.95em]'}>
                                                {inv.nmdoc}
                                            </Badge>
                                            <span className={'text-[0.95em]'}>{inv.fdata}</span>
                                            <span className={'text-[0.95em]'}>{formatEuro(inv.etotal)}</span>
                                        </NavLink>
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
                        <div className="h-[55vh] text-gray-900 dark:text-gray-100">
                            {currentAccount === undefined ? (
                                <Loading />
                            ) : (
                                <AutoScrollList title={'Não Regularizado'} length={currentAccount.data.length} footerValue={totalDebits}>
                                    {currentAccount.data.map((ca) => (
                                        <NavLink
                                            href={route('finance.documents', ['current-account', ca.ccstamp])}
                                            key={ca.nrdoc}
                                            className={'flex justify-between gap-4'}
                                        >
                                            <span className="first:font-medium">{ca.nrdoc}</span>
                                            <span>{ca.cmdesc}</span>
                                            {ca.ecred - ca.ecredf > 0 || ca.edeb - ca.edebf > 0 ? (
                                                <span className="text-sm text-red-600 dark:text-red-400">
                                                    Em dívida: {addDebit(ca.edeb - ca.edebf)}
                                                </span>
                                            ) : (
                                                <span className="text-sm text-green-600 dark:text-green-400">Sem dívida</span>
                                            )}
                                        </NavLink>
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
