import BarChart from '../../../../../../Documents/mosaicreact/mosaic-react/src/charts/BarChart06.jsx';

// Import utilities
import { tailwindConfig } from '../../../../../../Documents/mosaicreact/mosaic-react/src/utils/Utils.js';

function FintechCard04() {
    const chartData = {
        labels: ['02-01-2023', '03-01-2023', '04-01-2023', '05-01-2023'],
        datasets: [
            // Indigo bars
            {
                label: 'Inflow',
                data: [4100, 1900, 2700, 3900],
                backgroundColor: tailwindConfig().theme.colors.violet[500],
                hoverBackgroundColor: tailwindConfig().theme.colors.violet[600],
                categoryPercentage: 0.7,
                borderRadius: 4,
            },
            // Gray bars
            {
                label: 'Outflow',
                data: [2000, 1000, 1100, 2600],
                backgroundColor: tailwindConfig().theme.colors.violet[200],
                hoverBackgroundColor: tailwindConfig().theme.colors.violet[300],
                categoryPercentage: 0.7,
                borderRadius: 4,
            },
        ],
    };

    return (
        <div className="col-span-full flex flex-col rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6">
            <header className="border-b border-gray-100 px-5 py-4 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Cash Flow by Account</h2>
            </header>
            {/* Chart built with Chart.js 3 */}
            {/* Change the height attribute to adjust the chart height */}
            <BarChart data={chartData} width={595} height={248} />
        </div>
    );
}

export default FintechCard04;
