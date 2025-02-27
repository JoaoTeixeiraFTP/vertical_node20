'use client';

import { Area, AreaChart, Label, Legend, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/Components/ui/chart';
import { hexToRGB } from '@/utils/Utils.js';

export default function LineAreaChart({ title, config, data, children }) {
    return (
        <Card className={''}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <hr className="mb-4 mt-2 border-t border-gray-200 dark:border-gray-700" />
                <CardDescription>{children}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={config} className={'max-h-60 w-full'}>
                    <AreaChart accessibilityLayer data={data}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="20%" stopColor={'rgba(' + hexToRGB(config[config.y.field[0]].color) + ', 0.4)'} stopOpacity={0.7} />
                                <stop offset="90%" stopColor={'rgba(' + hexToRGB(config[config.y.field[0]].color) + ', 0.2)'} stopOpacity={0.7} />
                                <stop offset="100%" stopColor={'rgba(' + hexToRGB(config[config.y.field[0]].color) + ', 0)'} stopOpacity={0.7} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={'rgba(' + hexToRGB(config[config.y.field[1]].color) + ', 1)'} stopOpacity={0} />
                                <stop offset="0%" stopColor={'rgba(' + hexToRGB(config[config.y.field[1]].color) + ', 0.3)'} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Legend verticalAlign="top" align={'right'} height={36} />
                        <XAxis dataKey={config.x.field} tick={true} tickLine={true} axisLine={false} tickMargin={0}>
                            <Label value={config.x.label} fontSize={18} offset={-5} position="insideBottom" />
                        </XAxis>
                        <YAxis tick={true} tickSize={0} tickLine={false} axisLine={false} tickMargin={5}>
                            <Label angle={-90} fontSize={18} value={config.y.label} offset={5} position="insideLeft" />
                        </YAxis>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                        <Area
                            name={config[config.y.field[1]].label}
                            dataKey={config.y.field[1]}
                            type="monotone"
                            fill="url(#colorPv)"
                            fillOpacity={1}
                            strokeWidth={1.5}
                            stroke={'var(' + config[config.y.field[1]].color + ')'}
                        />
                        <Area
                            name={config[config.y.field[0]].label}
                            dataKey={config.y.field[0]}
                            type="monotone"
                            fill="url(#colorUv)"
                            fillOpacity={1}
                            strokeWidth={1.5}
                            stroke={'var(' + config[config.y.field[0]].color + ')'}
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
