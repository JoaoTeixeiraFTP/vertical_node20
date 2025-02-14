import ChannelMenu from './ChannelMenu.jsx';
import Channels from './Channels.jsx';
import DirectMessages from './DirectMessages.jsx';

function MessagesSidebar({ msgSidebarOpen, setMsgSidebarOpen }) {
    return (
        <div
            id="messages-sidebar"
            className={`absolute bottom-0 top-0 z-20 -mr-px w-full transition-transform duration-200 ease-in-out md:static md:bottom-auto md:top-auto md:w-auto md:translate-x-0 ${
                msgSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div className="no-scrollbar sticky top-16 h-[calc(100dvh-64px)] shrink-0 overflow-y-auto overflow-x-hidden border-r border-gray-200 bg-white dark:border-gray-700/60 dark:bg-[#151D2C] md:w-[18rem] xl:w-[20rem]">
                {/* #Marketing group */}
                <div>
                    {/* Group header */}
                    <div className="sticky top-0 z-10">
                        <div className="flex h-16 items-center border-b border-gray-200 bg-white px-5 dark:border-gray-700/60 dark:bg-[#151D2C]">
                            <div className="flex w-full items-center justify-between">
                                {/* Channel menu */}
                                <ChannelMenu />
                                {/* Edit button */}
                                <button className="ml-2 shrink-0 rounded-lg border border-gray-200 bg-white p-1.5 shadow-sm hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:border-gray-600">
                                    <svg
                                        className="fill-current text-gray-400 dark:text-gray-500"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Group body */}
                    <div className="px-5 py-4">
                        {/* Search form */}
                        <form className="relative">
                            <label htmlFor="msg-search" className="sr-only">
                                Search
                            </label>
                            <input
                                id="msg-search"
                                className="form-input w-full bg-white pl-9 dark:bg-gray-800"
                                type="search"
                                placeholder="Search…"
                            />
                            <button
                                className="group absolute inset-0 right-auto"
                                type="submit"
                                aria-label="Search"
                            >
                                <svg
                                    className="ml-3 mr-2 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                                    <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                                </svg>
                            </button>
                        </form>
                        {/* Direct messages */}
                        <DirectMessages
                            msgSidebarOpen={msgSidebarOpen}
                            setMsgSidebarOpen={setMsgSidebarOpen}
                        />
                        {/* Channels */}
                        <Channels
                            msgSidebarOpen={msgSidebarOpen}
                            setMsgSidebarOpen={setMsgSidebarOpen}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessagesSidebar;
