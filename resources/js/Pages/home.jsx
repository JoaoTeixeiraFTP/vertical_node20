'use client';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import LineAreaChart from '@/Components/chart/line-area-chart.jsx';
import { VerticalBarChart } from '@/Components/chart/vertical-bar-chart.jsx';
import Loading from '@/Components/Loading.jsx';
import News from '@/Components/custom/news.jsx';
import AutoScrollList from '@/Components/auto-scroll-list.jsx';


export default function Home({ invoices, currentAccount, receipts, news }) {

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const areaConfig = {
        first: {
            label: 'Desktop',
            color: 'var(--chart-1-1)',
            start: 'var(--chart-1-1)',
            middle: 'var(--chart-1-2)',
            end: 'var(--chart-1-3)'
        },
        second: {
            label: 'Mobile',
            color: 'var(--chart-6)'
        }
    };

    const barConfig = {
        ecred: {
            label: 'Desktop',
            color: 'var(--chart-1-1)',
            start: 'var(--chart-1-1)',
            middle: 'var(--chart-1-2)',
            end: 'var(--chart-1-3)'
        },
        edeb: {
            label: 'Mobile',
            color: 'var(--chart-2)'
        }
    };

    return (
        <AuthenticatedLayout
            header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Home</span>}>
            <Head title="Home" />

            <div className="grid grid-flow-col-dense grid-cols-4 gap-4 p-4 grow">
                <div className="col-span-2 h-fill">
                    <div className="overflow-hidden col-span-full bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="text-gray-900 dark:text-gray-100">
                            {invoices === undefined
                                ? <Loading />
                                : <LineAreaChart
                                    title={'Rentatabilidade'}
                                    description={'Showing total visitors for the last 6 months'}
                                    firstLine={'etotal'}
                                    xfield={'fdata'}
                                    data={invoices.data}
                                    config={areaConfig}
                                    xlabel={'Meses'}
                                    ylabel={'Valores'}
                                >
                                    <div className="flex items-start">
                                        <div
                                            className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">9 513
                                        </div>
                                        <div
                                            className="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">+49%
                                        </div>
                                    </div>
                                </LineAreaChart>}
                        </div>
                    </div>
                </div>
                <div className="col-span-2 col-start-3 h-fill">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="text-gray-900 dark:text-gray-100">
                            {currentAccount === undefined
                                ? <Loading />
                            :<VerticalBarChart
                                title={'Faturação'}
                                description={'Showing total visitors for the last 6 months'}
                                yfield={['ecred', 'edeb']}
                                xfield={'datalc'}
                                data={currentAccount.data}
                                config={barConfig}
                                xlabel={'Meses'}
                                ylabel={'Valores'}
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
                <div className="col-span-2">
                    <div
                        className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
                        <div className="p-6 text-gray-900 dark:text-gray-100 h-[40vh]">
                            {currentAccount === undefined
                                ? <Loading />
                                : <AutoScrollList length={currentAccount.data.length}>
                                        {currentAccount.data.map((ca) => (
                                            <li key={ca.nrdoc} className={'flex gap-4'}>
                                                <span className="first:font-medium">{ca.nrdoc}</span>
                                                <span>{ca.cmdesc}</span>
                                                <span>{ca.edebf}</span>
                                            </li>
                                        ))}
                                </AutoScrollList>}
                        </div>
                    </div>
                </div>
                <div className="col-span-2 col-start-3">
                    <div
                        className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {news === undefined
                                ? <Loading />
                                : <News result={news.data} />}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
