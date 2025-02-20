import { chartAreaGradient } from '../../../../../../Documents/mosaicreact/mosaic-react/src/charts/ChartjsConfig.jsx';
import LineChart from '../../../../../../Documents/mosaicreact/mosaic-react/src/charts/LineChart08.jsx';

// Import utilities
import { hexToRGB, tailwindConfig } from '../../../../../../Documents/mosaicreact/mosaic-react/src/utils/Utils.js';

function FintechCard11() {
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
            // Line
            {
                data: [
                    222, 222, 226, 271, 365, 365, 238, 324, 288, 206, 324, 324, 500, 409, 409, 273, 232, 273, 500, 570, 767, 808, 685, 767, 685, 685,
                ],
                fill: true,
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    return chartAreaGradient(ctx, chartArea, [
                        {
                            stop: 0,
                            color: `rgba(${hexToRGB(tailwindConfig().theme.colors.green[500])}, 0)`,
                        },
                        {
                            stop: 1,
                            color: `rgba(${hexToRGB(tailwindConfig().theme.colors.green[500])}, 0.2)`,
                        },
                    ]);
                },
                borderColor: tailwindConfig().theme.colors.green[500],
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 3,
                pointBackgroundColor: tailwindConfig().theme.colors.green[500],
                pointHoverBackgroundColor: tailwindConfig().theme.colors.green[500],
                pointBorderWidth: 0,
                pointHoverBorderWidth: 0,
                clip: 20,
                tension: 0.2,
            },
        ],
    };

    return (
        <div className="col-span-full flex flex-col rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-3">
            <div className="px-5 pt-5">
                <header>
                    <h3 className="mb-1 text-sm font-semibold uppercase text-gray-500">
                        <span className="text-gray-800 dark:text-gray-100">Amzn</span> - Amazon Inc.
                    </h3>
                    <div className="mb-1 text-2xl font-bold text-gray-800 dark:text-gray-100">$3,400.35</div>
                    <div className="text-sm">
                        <span className="font-medium text-green-600">+$142 (3,7%)</span> - Today
                    </div>
                </header>
            </div>
            {/* Chart built with Chart.js 3 */}
            <div className="grow">
                {/* Change the height attribute to adjust the chart height */}
                <LineChart data={chartData} width={286} height={98} />
            </div>
        </div>
    );
}

export default FintechCard11;
