import DoughnutChart from '../../../../../../Documents/mosaicreact/mosaic-react/src/charts/DoughnutChart.jsx';

// Import utilities
import { tailwindConfig } from '../../../../../../Documents/mosaicreact/mosaic-react/src/utils/Utils.js';

function AnalyticsCard09() {
    const chartData = {
        labels: ['<18', '18-24', '24-36', '>35'],
        datasets: [
            {
                label: 'Visit By Age Category',
                data: [30, 50, 5, 15],
                backgroundColor: [
                    tailwindConfig().theme.colors.violet[500],
                    tailwindConfig().theme.colors.sky[500],
                    tailwindConfig().theme.colors.red[500],
                    tailwindConfig().theme.colors.green[500],
                ],
                hoverBackgroundColor: [
                    tailwindConfig().theme.colors.violet[600],
                    tailwindConfig().theme.colors.sky[600],
                    tailwindConfig().theme.colors.red[600],
                    tailwindConfig().theme.colors.green[600],
                ],
                borderWidth: 0,
            },
        ],
    };

    return (
        <div className="col-span-full flex flex-col rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-4">
            <header className="border-b border-gray-100 px-5 py-4 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Sessions By Age</h2>
            </header>
            {/* Chart built with Chart.js 3 */}
            {/* Change the height attribute to adjust the chart height */}
            <DoughnutChart data={chartData} width={389} height={260} />
        </div>
    );
}

export default AnalyticsCard09;
