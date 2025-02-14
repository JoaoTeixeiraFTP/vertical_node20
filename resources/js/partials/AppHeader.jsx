import { NavUser } from '@/Components/navigation/nav-user.jsx';
import ThemeToggle from '@/components/ThemeToggle.jsx';
import { usePage } from '@inertiajs/react';

export default function AppHeader({ variant = 'default' }) {
    const user = usePage().props.auth.user;
    return (
        <header
            className={`sticky top-0 z-30 before:absolute before:inset-0 before:-z-10 before:backdrop-blur-md bg-white/90 max-lg:before:bg-white/90 dark:max-lg:before:bg-gray-800/90 ${variant === 'v2' || variant === 'v3' ? 'before:bg-white after:absolute after:inset-x-0 after:top-full after:-z-10 after:h-px after:bg-gray-200 dark:after:bg-gray-700/60' : 'max-lg:shadow-sm lg:before:bg-gray-100/90 dark:lg:before:bg-gray-900/90'} ${variant === 'v2' ? 'dark:before:bg-gray-800' : ''} ${variant === 'v3' ? 'dark:before:bg-gray-900' : ''}`}
        >
            <nav className="hidden dark:border-gray-700 bg-white/90 dark:bg-gray-900 sm:block">
                <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12">
                    <div className="flex h-16 justify-end border-gray-200 dark:border-gray-700/60 lg:border-b">
                        <div className="hidden gap-2 sm:ms-6 sm:flex sm:items-center">
                            <ThemeToggle />
                            <hr className="ms-2 h-6 w-px border-none bg-gray-200 dark:bg-gray-700/60" />
                            <NavUser user={user} className={'ms-2'} />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
