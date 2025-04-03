import Datepicker from '@/Components/Datepicker.jsx';
import FilterButton from '@/Components/custom/FilterButton.jsx';
import AppHeader from '@/Components/layout/AppHeader.jsx';
import { AppSidebar } from '@/Components/layout/AppSidebar.jsx';
import { SidebarProvider, SidebarTrigger } from '@/Components/ui/sidebar.jsx';
import { ThemeProvider } from '@/utils/ThemeContext.jsx';

export default function AuthenticatedLayout({ auth, header, url, children }) {
    const headerText = header?.props?.children?.toString().trim().toLowerCase() || '';
    const isSupportPage = headerText === 'suporte' || headerText === 'detalhe do suporte' || headerText === 'chat' || headerText === 'criar pa';
/*
    useEffect(() => {
        console.log('Header recebido:', header);
        console.log('Header formatado:', `"${headerText}"`);
        console.log('isSupportPage:', isSupportPage);
    }, [headerText]);
*/   

    //const isSupportPage = true;

    return (
        <ThemeProvider>
            <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 print:bg-white">
                <SidebarProvider id={'sidebar-provider'} className="w-full grow">
                    <AppSidebar auth={auth} url={url} />
                    <SidebarTrigger className={'absolute left-1 top-2 z-40 cursor-pointer md:hidden'} />
                    <main id={'main-page'} key={headerText} className="relative mb-4 flex w-full flex-1 grow flex-col overflow-y-auto overflow-x-hidden">
                        <AppHeader user={auth} />
                        {header && (
                            <header id={'page-header'} className="mb-4 sm:mb-0 px-4 mt-4">
                                <div className="mx-auto p-1 sm:px-6 lg:px-4 bg-gray-200 shadow-sm dark:bg-[#2F3743] rounded-lg">
                                    <div className="grid h-full overflow-hidden sm:flex sm:justify-between items-center">
                                        {/* Left: Title */}
                                        <div className="order-last sm:order-first sm:my-0">
                                            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl py-2">{header}</h1>
                                        </div>
                                        
                                        {/* Right: Actions */}
                                        <div className="sm:text-md order-first flex justify-end gap-2 text-sm sm:order-last w-full sm:w-auto">
                                            {isSupportPage ? (
                                                <div className="flex w-full justify-center items-center gap-2">
                                                    {/* Search bar */}
                                                    <input
                                                        type="text"
                                                        placeholder="Search..."
                                                        className="w-1/2 sm:w-80 p-2 border rounded-lg text-gray-800 bg-[#D9D9D9] dark:text-gray-100 dark:bg-[#D9D9D9]"
                                                    />
                                                        <div className='flex gap-2'>
                                                            {/* Criar PA button */}
                                                            <button 
                                                                className="px-4 py-2 bg-[#D9D9D9] text-gray-800 rounded-lg dark:hover:bg-gray-400 hover:bg-gray-300"
                                                                onClick={() => window.location.href = route('support.pa.createpa')}
                                                            >
                                                                Criar PA
                                                            </button>
                                                            
                                                            {/* Botão para voltar */}
                                                            <button 
                                                                className="px-4 py-2 bg-[#D9D9D9] text-gray-800 rounded-lg dark:hover:bg-gray-400 hover:bg-gray-300"
                                                                onClick={() => window.history.back()}
                                                            >
                                                                Voltar
                                                            </button>
                                                        </div>

                                                            <button 
                                                                className="px-4 py-2 bg-[#D9D9D9] text-gray-800 rounded-lg dark:hover:bg-gray-400 hover:bg-gray-300"
                                                                onClick={() => window.location.href = route('support.chat.chat')}
                                                            >
                                                                Ir para a Conversa
                                                            </button>

                                                        {/*
                                                        <button 
                                                            className="px-4 py-2 bg-[#4B535E] text-white rounded-lg hover:bg-blue-700"
                                                            onClick={() => window.location.href = route('support.chat.chat', { id: document.id })} // Replace with the actual document ID
                                                        >
                                                            Ir para a Conversa
                                                        </button>
                                                        */}
                                                </div>
                                            ) : (
                                                <>
                                                    {/* Filter button */}
                                                    <FilterButton align="right" />
                                                    {/* Calendar */}
                                                    <Datepicker align="right" />
                                                </>
                                            )}
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