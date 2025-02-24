import Loading from '@/Components/Loading.jsx';
import { DataTable } from '@/Components/data-display/data-table.jsx';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/Components/ui/pagination.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { columns } from '@/data/Receipt.ts';
import { formatEuro } from '@/utils/Utils.js';
import { Head } from '@inertiajs/react';

export default function Receipts({ receipt }) {
    // const [sidebarOpen, setSidebarOpen] = useState(false);
    columns[2].accessorFn = (props) => formatEuro(props.etotal);

    return (
        <AuthenticatedLayout header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Recibos</span>}>
            <Head title="Recibos" />

            <div className="">
                <div className="mx-auto px-4 py-2">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-2 text-gray-900 dark:text-gray-100">
                            {receipt === undefined ? (
                                <Loading />
                            ) : (
                                <DataTable columns={columns} data={receipt.data} searchField={'restamp'} typeDocument={'receipts'} />
                            )}
                        </div>
                    </div>
                    <Pagination>
                        {receipt === undefined ? (
                            <div></div>
                        ) : (
                            <PaginationContent className={'mt-4 w-full justify-between'}>
                                <div className="text-center text-sm text-gray-500 sm:text-left">
                                    Mostra de <span className="font-medium text-gray-600 dark:text-gray-300">{receipt.from} </span>a
                                    <span className="font-medium text-gray-600 dark:text-gray-300"> {receipt.to} </span>
                                    de
                                    <span className="font-medium text-gray-600 dark:text-gray-300"> {receipt.total} </span>
                                    resultados
                                </div>
                                <div className={'flex gap-2'}>
                                    {receipt.links.map((link, index) =>
                                        index > 0 && index < receipt.last_page + 1 ? (
                                            <PaginationItem key={index}>
                                                <PaginationLink
                                                    isActive={receipt.current_page === index}
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
                                        <PaginationPrevious href={receipt.prev_page_url} />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href={receipt.next_page_url} />
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
