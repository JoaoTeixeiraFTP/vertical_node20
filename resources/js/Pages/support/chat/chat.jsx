import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Orders({ auth, orders }) {
    const page = usePage();
    return (
        <AuthenticatedLayout
            url={page.url}
            auth={auth}
            header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Chat</span>}
        >
            <Head title="chat" />

            <div className="">
                <div className="mx-auto px-4 py-5">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">Chat</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
