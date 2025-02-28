import Help from '@/Components/custom/Help.jsx';
import Notifications from '@/Components/custom/Notifications.jsx';
import ThemeToggle from '@/Components/layout/ThemeToggle.jsx';
import SearchModal from '@/Components/modal/ModalSearch';
import { NavUser } from '@/Components/navigation/nav-user.jsx';
import { usePage } from '@inertiajs/react';
import { Search } from 'lucide-react';
import { useState } from 'react';
export default function AppHeader({ variant = 'default' }) {
    const user = usePage().props.auth.user;
    const [searchModalOpen, setSearchModalOpen] = useState(false);

    return (
        <header
            id="app-header"
            className={`sticky top-0 z-30 bg-white/90 before:absolute before:inset-0 before:-z-10 before:backdrop-blur-md max-lg:before:bg-white/90 dark:max-lg:before:bg-gray-800/90 ${variant === 'v2' || variant === 'v3' ? 'before:bg-white after:absolute after:inset-x-0 after:top-full after:-z-10 after:h-px after:bg-gray-200 dark:after:bg-gray-700/60' : 'max-lg:shadow-sm lg:before:bg-gray-100/90 dark:lg:before:bg-gray-900/90'} ${variant === 'v2' ? 'dark:before:bg-gray-800' : ''} ${variant === 'v3' ? 'dark:before:bg-gray-900' : ''}`}
        >
            <nav className="hidden bg-white/90 dark:border-gray-700 dark:bg-gray-900 sm:block">
                <div className="mx-auto px-4 py-2 sm:px-6 lg:px-4">
                    <div className="flex h-16 justify-end border-gray-200 dark:border-gray-700/60 lg:border-b">
                        <div className="hidden gap-2 sm:ms-6 sm:flex sm:items-center">
                            <div>
                                <button
                                    className={`ml-3 flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50 lg:hover:bg-gray-200 dark:lg:hover:bg-gray-800 ${searchModalOpen && 'bg-gray-200 dark:bg-gray-800'}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSearchModalOpen(true);
                                    }}
                                    aria-controls="search-modal"
                                >
                                    <Search className="h-[20px] w-[20px] text-gray-500/80 dark:text-gray-400/80" />
                                </button>
                                <SearchModal id="search-modal" searchId="search" modalOpen={searchModalOpen} setModalOpen={setSearchModalOpen} />
                            </div>
                            <Notifications align="right" />
                            <Help align="right" />
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
