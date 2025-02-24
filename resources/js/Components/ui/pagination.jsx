import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import NavLink from '@/Components/navigation/nav-link.jsx';
import { buttonVariants } from '@/Components/ui/button';
import { cn } from '@/lib/utils';

const Pagination = ({ className, ...props }) => (
    <nav role="navigation" aria-label="pagination" className={cn('mx-auto flex w-full', className)} {...props} />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => <li ref={ref} className={cn('', className)} {...props} />);
PaginationItem.displayName = 'PaginationItem';

const PaginationLink = ({ className, isActive, size = 'icon', ...props }) => (
    <NavLink
        aria-current={isActive ? 'page' : undefined}
        active={isActive}
        className={cn(
            buttonVariants({
                variant: isActive ? 'outline' : 'ghost',
                size,
            }),
            className,
        )}
        {...props}
    />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({ className, ...props }) => (
    <PaginationLink
        aria-label="Go to previous page"
        size="default"
        className={cn('btn gap-1 border-gray-200 bg-white pl-2.5 dark:border-gray-700/60 dark:bg-gray-800', className)}
        {...props}
    >
        <ChevronLeft className="h-4 w-4" />
        <span className={'text-gray-800 dark:text-gray-300'}>Anterior</span>
    </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({ className, ...props }) => (
    <PaginationLink
        aria-label="Go to next page"
        size="default"
        className={cn(
            'btn gap-1 border-gray-200 bg-white pr-2.5 text-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-600',
            className,
        )}
        {...props}
    >
        <span className={'text-gray-800 dark:text-gray-300'}>Próxima</span>
        <ChevronRight className="h-4 w-4" />
    </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({ className, ...props }) => (
    <span aria-hidden className={cn('flex h-9 w-9 items-center justify-center', className)} {...props}>
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">More pages</span>
    </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious };
