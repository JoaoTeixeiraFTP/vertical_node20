import { chartAreaGradient } from '@/charts/ChartjsConfig.jsx';
import LineChart from '@/charts/LineChart01.jsx';
import EditMenu from '@/Components/dropdown/DropdownEditMenu.jsx';
import { hexToRGB } from '@/utils/Utils.js';
import { Link } from '@inertiajs/react';

function DashboardCard01() {
    const chartData = {
        labels: [
            '12-01-2022',
            '01-01-2023',
            '02-01-2023',
            '03-01-2023',
            '04-01-2023',
            '05-01-2023',
            '06-01-2023',
            '07-01-2023',
            '08-01-2023',
            '09-01-2023',
            '10-01-2023',
            '11-01-2023',
            '12-01-2023',
            '01-01-2024',
            '02-01-2024',
            '03-01-2024',
            '04-01-2024',
            '05-01-2024',
            '06-01-2024',
            '07-01-2024',
            '08-01-2024',
            '09-01-2024',
            '10-01-2024',
            '11-01-2024',
            '12-01-2024',
            '01-01-2025',
        ],
        datasets: [
            // Indigo line
            {
                data: [
                    732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192, 154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532,
                ],
                fill: true,
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    return chartAreaGradient(ctx, chartArea, [
                        {
                            stop: 0,
                            color: `rgba(${hexToRGB('#8470FF')}, 0)`,
                        },
                        {
                            stop: 1,
                            color: `rgba(${hexToRGB('#8470FF')}, 0.2)`,
                        },
                    ]);
                },
                borderColor: '#8470FF',
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 3,
                pointBackgroundColor: '#8470FF',
                pointHoverBackgroundColor: '#8470FF',
                pointBorderWidth: 0,
                pointHoverBorderWidth: 0,
                clip: 20,
                tension: 0.2,
            },
            // Gray line
            {
                data: [
                    532, 532, 532, 404, 404, 314, 314, 314, 314, 314, 234, 314, 234, 234, 314, 314, 314, 388, 314, 202, 202, 202, 202, 314, 720, 642,
                ],
                borderColor: `rgba(${hexToRGB('#6B7280')}, 0.25)`,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 3,
                pointBackgroundColor: `rgba(${hexToRGB('#6B7280')}, 0.25)`,
                pointHoverBackgroundColor: `rgba(${hexToRGB('#6B7280')}, 0.25)`,
                pointBorderWidth: 0,
                pointHoverBorderWidth: 0,
                clip: 20,
                tension: 0.2,
            },
        ],
    };

    return (
        <div className="col-span-full flex flex-col rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-4">
            <div className="px-5 pt-5">
                <header className="mb-2 flex items-start justify-between">
                    <h2 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">Acme Plus</h2>
                    {/* Menu button */}
                    <EditMenu align="right" className="relative inline-flex">
                        <li>
                            <Link
                                className="flex px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
                                to="#0"
                            >
                                Option 1
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="flex px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
                                to="#0"
                            >
                                Option 2
                            </Link>
                        </li>
                        <li>
                            <Link className="flex px-3 py-1 text-sm font-medium text-red-500 hover:text-red-600" to="#0">
                                Remove
                            </Link>
                        </li>
                    </EditMenu>
                </header>
                <div className="mb-1 text-xs font-semibold uppercase text-gray-400 dark:text-gray-500">Sales</div>
                <div className="flex items-start">
                    <div className="mr-2 text-3xl font-bold text-gray-800 dark:text-gray-100">$24,780</div>
                    <div className="rounded-full bg-green-500/20 px-1.5 text-sm font-medium text-green-700">+49%</div>
                </div>
            </div>
            {/* Chart built with Chart.js 3 */}
            <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
                {/* Change the height attribute to adjust the chart height */}
                <LineChart data={chartData} width={389} height={128} />
            </div>
        </div>
    );
}

export default DashboardCard01;
