import PolarChart from '../../../../../../Documents/mosaicreact/mosaic-react/src/charts/PolarChart.jsx';

// Import utilities
import { hexToRGB, tailwindConfig } from '../../../../../../Documents/mosaicreact/mosaic-react/src/utils/Utils.js';

function AnalyticsCard10() {
    const chartData = {
        labels: ['Males', 'Females', 'Unknown'],
        datasets: [
            {
                label: 'Sessions By Gender',
                data: [500, 326, 242],
                backgroundColor: [
                    `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.8)`,
                    `rgba(${hexToRGB(tailwindConfig().theme.colors.sky[500])}, 0.8)`,
                    `rgba(${hexToRGB(tailwindConfig().theme.colors.green[500])}, 0.8)`,
                ],
                hoverBackgroundColor: [
                    `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[600])}, 0.8)`,
                    `rgba(${hexToRGB(tailwindConfig().theme.colors.sky[600])}, 0.8)`,
                    `rgba(${hexToRGB(tailwindConfig().theme.colors.green[600])}, 0.8)`,
                ],
                borderWidth: 0,
            },
        ],
    };

    return (
        <div className="col-span-full flex flex-col rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-4">
            <header className="border-b border-gray-100 px-5 py-4 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Sessions By Gender</h2>
            </header>
            {/* Chart built with Chart.js 3 */}
            {/* Change the height attribute to adjust the chart height */}
            <PolarChart data={chartData} width={389} height={260} />
        </div>
    );
}

export default AnalyticsCard10;
