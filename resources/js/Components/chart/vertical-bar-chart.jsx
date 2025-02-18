'use client';

import { Bar, BarChart, Label, Legend, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

export function VerticalBarChart({ title, xlabel, ylabel, yfield, xfield, config, data, children }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <hr className="mb-4 mt-2 border-t border-gray-200 dark:border-gray-700" />
                <CardDescription>{children}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer className={'m-0 p-0'} config={config}>
                    <BarChart accessibilityLayer data={data}>
                        <XAxis dataKey={xfield} tick={true} tickLine={true} axisLine={false} tickMargin={0}>
                            <Label value={xlabel} fontSize={18} offset={-5} position="insideBottom" />
                        </XAxis>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
                        <Bar dataKey={yfield[0]} fill={'var(--color-' + yfield[0] + ')'} radius={4} />
                        <Bar dataKey={yfield[1]} fill={'var(--color-' + yfield[1] + ')'} radius={4} />
                        <Legend verticalAlign="top" align={'right'} height={36} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
