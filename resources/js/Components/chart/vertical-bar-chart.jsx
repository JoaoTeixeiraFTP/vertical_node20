"use client"

import { Bar, BarChart, Label, Legend, XAxis, YAxis } from 'recharts';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export function VerticalBarChart({ title, xlabel, ylabel, yfield, xfield , config, data,  children  }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <hr className="border-t border-gray-200 dark:border-gray-700 mb-4 mt-2" />
                <CardDescription>
                    {children}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer className={'m-0 p-0'} config={config}>
                    <BarChart accessibilityLayer data={data}>
                        <XAxis
                            dataKey={xfield}
                            tick={true}
                            tickLine={true}
                            axisLine={false}
                            tickMargin={0}
                        >
                            <Label value={xlabel} fontSize={18} offset={-5} position="insideBottom" />
                        </XAxis>
                        <YAxis
                            dataKey={yfield}
                            tick={true}
                            tickSize={0}
                            tickLine={false}
                            axisLine={false}
                            tickMargin={0}
                        >
                            <Label angle={-90} fontSize={18} value={ylabel} offset={5} position="insideLeft" />
                        </YAxis>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar dataKey={yfield} fill="var(--color-first)" radius={4} />
                        <Bar dataKey="second" fill="var(--color-second)" radius={4} />
                        <Legend verticalAlign="top" align={'right'} height={36}/>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
