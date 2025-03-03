import Loading from '@/Components/custom/Loading.jsx';
import { DataTable } from '@/Components/data-display/data-table.jsx';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/Components/ui/pagination.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { columns } from '@/data/NotRegularized.ts';
import { formatEuro } from '@/utils/Utils.js';
import { Head, usePage } from '@inertiajs/react';

export default function NotRegularized({ auth, notregularized }) {
    // const [sidebarOpen, setSidebarOpen] = useState(false);
    columns[4].accessorFn = (props) => formatEuro(props.saldo);
    const page = usePage();

    return (
        <AuthenticatedLayout
            url={page.url}
            auth={auth}
            header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Não Regularizado</span>}
        >
            <Head title="Não Regularizado" />
            <div className="">
                <div className="mx-auto px-4 py-2">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-2 text-gray-900 dark:text-gray-100">
                            {notregularized === undefined ? (
                                <Loading />
                            ) : (
                                <DataTable columns={columns} data={notregularized.data} searchField={'ccstamp'} typeDocument={'notregularized'} />
                            )}
                        </div>
                    </div>
                    <Pagination>
                        {notregularized === undefined ? (
                            <div></div>
                        ) : (
                            <PaginationContent className={'mt-4 w-full justify-between'}>
                                <div className="text-center text-sm text-gray-500 sm:text-left">
                                    Mostra de <span className="font-medium text-gray-600 dark:text-gray-300">{notregularized.from} </span>a
                                    <span className="font-medium text-gray-600 dark:text-gray-300"> {notregularized.to} </span>
                                    de
                                    <span className="font-medium text-gray-600 dark:text-gray-300"> {notregularized.total} </span>
                                    resultados
                                </div>
                                <div className={'flex gap-2'}>
                                    {notregularized.links.map((link, index) =>
                                        index > 0 && index < notregularized.last_page + 1 ? (
                                            <PaginationItem key={index}>
                                                <PaginationLink
                                                    isActive={notregularized.current_page === index}
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
                                        <PaginationPrevious href={notregularized.prev_page_url} />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href={notregularized.next_page_url} />
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
