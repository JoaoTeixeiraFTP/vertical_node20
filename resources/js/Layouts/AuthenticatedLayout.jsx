import { usePage } from '@inertiajs/react';
// import * as React from 'react';
import Datepicker from '@/Components/Datepicker.jsx';
import FilterButton from '@/Components/Dropdown/DropdownFilter.jsx';
import AppHeader from '@/Components/layout/AppHeader.jsx';
import { AppSidebar } from '@/Components/layout/AppSidebar.jsx';
import { SidebarProvider } from '@/Components/ui/sidebar.jsx';
import { ThemeProvider } from '@/utils/ThemeContext.jsx';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    return (
        <ThemeProvider>
            <div className="flex h-[100dvh] overflow-hidden bg-gray-100 dark:bg-gray-900 print:bg-white">
                <SidebarProvider id={'sidebar-provider'} className="w-full grow">
                    <AppSidebar />
                    <main id={'main-page'} className="relative flex w-full flex-1 grow flex-col overflow-y-auto overflow-x-hidden">
                        <AppHeader user={user} />
                        {header && (
                            <header id={'page-header'} className="mb-4 sm:mb-0">
                                <div className="mx-auto px-4 py-2 sm:px-6 lg:px-4">
                                    <div className="grid h-full overflow-hidden sm:flex sm:justify-between">
                                        {/* Left: Title */}
                                        <div className="order-last mx-2 my-2 sm:order-first sm:my-0 sm:ms-8">
                                            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">{header}</h1>
                                        </div>

                                        {/* Right: Actions */}
                                        <div className="sm:text-md order-first flex justify-end gap-2 text-sm sm:order-last sm:me-8">
                                            {/* Filter button */}
                                            <FilterButton align="right" />
                                            {/* Datepicker built with React Day Picker */}
                                            <Datepicker align="right" />
                                            {/* Add view button */}
                                        </div>
                                    </div>
                                </div>
                            </header>
                        )}
                        {children}
                    </main>
                </SidebarProvider>
            </div>
        </ThemeProvider>
    );
}
