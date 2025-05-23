import BarChart from '../../../../../../Documents/mosaicreact/mosaic-react/src/charts/BarChart01.jsx';

// Import utilities
import { tailwindConfig } from '../../../../../../Documents/mosaicreact/mosaic-react/src/utils/Utils.js';

function DashboardCard04() {
    const chartData = {
        labels: ['12-01-2022', '01-01-2023', '02-01-2023', '03-01-2023', '04-01-2023', '05-01-2023'],
        datasets: [
            // Light blue bars
            {
                label: 'Direct',
                data: [800, 1600, 900, 1300, 1950, 1700],
                backgroundColor: tailwindConfig().theme.colors.sky[500],
                hoverBackgroundColor: tailwindConfig().theme.colors.sky[600],
                barPercentage: 0.7,
                categoryPercentage: 0.7,
                borderRadius: 4,
            },
            // Blue bars
            {
                label: 'Indirect',
                data: [4900, 2600, 5350, 4800, 5200, 4800],
                backgroundColor: tailwindConfig().theme.colors.violet[500],
                hoverBackgroundColor: tailwindConfig().theme.colors.violet[600],
                barPercentage: 0.7,
                categoryPercentage: 0.7,
                borderRadius: 4,
            },
        ],
    };

    return (
        <div className="col-span-full flex flex-col rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6">
            <header className="border-b border-gray-100 px-5 py-4 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Direct VS Indirect</h2>
            </header>
            {/* Chart built with Chart.js 3 */}
            {/* Change the height attribute to adjust the chart height */}
            <BarChart data={chartData} width={595} height={248} />
        </div>
    );
}

export default DashboardCard04;
