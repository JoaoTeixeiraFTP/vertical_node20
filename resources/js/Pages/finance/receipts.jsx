import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import Loading from '@/Components/Loading.jsx';
import { DataTable } from '@/Components/data-display/data-table.jsx';
import { columns } from '@/data/Receipt.ts';
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from '@/Components/ui/pagination.jsx';

export default function Receipts({ receipt }) {
    // const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <AuthenticatedLayout header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Recibos</span>}>
            <Head title="Recibos" />

            <div className="">
                <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-2 text-gray-900 dark:text-gray-100">
                            {receipt === undefined
                                ? <Loading />
                                : <DataTable columns={columns} data={receipt.data} />}
                        </div>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
