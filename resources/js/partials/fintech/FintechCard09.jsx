import PieChart from '../../../../../../Documents/mosaicreact/mosaic-react/src/charts/PieChart.jsx';

// Import utilities
import { tailwindConfig } from '../../../../../../Documents/mosaicreact/mosaic-react/src/utils/Utils.js';

function FintechCard09() {
    const chartData = {
        labels: ['Cash', 'Commodities', 'Bonds', 'Stock'],
        datasets: [
            {
                label: 'Sessions By Device',
                data: [12, 13, 10, 65],
                backgroundColor: [
                    tailwindConfig().theme.colors.green[400],
                    tailwindConfig().theme.colors.yellow[400],
                    tailwindConfig().theme.colors.sky[500],
                    tailwindConfig().theme.colors.violet[500],
                ],
                hoverBackgroundColor: [
                    tailwindConfig().theme.colors.green[500],
                    tailwindConfig().theme.colors.yellow[500],
                    tailwindConfig().theme.colors.sky[600],
                    tailwindConfig().theme.colors.violet[600],
                ],
                borderWidth: 0,
            },
        ],
    };

    return (
        <div className="col-span-full flex flex-col rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-4">
            <header className="flex items-center border-b border-gray-100 px-5 py-4 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Portfolio Value</h2>
            </header>
            <div className="px-5 py-3">
                <div className="mb-2 text-sm italic">Hey Mark, here is the value of your portfolio:</div>
                <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">$224,807.27</div>
            </div>
            {/* Chart built with Chart.js 3 */}
            {/* Change the height attribute to adjust the chart height */}
            <PieChart data={chartData} width={389} height={220} />
        </div>
    );
}

export default FintechCard09;
