import { usePage } from '@inertiajs/react';
// import * as React from 'react';
import Datepicker from '@/Components/Datepicker.jsx';
import FilterButton from '@/Components/Dropdown/DropdownFilter.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import { SidebarProvider, SidebarTrigger } from '@/Components/ui/sidebar.jsx';
import AppHeader from '@/partials/AppHeader.jsx';
import { AppSidebar } from '@/partials/AppSidebar.jsx';
import { ThemeProvider } from '@/utils/ThemeContext.jsx';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    return (
        <ThemeProvider>
            <div className="flex h-[100dvh] overflow-hidden bg-gray-100 dark:bg-gray-900">
                <SidebarProvider className="w-full grow">
                    <AppSidebar />
                    <main className="relative flex w-full flex-1 grow flex-col overflow-y-auto overflow-x-hidden">
                        <AppHeader user={user} />
                        <SidebarTrigger />
                        {header && (
                            <header className="mb-4 sm:mb-0">
                                <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12">
                                    <div className="mb-8 overflow-hidden sm:flex sm:items-center sm:justify-between">
                                        {/* Left: Title */}
                                        <div className="mb-4 sm:mb-0">
                                            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">{header}</h1>
                                        </div>

                                        {/* Right: Actions */}
                                        <div className="flex justify-end gap-2">
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
