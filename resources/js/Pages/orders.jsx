import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Orders({ orders }) {
    return (
        <AuthenticatedLayout header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Encomendas</span>}>
            <Head title="Encomendas" />

            <div className="">
                <div className="mx-auto px-4 py-2">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">Encomendas!</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
