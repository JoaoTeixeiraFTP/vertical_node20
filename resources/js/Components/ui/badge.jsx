import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
    'inline-flex items-center rounded-md border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300',
    {
        variants: {
            variant: {
                default: 'border-transparent shadow hover:bg-neutral-900/80 dark:hover:bg-neutral-50/80',
                secondary: 'border-transparent hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80',
                destructive:
                    'border-transparent bg-red-500 text-neutral-50 shadow hover:bg-red-500/80 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/80',
                simple: ' btn-xs text-xs px-2.5 py-1 shadow-none ',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

function Badge({ className, variant, ...props }) {
    return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
