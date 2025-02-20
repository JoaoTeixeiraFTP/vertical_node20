'use client';

import { Area, AreaChart, Label, Legend, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { hexToRGB } from '@/utils/Utils.js';

export default function LineAreaChart({ title, xlabel, ylabel, xfield, firstLine, secondLine, config, data, children }) {
    return (
        <Card className={'block'}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <hr className="mb-4 mt-2 border-t border-gray-200 dark:border-gray-700" />
                <CardDescription>{children}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={config}>
                    <AreaChart
                        accessibilityLayer
                        data={data}
                        margin={{
                            left: 4,
                            right: 4,
                        }}
                    >
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={'rgba(' + hexToRGB('#8470FF') + ', 1)'} stopOpacity={1} />
                                <stop offset="100%" stopColor={'rgba(' + hexToRGB('#8470FF') + ', 0.3)'} stopOpacity={1} />
                                <stop offset="100%" stopColor={'rgba(' + hexToRGB('#8470FF') + ', 0)'} stopOpacity={1} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6B7280" stopOpacity={1} />
                                <stop offset="95%" stopColor="#6B7280" stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        <Legend verticalAlign="top" align={'right'} height={36} />
                        <XAxis dataKey={xfield} tick={true} tickLddine={false} axisLine={false} tickMargin={5}>
                            <Label value={xlabel} fontSize={18} offset={-5} position="insideBottom" />
                        </XAxis>
                        <YAxis tick={true} tickSize={0} tickLine={false} axisLine={false} tickMargin={5}>
                            <Label angle={-90} fontSize={18} value={ylabel} offset={5} position="insideLeft" />
                        </YAxis>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                        <Area dataKey={secondLine} type="natural" fill="url(#colorPv)" fillOpacity={1} stroke="var(--color-second)" stackId="a" />
                        <Area
                            dataKey={firstLine}
                            type="monotone"
                            fill="url(#colorUv)"
                            fillOpacity={1}
                            strokeWidth={1.2}
                            stroke="var(--color-first)"
                            stackId="b"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
