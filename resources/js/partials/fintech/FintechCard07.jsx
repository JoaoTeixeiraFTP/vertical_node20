import { chartAreaGradient } from '../../../../../../Documents/mosaicreact/mosaic-react/src/charts/ChartjsConfig.jsx';
import LineChart from '../../../../../../Documents/mosaicreact/mosaic-react/src/charts/LineChart06.jsx';

// Import utilities
import { hexToRGB, tailwindConfig } from '../../../../../../Documents/mosaicreact/mosaic-react/src/utils/Utils.js';

function FintechCard07() {
    const chartData = {
        labels: [
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
            '02-01-2025',
            '03-01-2025',
            '04-01-2025',
        ],
        datasets: [
            // Indigo line
            {
                label: 'Mosaic Portfolio',
                data: [1500, 2000, 1800, 1900, 1900, 2400, 2900, 2600, 3900, 2700, 3500, 3200, 2900, 3500, 3600, 3400, 3900, 3600, 4100, 4100],
                borderColor: tailwindConfig().theme.colors.violet[500],
                fill: true,
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    return chartAreaGradient(ctx, chartArea, [
                        {
                            stop: 0,
                            color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0)`,
                        },
                        {
                            stop: 1,
                            color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.2)`,
                        },
                    ]);
                },
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 3,
                pointBackgroundColor: tailwindConfig().theme.colors.violet[500],
                pointHoverBackgroundColor: tailwindConfig().theme.colors.violet[500],
                pointBorderWidth: 0,
                pointHoverBorderWidth: 0,
                clip: 20,
                tension: 0.2,
            },
            // Gray line
            {
                label: 'Expected Return',
                data: [2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900],
                borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
                fill: false,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 3,
                pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
                pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
                pointBorderWidth: 0,
                pointHoverBorderWidth: 0,
                clip: 20,
                tension: 0.2,
            },
        ],
    };

    return (
        <div className="col-span-full flex flex-col rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-12 xl:col-span-4">
            <header className="flex items-center border-b border-gray-100 px-5 py-4 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Portfolio Returns</h2>
            </header>
            <div className="px-5 py-3">
                <div className="mb-2 text-sm italic">Hey Mark, you're very close to your goal:</div>
                <div className="flex items-center">
                    <div className="mr-2 text-3xl font-bold text-gray-800 dark:text-gray-100">$5,247.09</div>
                    <div className="text-sm">
                        <span className="font-medium text-yellow-500">97.4%</span>
                    </div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Out of $6,000</div>
            </div>
            {/* Chart built with Chart.js 3 */}
            <div className="grow">
                {/* Change the height attribute to adjust the chart height */}
                <LineChart data={chartData} width={389} height={262} />
            </div>
        </div>
    );
}

export default FintechCard07;
