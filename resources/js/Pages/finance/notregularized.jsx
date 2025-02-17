import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import Loading from '@/Components/Loading.jsx';
import { DataTable } from '@/Components/data-display/data-table.jsx';
import { columns } from '@/data/notregularized.ts';
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from '@/Components/ui/pagination.jsx';

export default function notregularized({ notregularized }) {
    // const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <AuthenticatedLayout header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Não Regularizado</span>}>
            <Head title="Não Regularizado" />
            <div className="">
                <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-2 text-gray-900 dark:text-gray-100">
                            {notregularized === undefined
                                ? <Loading />
                                : <DataTable columns={columns} data={notregularized.data} />}
                        </div>
                    </div>
                    <Pagination>
                        {notregularized === undefined
                            ? <div></div>
                            : <PaginationContent className={'w-full justify-between mt-4'}>
                                <div className="text-sm text-gray-500 text-center sm:text-left">
                                    Mostra de <span
                                    className="font-medium text-gray-600 dark:text-gray-300">{notregularized.from} </span>
                                    a
                                    <span
                                        className="font-medium text-gray-600 dark:text-gray-300"> {notregularized.to} </span>
                                    de
                                    <span
                                        className="font-medium text-gray-600 dark:text-gray-300"> {notregularized.total} </span>
                                    resultados
                                </div>
                                <div className={'flex gap-2'}>
                                    {notregularized.links.map((link, index) =>
                                        index > 0 && index < notregularized.last_page + 1
                                            ? <PaginationItem>
                                                <PaginationLink isActive={(notregularized.current_page === index)} className={'active:bg-violet-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 active:text-white  border-gray-200 dark:border-gray-700/60"'} href={link.url}>{link.label}</PaginationLink>
                                            </PaginationItem>
                                            : <span></span>
                                    )}</div>
                                <div className={'flex gap-1'}>
                                    <PaginationItem>
                                        <PaginationPrevious href={notregularized.prev_page_url} />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href={notregularized.next_page_url} />
                                    </PaginationItem>
                                </div>
                            </PaginationContent>
                        }
                    </Pagination>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
