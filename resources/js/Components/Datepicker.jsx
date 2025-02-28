'use client';

import { addDays, format, subDays } from 'date-fns';
import * as React from 'react';

import { cn } from '../lib/utils';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export default function DatePickerWithRange({ className }) {
    const [date, setDate] = React.useState({
        from: subDays(new Date(Date.now()), new Date(Date.now()).getDay() - 1),
        to: addDays(new Date(Date.now()), 7 - new Date(Date.now()).getDay()),
    });

    return (
        <div className={cn('relative', className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <button
                        id="date"
                        className={cn(
                            'datepicker form-input flex w-[15.5rem] items-center justify-center rounded-lg border-gray-200 font-medium text-gray-600 hover:text-gray-800 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-gray-100',
                            !date && 'text-muted-foreground',
                        )}
                    >
                        {/* <CalendarIcon /> */}
                        <svg className="ml-1 mr-2 fill-current text-gray-400 dark:text-gray-500" width="16" height="16" viewBox="0 0 16 16">
                            <path d="M5 4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z"></path>
                            <path d="M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4ZM2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z"></path>
                        </svg>
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                                </>
                            ) : (
                                format(date.from, 'LLL dd, y')
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                    <Calendar mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} />
                </PopoverContent>
            </Popover>
        </div>
    );
}
