import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import Loading from '@/Components/Loading.jsx';
import { DataTable } from '@/Components/data-display/data-table.jsx';
import { columns } from '@/data/Invoice.ts';
import { Badge } from '@/Components/ui/badge.jsx';
import { getBadgeColors } from '@/utils/Utils.js';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from '@/Components/ui/pagination.jsx';

export default function Invoices({ invoices }) {
    columns[2].cell = (props) => <Badge variant="simple"
                                        className={getBadgeColors(props.getValue())}>{props.getValue()}</Badge>;

    return (
        <AuthenticatedLayout
            header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Faturas</span>}>
            <Head title="Faturas" />

            <div className="">
                <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-2 text-gray-900 dark:text-gray-100">
                            {invoices === undefined
                                ? <Loading />
                                : <DataTable columns={columns} data={invoices.data} />}
                        </div>
                    </div>
                    <Pagination>
                        {invoices === undefined
                            ? <div></div>
                            : <PaginationContent className={'w-full justify-between mt-4'}>
                                <div className="text-sm text-gray-500 text-center sm:text-left">
                                    Mostra de <span
                                    className="font-medium text-gray-600 dark:text-gray-300">{invoices.from} </span>
                                    a
                                    <span
                                        className="font-medium text-gray-600 dark:text-gray-300"> {invoices.to} </span>
                                    de
                                    <span
                                        className="font-medium text-gray-600 dark:text-gray-300"> {invoices.total} </span>
                                    resultados
                                </div>
                                <div className={'flex gap-2'}>
                                    {invoices.links.map((link, index) =>
                                        index > 0 && index < invoices.last_page + 1
                                            ? <PaginationItem>
                                                <PaginationLink isActive={(invoices.current_page === index)} className={'active:bg-violet-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 active:text-white  border-gray-200 dark:border-gray-700/60"'} href={link.url}>{link.label}</PaginationLink>
                                            </PaginationItem>
                                            : <span></span>
                                    )}</div>
                                <div className={'flex gap-1'}>
                                    <PaginationItem>
                                        <PaginationPrevious href={invoices.prev_page_url} />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href={invoices.next_page_url} />
                                    </PaginationItem>
                                </div>
                            </PaginationContent>
                        }
                    </Pagination>
                </div>
            </div>
        </AuthenticatedLayout>
    )
        ;
}
