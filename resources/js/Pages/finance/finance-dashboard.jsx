import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';

export default function FinanceDashboard() {
    // const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <AuthenticatedLayout header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Financeira Dashboard</span>}>
            <Head title="Financeira Dashboard" />

            <div className="">
                <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">Financeira Dashboard!</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
