'use client';

import AutoScrollList from '@/Components/auto-scroll-list.jsx';
import LineAreaChart from '@/Components/chart/line-area-chart.jsx';
import { PieDonutChart } from '@/Components/chart/pie-donut-chart.jsx';
import { VerticalBarChart } from '@/Components/chart/vertical-bar-chart.jsx';
import Currencies from '@/Components/custom/Currencies.jsx';
import News from '@/Components/custom/news.jsx';
import Loading from '@/Components/Loading.jsx';
import NavLink from '@/Components/navigation/nav-link.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { formatEuro } from '@/utils/Utils.js';
import { Head } from '@inertiajs/react';
import { useRef } from 'react';
import image_logo from '../../../public/images/FTP_logo_no_bg.png';

export default function Home({ auth, invoices, currentAccount, receipts, news }) {
    const totalDebits = useRef(0);
    const chartData = useRef(null);
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const baseSizeCard = 'col-span-12 h-96 row-span-1';

    const areaConfig = {
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

    const barConfig = {
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
            color: 'var(--chart-1-1)',
        },
        edeb: {
            label: 'Débito',
            color: 'var(--chart-2)',
        },
    };

    const pieData = [
        { departamento: 'support', vendas: 200, fill: 'var(--color-support)' },
        { departamento: 'tecnico', vendas: 150, fill: 'var(--color-tecnico)' },
        { departamento: 'id', vendas: 100, fill: 'var(--color-id)' },
    ];

    const pieConfig = {
        dataKey: 'vendas',
        nameKey: 'departamento',
        support: {
            label: 'Departamento Support',
            color: 'var(--chart-5)',
        },
        tecnico: {
            label: 'Departamento Técnico',
            color: 'var(--chart-3)',
        },
        id: {
            label: 'Departamento I/D',
            color: 'var(--chart-2)',
        },
    };

    const formatChart = (data, fieldDate, fieldValue) => {
        chartData.current = data.map((item) => {
            return {
                date: meses[new Date(item[fieldDate]).getMonth()],
                value1: item[fieldValue],
            };
        });
        // Só mudar para chartData.current
        return data;
    };

    const addDebit = (debit) => {
        totalDebits.current = totalDebits.current + debit;
        return formatEuro(debit);
    };

    return (
        <AuthenticatedLayout auth={auth} header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Home</span>}>
            <Head title="Home" />

            <div className="grid h-screen grid-cols-12 gap-4 p-4">
                <div id={'area-chart'} className={baseSizeCard + ' row-start-1 sm:col-span-6'}>
                    <div className="h-full overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
                        <div className="text-gray-900 dark:text-gray-100">
                            {invoices === undefined ? (
                                <Loading />
                            ) : (
                                <LineAreaChart
                                    sizeChart={'max-h-60'}
                                    title={'Rentatabilidade'}
                                    data={formatChart(invoices.data, 'fdata', 'etotal')}
                                    config={areaConfig}
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
                <div id={'bar-chart'} className={baseSizeCard + ' row-start-2 sm:col-span-6 sm:col-start-7 sm:row-start-1'}>
                    <div className="h-full overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
                        <div className="text-gray-900 dark:text-gray-100">
                            {currentAccount === undefined ? (
                                <Loading />
                            ) : (
                                <VerticalBarChart sizeChart={'max-h-60'} title={'Faturação'} data={currentAccount.data} config={barConfig}>
                                    <div className="flex items-start">
                                        <div className="mr-2 text-3xl font-bold text-gray-800 dark:text-gray-100">9 513</div>
                                        <div className="rounded-full bg-green-500/20 px-1.5 text-sm font-medium text-green-700">+49%</div>
                                    </div>
                                </VerticalBarChart>
                            )}
                        </div>
                    </div>
                </div>
                <div id={'donut'} className={baseSizeCard + ' row-start-3 sm:col-span-6 sm:row-start-2 xl:col-span-4'}>
                    <div className={'overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800'}>
                        <div className={'h-full w-full'}>
                            <PieDonutChart data={pieData} config={pieConfig} title={'Distribuição de Vendas por Departamentos'} />
                        </div>
                    </div>
                </div>
                <div id={'table-no-reguralized'} className={baseSizeCard + ' row-start-4 sm:col-span-6 sm:row-start-2 xl:col-span-4 xl:col-start-5'}>
                    <div className="flex-col rounded-lg bg-white shadow-sm dark:bg-gray-800">
                        <div className="text-gray-900 dark:text-gray-100">
                            {currentAccount === undefined ? (
                                <Loading />
                            ) : (
                                <AutoScrollList
                                    title={'Não Regularizado'}
                                    length={currentAccount.data.length}
                                    footerValue={totalDebits}
                                    className={'max-h-96'}
                                    classNameUl={'h-64'}
                                >
                                    {currentAccount.data.map((ca) => (
                                        <NavLink
                                            href={route('finance.documents', ['current-account', ca.ccstamp])}
                                            key={ca.nrdoc}
                                            className={'w-full justify-between gap-4'}
                                        >
                                            <span className="first:font-medium">{ca.nrdoc}</span>
                                            <span>{ca.cmdesc}</span>
                                            {ca.ecred - ca.ecredf > 0 || ca.edeb - ca.edebf > 0 ? (
                                                <span className="text-right text-sm text-red-600 dark:text-red-400">
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
                <div id={'news'} className={baseSizeCard + ' row-start-5 sm:col-span-6 sm:row-start-4 xl:col-span-4 xl:col-start-9 xl:row-start-2'}>
                    <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
                        {news === undefined ? <Loading /> : <News result={news.data} />}
                    </div>
                </div>
                <div id={'table-currencies'} className={baseSizeCard + ' row-start-6 sm:row-start-3 xl:col-span-7'}>
                    <div className="h-full rounded-lg bg-white shadow-sm dark:bg-gray-800">
                        <div className="text-gray-900 dark:text-gray-100">
                            <Currencies />
                        </div>
                    </div>
                </div>
                <div
                    id={'message-day'}
                    className={baseSizeCard + ' row-start-7 sm:col-span-6 sm:col-start-7 sm:row-start-4 xl:col-span-5 xl:col-start-8 xl:row-start-3'}
                >
                    <div className="h-full overflow-hidden rounded-lg bg-white px-2 py-5 shadow-sm dark:bg-gray-800">
                        <header className="mx-5 dark:border-gray-700/60">
                            <h2 className="font-semibold text-gray-800 dark:text-gray-100">Mensagem do Mês</h2>
                        </header>
                        <hr className="mx-5 mb-4 border-t border-gray-200 dark:border-gray-700" />

                        <div className="flex h-full grow flex-col justify-center p-5">
                            <ul className="space-y-2">
                                <li className="flex items-start space-x-2">
                                    <div className="flex-1 text-center">
                                        <a href="https://ftpporto.com/">
                                            <img
                                                src={image_logo}
                                                alt="Image"
                                                className="h-30 mx-auto w-36 rounded-md object-cover dark:bg-gray-800"
                                            />
                                        </a>
                                        <p className="mt-4 text-sm font-medium">
                                            Lembre-se de que as oportunidades não caem do céu, são contruídas pelo seu trabalho árduo.
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">FTP</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
