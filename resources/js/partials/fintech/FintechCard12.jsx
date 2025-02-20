import { chartAreaGradient } from '../../../../../../Documents/mosaicreact/mosaic-react/src/charts/ChartjsConfig.jsx';
import LineChart from '../../../../../../Documents/mosaicreact/mosaic-react/src/charts/LineChart08.jsx';

// Import utilities
import { hexToRGB, tailwindConfig } from '../../../../../../Documents/mosaicreact/mosaic-react/src/utils/Utils.js';

function FintechCard12() {
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
                    540, 466, 540, 466, 385, 432, 334, 334, 289, 289, 200, 289, 222, 289, 289, 403, 554, 304, 289, 270, 134, 270, 829, 644, 688, 664,
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
                    <h3 className="mb-1 text-xs font-semibold uppercase text-gray-500">
                        <span className="text-gray-800 dark:text-gray-100">Twtr</span> - Twitter Inc.
                    </h3>
                    <div className="mb-1 text-2xl font-bold text-gray-800 dark:text-gray-100">$43.07</div>
                    <div className="text-sm">
                        <span className="font-medium text-green-600">+$4,20 (9,2%)</span> - Today
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

export default FintechCard12;
