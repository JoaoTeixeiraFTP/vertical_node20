import Loading from '@/Components/custom/Loading.jsx';
import { DataTable } from '@/Components/data-display/data-table.jsx';
import { Badge } from '@/Components/ui/badge.jsx';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/Components/ui/pagination.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { columns } from '@/data/Support.ts';
import { formatEuro, getBadgeColors } from '@/utils/Utils.js';
import { Head, usePage } from '@inertiajs/react';

export default function Support({ auth, support }) {
    columns[2].cell = (props) => (
        <Badge variant="simple" className={getBadgeColors(props.getValue())}>
            {props.getValue()}
        </Badge>
    );
    columns[3].accessorFn = (props) => formatEuro(props.etotal);

    const page = usePage();

    return (
        <AuthenticatedLayout
            url={page.url}
            auth={auth}
            header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Suporte</span>}
        >
            <Head title="Suporte" />

            <div className="">
                <div className="mx-auto px-4 py-2">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-2 text-gray-900 dark:text-gray-100">
                            {support === undefined ? (
                                <Loading />
                            ) : (
                                <DataTable columns={columns} data={support.data} searchField={'pastamp'} typeDocument={'support'} />
                            )}
                        </div>
                    </div>
                    <Pagination>
                        {support === undefined ? (
                            <div></div>
                        ) : (
                            <PaginationContent className={'mt-4 w-full justify-between'}>
                                <div className="text-center text-sm text-gray-500 sm:text-left">
                                    Mostra de <span className="font-medium text-gray-600 dark:text-gray-300">{support.from} </span>a
                                    <span className="font-medium text-gray-600 dark:text-gray-300"> {support.to} </span>
                                    de
                                    <span className="font-medium text-gray-600 dark:text-gray-300"> {support.total} </span>
                                    resultados
                                </div>
                                <div className={'flex gap-2'}>
                                    {support.links.map((link, index) =>
                                        index > 0 && index < support.last_page + 1 ? (
                                            <PaginationItem key={index}>
                                                <PaginationLink
                                                    isActive={support.current_page === index}
                                                    className={
                                                        'dark:border-gray-700/60" border-gray-200 bg-white text-gray-800 active:bg-violet-500 active:text-white dark:bg-gray-800 dark:text-gray-300'
                                                    }
                                                    href={link.url}
                                                >
                                                    {link.label}
                                                </PaginationLink>
                                            </PaginationItem>
                                        ) : (
                                            <span key={index}></span>
                                        ),
                                    )}
                                </div>
                                <div className={'flex gap-1'}>
                                    <PaginationItem>
                                        <PaginationPrevious href={support.prev_page_url} />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href={support.next_page_url} />
                                    </PaginationItem>
                                </div>
                            </PaginationContent>
                        )}
                    </Pagination>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
