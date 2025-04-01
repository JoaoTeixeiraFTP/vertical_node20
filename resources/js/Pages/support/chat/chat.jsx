import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Orders({ auth, document }) {
    const page = usePage();
    return (
        <AuthenticatedLayout
            url={page.url}
            auth={auth}
            header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Chat</span>}
        >
            <Head title="chat" />

            <div className="">
                <div className="mx-auto py-2">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-[#4B535E] p-6">
                        <div className="p-6 text-gray-900 dark:text-gray-100 text-xl">
                        Boa Tarde, eu gostaria de reportar um problema que tive de não entrar as Faturas
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
