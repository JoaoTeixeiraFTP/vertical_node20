'use client'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import LineAreaChart from '@/Components/chart/line-area-chart.jsx';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table.jsx';
import { VerticalBarChart } from '@/Components/chart/vertical-bar-chart.jsx';
import Loading from '@/Components/Loading.jsx';
import News from '@/Components/custom/news.jsx';
import { useEffect, useState } from 'react';


export default function Home({ invoices, currentAccount, receipts, news }) {
    const [areaData, setAreaData] = useState(null);
    const [barData, setBarData] = useState(null);

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    const chartData = [
        { month: 'Janeiro', first: 186, second: 80 },
        { month: 'Fevereiro', first: 305, second: 200 },
        { month: 'Março', first: 237, second: 120 },
        { month: 'Abril', first: 73, second: 190 },
        { month: 'Maio', first: 209, second: 130 },
        { month: 'Junho', first: 214, second: 140 },
        { month: 'Julho', first: 186, second: 80 },
        { month: 'Agosto', first: 305, second: 200 },
        { month: 'Setembro', first: 237, second: 120 },
        { month: 'Outrubro', first: 73, second: 190 },
        { month: 'Novembro', first: 209, second: 130 },
        { month: 'Dezembro', first: 214, second: 140 },
    ];

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
        first: {
            label: 'Desktop',
            color: 'var(--chart-1-1)',
            start: 'var(--chart-1-1)',
            middle: 'var(--chart-1-2)',
            end: 'var(--chart-1-3)'
        },
        second: {
            label: 'Mobile',
            color: 'var(--chart-2)'
        }
    };

    const setData = function() {
        let tempData;
        for (const argument of arguments) {

        }
    }

    return (
        <AuthenticatedLayout
            header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Home</span>}>
            <Head title="Home" />

            <div className="grid grid-flow-col-dense grid-cols-4 gap-4 p-4 grow">
                <div className="col-span-2 h-fill">
                    <div className="overflow-hidden col-span-full bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="text-gray-900 dark:text-gray-100">
                            <LineAreaChart
                                title={'Rentatabilidade'}
                                description={'Showing total visitors for the last 6 months'}
                                data={chartData}
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
                            </LineAreaChart>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 col-start-3 h-fill">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="text-gray-900 dark:text-gray-100">
                            <VerticalBarChart
                                title={'Faturação'}
                                description={'Showing total visitors for the last 6 months'}
                                yfield={['first', 'second']}
                                xfield={'month'}
                                data={chartData}
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
                            </VerticalBarChart>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div
                        className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {currentAccount === undefined
                                ? <Loading />
                                : <Table>
                                    <TableCaption>A list of your recent invoices.</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px]">nrdoc</TableHead>
                                            <TableHead>cmdesc</TableHead>
                                            <TableHead>edebf</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {currentAccount.data.map((ca) => (
                                            <TableRow key={ca.nrdoc}>
                                                <TableCell className="first:font-medium">{ca.nrdoc}</TableCell>
                                                <TableCell>{ca.cmdesc}</TableCell>
                                                <TableCell>{ca.edebf}</TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                                </Table>}
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
