import { Legend, Pie, PieChart } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card.jsx';
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/Components/ui/chart.jsx';

export function PieDonutChart({ title, config, data }) {
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <hr className="mb-4 mt-2 border-t border-gray-200 dark:border-gray-700" />
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer config={config} className="mx-auto max-h-[300px]">
                    <PieChart>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Pie data={data} dataKey={config.dataKey} nameKey={config.nameKey} innerRadius={50} legendType={'square'} />
                        <ChartLegend
                            align={'left'}
                            layout={'vertical'}
                            verticalAlign={'middle'}
                            content={<ChartLegendContent nameKey={config.nameKey} />}
                            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-start"
                        />
                        <Legend verticalAlign={'middle'} layout={'vertical'} align={'left'} dataKey={config.dataKey} nameKey={config.nameKey} />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
