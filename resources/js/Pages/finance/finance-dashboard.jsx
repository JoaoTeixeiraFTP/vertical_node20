import LineAreaChart from '@/Components/chart/line-area-chart.jsx';
import { VerticalBarChart } from '@/Components/chart/vertical-bar-chart.jsx';
import Loading from '@/Components/custom/Loading.jsx';
import AutoScrollList from '@/Components/data-display/auto-scroll-list.jsx';
import NavLink from '@/Components/navigation/nav-link.jsx';
import { Badge } from '@/Components/ui/badge.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { formatEuro, getBadgeColors } from '@/utils/Utils.js';
import { Head, usePage } from '@inertiajs/react';
import { useRef } from 'react';

export default function FinanceDashboard({ auth, invoices, currentAccount, receipts }) {
    const page = usePage();
    const totalDebits = useRef(0);

    const invoiceConfig = {
        x: {
            label: 'Meses',
            field: 'fdata',
        },
        y: {
            label: 'Valores (€)',
            field: ['etotal', 'basei'], // CORRIGIR
        },
        etotal: {
            label: 'Receitas',
            color: '--chart-1',
        },
        basei: {
            // CORRIGIR
            label: 'Despesas',
            color: '--chart-5',
            // color: '#e30f0f',
        },
    };

    const accountConfig = {
        x: {
            label: 'Meses',
            field: 'datalc',
        },
        y: {
            label: 'Valores (€)',
            field: ['ecred', 'edeb'],
        },
        ecred: {
            label: 'Crédito',
            color: 'var(--chart-1)',
        },
        edeb: {
            label: 'Débito',
            color: 'var(--chart-2)',
        },
    };

    const receiptConfig = {
        x: {
            label: 'Recibo',
            field: 'rno',
        },
        y: {
            label: 'Valores (€)',
            field: ['etotal', 'basei'], // CORRIGIR
        },
        etotal: {
            label: 'Receitas',
            color: '--chart-3',
        },
        basei: {
            // CORRIGIR
            label: 'Despesas',
            color: '--chart-4',
            // color: '#e30f0f',
        },
    };

    const addDebit = (debit) => {
        totalDebits.current = totalDebits.current + debit;
        return formatEuro(debit);
    };

    return (
        <AuthenticatedLayout
            url={page.url}
            auth={auth}
            header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Financeira Dashboard</span>}
        >
            <Head title="Financeira Dashboard" />

            <div className="grid grow grid-flow-col-dense grid-cols-4 gap-4 p-4">
                <div id={'invoicesChart'} className="h-fill col-span-4 row-start-1 sm:col-span-3">
                    <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
                        <div className="pb-1 pl-0 pr-4 text-gray-900 dark:text-gray-100">
                            {invoices === undefined ? (
                                <Loading />
                            ) : (
                                <LineAreaChart title={'Faturas'} data={invoices.data} config={invoiceConfig}>
                                    <div className="flex items-start">
                                        <div className="mr-2 text-3xl font-bold text-gray-800 dark:text-gray-100">9 513</div>
                                        <div className="rounded-full bg-green-500/20 px-1.5 text-sm font-medium text-green-700">+49%</div>
                                    </div>
                                </LineAreaChart>
                            )}
                        </div>
                    </div>
                </div>
                <div id={'invoicesTable'} className="col-span-4 row-start-2 sm:col-span-1 sm:col-start-4 sm:row-start-1">
                    <div className="col-span-full flex h-full flex-col rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-4">
                        <div className="h-[60vh] text-gray-900 dark:text-gray-100">
                            {invoices === undefined ? (
                                <Loading />
                            ) : (
                                <AutoScrollList
                                    title={'Lista de Faturas'}
                                    length={invoices.data.length}
                                    className={'max-h-[45vh] sm:max-h-[50vh] xl:max-h-[60vh]'}
                                    classNameUl={'max-h-[50vh] sm:max-h-[50vh] xl:max-h-[65vh]'}
                                >
                                    {invoices.data.map((inv) => (
                                        <NavLink
                                            href={route('finance.documents', ['invoices', inv.ftstamp])}
                                            key={inv.ftstamp}
                                            className={'flex justify-between gap-4'}
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
                <div id={'currentAccountsChart'} className="h-fill col-span-4 row-start-3 sm:col-span-3 sm:row-start-2">
                    <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
                        <div className="pb-1 pl-0 pr-4 text-gray-900 dark:text-gray-100">
                            {currentAccount === undefined ? (
                                <Loading />
                            ) : (
                                <VerticalBarChart title={'Contas Correntes'} data={currentAccount.data} config={accountConfig}>
                                    <div className="flex items-start">
                                        <div className="mr-2 text-3xl font-bold text-gray-800 dark:text-gray-100">9 513</div>
                                        <div className="rounded-full bg-green-500/20 px-1.5 text-sm font-medium text-green-700">+49%</div>
                                    </div>
                                </VerticalBarChart>
                            )}
                        </div>
                    </div>
                </div>
                <div id={'currentAccountsTable'} className="col-span-4 row-start-4 sm:col-span-1 sm:col-start-4 sm:row-start-2">
                    <div className="col-span-full flex h-full flex-col rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-4">
                        <div className="h-[60vh] text-gray-900 dark:text-gray-100">
                            {currentAccount === undefined ? (
                                <Loading />
                            ) : (
                                <AutoScrollList
                                    title={'Não Regularizado'}
                                    length={currentAccount.data.length}
                                    footerValue={totalDebits}
                                    className={'max-h-[45vh] sm:max-h-[50vh] xl:max-h-[60vh]'}
                                    classNameUl={'max-h-[45vh] sm:max-h-[47vh] xl:max-h-[60vh]'}
                                >
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
                <div id={'receiptsChart'} className="h-fill col-span-4 row-start-3 sm:col-span-3">
                    <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
                        <div className="pb-1 pl-0 pr-4 text-gray-900 dark:text-gray-100">
                            {receipts === undefined ? (
                                <Loading />
                            ) : (
                                <LineAreaChart title={'Recibos'} data={receipts.data} config={receiptConfig}>
                                    <div className="flex items-start">
                                        <div className="mr-2 text-3xl font-bold text-gray-800 dark:text-gray-100">9 513</div>
                                        <div className="rounded-full bg-green-500/20 px-1.5 text-sm font-medium text-green-700">+49%</div>
                                    </div>
                                </LineAreaChart>
                            )}
                        </div>
                    </div>
                </div>
                <div id={'receiptsTable'} className="col-span-4 row-start-5 sm:col-span-1 sm:col-start-4 sm:row-start-3">
                    <div className="col-span-full flex h-full flex-col rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-4">
                        <div className="h-[60vh] text-gray-900 dark:text-gray-100">
                            {receipts === undefined ? (
                                <Loading />
                            ) : (
                                <AutoScrollList
                                    title={'Lista de Faturas'}
                                    length={receipts.data.length}
                                    className={'max-h-[45vh] sm:max-h-[50vh] xl:max-h-[60vh]'}
                                    classNameUl={'max-h-[50vh] sm:max-h-[50vh] xl:max-h-[65vh]'}
                                >
                                    {receipts.data.map((re) => (
                                        <NavLink
                                            href={route('finance.documents', ['receipts', re.restamp])}
                                            key={re.restamp}
                                            className={'flex justify-between gap-4'}
                                        >
                                            <span className={'text-[0.95em]'}>{re.rdata}</span>
                                            <span className={'text-[0.95em]'}>{re.nome}</span>
                                            <span className={'text-[0.95em]'}>{formatEuro(re.etotal)}</span>
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
