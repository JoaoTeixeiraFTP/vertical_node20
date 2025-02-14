'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, Legend, XAxis, YAxis, Label } from 'recharts';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent
} from '@/components/ui/chart';
import { useState } from 'react';
import { hexToRGB } from '@/utils/Utils.js';

export default function LineAreaChart({ title, xlabel, ylabel , config, data,  children  }) {

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
                <ChartContainer config={config}>
                    <AreaChart
                        accessibilityLayer
                        data={data}
                        margin={{
                            left: 8,
                            right: 8,
                        }}
                    >
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={'rgba('+hexToRGB('#8470FF')+', 1)'} stopOpacity={0.5}/>
                                <stop offset="75%" stopColor={'rgba('+hexToRGB('#8470FF')+', 0.3)'} stopOpacity={0.15} />
                                <stop offset="100%" stopColor={'rgba('+hexToRGB('#8470FF')+', 0)'} stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor='#6B7280' stopOpacity={0.1}/>
                                <stop offset="95%" stopColor='#6B7280' stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Legend verticalAlign="end" align={'right'} height={36}/>
                        <XAxis
                            dataKey="month"
                            tick={false}
                            tickLddine={false}
                            axisLine={false}
                            tickMargin={0}
                        >
                            <Label value={xlabel} fontSize={18} offset={0} position="insideBottom" />
                        </XAxis>
                        <YAxis
                            tick={false}
                            tickSize={0}
                            tickLine={false}
                            axisLine={false}
                            tickMargin={0}
                        >
                            <Label angle={-90} fontSize={18} value={ylabel} offset={20} position="insideLeft" />
                        </YAxis>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" />}
                        />
                        <Area
                            dataKey="second"
                            type="natural"
                            fill="url(#colorPv)"
                            fillOpacity={1}
                            stroke="var(--color-second)"
                            stackId="a"
                        />
                        <Area
                            dataKey="first"
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
