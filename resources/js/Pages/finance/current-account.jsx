import Loading from '@/Components/Loading.jsx';
import { DataTable } from '@/Components/data-display/data-table.jsx';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/Components/ui/pagination.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { columns } from '@/data/CurrentAccount.ts';
import { formatEuro } from '@/utils/Utils.js';
import { Head } from '@inertiajs/react';

export default function CurrentAccount({ currentAccount }) {
    columns[4].accessorFn = (props) => formatEuro(props.edeb);
    columns[6].accessorFn = (props) => formatEuro(props.saldo);

    return (
        <AuthenticatedLayout header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Conta Corrente</span>}>
            <Head title="Conta Corrente" />

            <div className="">
                <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-2 text-gray-900 dark:text-gray-100">
                            {currentAccount === undefined ? (
                                <Loading />
                            ) : (
                                <DataTable columns={columns} data={currentAccount.data} searchField={'ccstamp'} typeDocument={'current-account'} />
                            )}
                        </div>
                    </div>
                    <Pagination>
                        {currentAccount === undefined ? (
                            <div></div>
                        ) : (
                            <PaginationContent className={'mt-4 w-full justify-between'}>
                                <div className="text-center text-sm text-gray-500 sm:text-left">
                                    Mostra de <span className="font-medium text-gray-600 dark:text-gray-300">{currentAccount.from} </span>a
                                    <span className="font-medium text-gray-600 dark:text-gray-300"> {currentAccount.to} </span>
                                    de
                                    <span className="font-medium text-gray-600 dark:text-gray-300"> {currentAccount.total} </span>
                                    resultados
                                </div>
                                <div className={'flex gap-2'}>
                                    {currentAccount.links.map((link, index) =>
                                        index > 0 && index < currentAccount.last_page + 1 ? (
                                            <PaginationItem>
                                                <PaginationLink
                                                    key={index}
                                                    isActive={currentAccount.current_page === index}
                                                    className={
                                                        'dark:border-gray-700/60" border-gray-200 bg-white text-gray-800 active:bg-violet-500 active:text-white dark:bg-gray-800 dark:text-gray-300'
                                                    }
                                                    href={link.url}
                                                >
                                                    {link.label}
                                                </PaginationLink>
                                            </PaginationItem>
                                        ) : (
                                            <span></span>
                                        ),
                                    )}
                                </div>
                                <div className={'flex gap-1'}>
                                    <PaginationItem>
                                        <PaginationPrevious href={currentAccount.prev_page_url} />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href={currentAccount.next_page_url} />
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
