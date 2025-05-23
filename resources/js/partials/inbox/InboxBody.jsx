import Mail from './Mail.jsx';

import mailImage from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/inbox-image.jpg';
import mailUser01 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/user-40-11.jpg';
import mailUser02 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/user-avatar-80.png';

function InboxBody({ inboxSidebarOpen, setInboxSidebarOpen }) {
    const mails = [
        {
            id: '0',
            open: false,
            image: mailUser01,
            name: 'Dominik Lamakani',
            email: 'dominiklama@acme.com',
            date: 'Sep 3, 3:18 PM',
            recipients: ['me', 'Carolyn'],
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…',
            message:
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Consectetur adipiscing elit, sed do eiusmod aliqua? Check below:</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><p>Cheers,</p><p class="font-medium">Dominik Lamakani</p>',
        },
        {
            id: '1',
            open: false,
            image: mailUser02,
            name: 'Acme Inc.',
            email: 'acmeinc@acme.com',
            date: 'Sep 3, 3:18 PM',
            recipients: ['me', 'Dominik'],
            excerpt: 'Dominik, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
            message:
                '<p>Dominik, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Consectetur adipiscing elit, sed do eiusmod aliqua? Check below:</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><p>Cheers,</p><p class="font-medium">Acme Inc.</p>',
        },
        {
            id: '2',
            open: true,
            image: mailUser01,
            name: 'Dominik Lamakani',
            email: 'dominiklama@acme.com',
            date: 'Sep 4, 3:37 AM',
            recipients: ['me', 'Carolyn'],
            excerpt: 'Hey Acme 👋 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
            message: `<p>Hey Acme 👋</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <span class="underline">nostrud exercitation ullamco</span> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Consectetur adipiscing elit, sed do eiusmod <a class="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">tempor magna</a> aliqua? Check below:</p><p><img src=${mailImage} width="320" height="190" alt="Inbox image" /></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><p>Cheers,</p><p class="font-medium">Dominik Lamakani</p>`,
        },
    ];

    return (
        <div
            className={`flex grow flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${
                inboxSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
            }`}
        >
            {/* Header */}
            <div className="sticky top-16">
                <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 before:absolute before:inset-0 before:-z-10 before:bg-gray-50/90 before:backdrop-blur-md dark:border-gray-700/60 dark:before:bg-[#151D2C]/90 sm:px-6 md:px-5">
                    {/* Buttons on the left side */}
                    <div className="flex">
                        {/* Close button */}
                        <button
                            className="mr-4 text-gray-400 hover:text-gray-500 md:hidden"
                            onClick={() => setInboxSidebarOpen(!inboxSidebarOpen)}
                            aria-controls="inbox-sidebar"
                            aria-expanded={inboxSidebarOpen}
                        >
                            <span className="sr-only">Close sidebar</span>
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                            </svg>
                        </button>
                        <button className="ml-2 shrink-0 rounded-lg border border-gray-200 bg-white p-1.5 shadow-sm hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:border-gray-600">
                            <svg className="fill-current text-gray-400 dark:text-gray-500" width="16" height="16" viewBox="0 0 16 16">
                                <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
                            </svg>
                        </button>
                        <button className="ml-2 shrink-0 rounded-lg border border-gray-200 bg-white p-1.5 shadow-sm hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:border-gray-600">
                            <svg className="fill-current text-yellow-500" width="16" height="16" viewBox="0 0 16 16">
                                <path d="M10 5.934 8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                            </svg>
                        </button>
                        <button className="ml-2 shrink-0 rounded-lg border border-gray-200 bg-white p-1.5 shadow-sm hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:border-gray-600">
                            <svg className="fill-current text-gray-400 dark:text-gray-500" width="16" height="16" viewBox="0 0 16 16">
                                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
                            </svg>
                        </button>
                        <button className="ml-2 shrink-0 rounded-lg border border-gray-200 bg-white p-1.5 shadow-sm hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:border-gray-600">
                            <svg className="fill-current text-violet-500" width="16" height="16" viewBox="0 0 16 16">
                                <path d="M14.3 2.3L5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z" />
                            </svg>
                        </button>
                    </div>
                    {/* Buttons on the right side */}
                    <div className="flex items-center">
                        <div className="mr-1 text-xs">
                            <span className="font-medium dark:text-gray-300">10</span> <span className="text-gray-500 dark:text-gray-400">of</span>{' '}
                            <span className="font-medium dark:text-gray-300">467</span>
                        </div>
                        <button className="ml-2 shrink-0 rounded-lg border border-gray-200 bg-white p-1.5 shadow-sm hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:border-gray-600">
                            <svg className="fill-current text-gray-400 dark:text-gray-500" width="16" height="16" viewBox="0 0 16 16">
                                <path d="m10 13.4 1.4-1.4-4-4 4-4L10 2.6 4.6 8z" />
                            </svg>
                        </button>
                        <button className="ml-2 shrink-0 rounded-lg border border-gray-200 bg-white p-1.5 shadow-sm hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:border-gray-600">
                            <svg className="fill-current text-gray-400 dark:text-gray-500" width="16" height="16" viewBox="0 0 16 16">
                                <path d="M7 13.4 5.6 12l4-4-4-4L7 2.6 12.4 8z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="grow px-4 py-4 sm:px-6 md:px-5">
                {/* Mail subject */}
                <header className="mb-4 sm:flex sm:items-start sm:justify-between">
                    <h1 className="mb-1 ml-2 text-xl font-bold leading-snug text-gray-800 dark:text-gray-100 sm:mb-0">
                        Chill your mind with this amazing offer 🎉
                    </h1>
                    <button className="inline-flex whitespace-nowrap rounded-full bg-sky-500/20 px-2.5 py-1 text-center text-xs font-medium text-sky-700">
                        Exciting news
                    </button>
                </header>

                {/* Messages box */}
                <div className="divide-y divide-gray-200 rounded-xl bg-white px-6 shadow-sm dark:divide-gray-700/60 dark:bg-gray-800">
                    {mails.map((mail) => {
                        return (
                            <Mail
                                key={mail.id}
                                id={mail.id}
                                open={mail.open}
                                image={mail.image}
                                name={mail.name}
                                email={mail.email}
                                date={mail.date}
                                recipients={mail.recipients}
                                excerpt={mail.excerpt}
                                message={mail.message}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0">
                <div className="flex h-16 items-center justify-between border-t border-gray-200 bg-white px-4 dark:border-gray-700/60 dark:bg-gray-900 sm:px-6 md:px-5">
                    {/* Plus button */}
                    <button className="mr-3 shrink-0 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                        <span className="sr-only">Add</span>
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.98 5.38 18.62.02 12 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z" />
                        </svg>
                    </button>
                    {/* Message input */}
                    <form className="flex grow">
                        <div className="mr-3 grow">
                            <label htmlFor="message-input" className="sr-only">
                                Type a message
                            </label>
                            <input
                                id="message-input"
                                className="form-input w-full border-transparent bg-gray-100 placeholder-gray-500 focus:bg-white dark:border-transparent dark:bg-gray-800 dark:focus:bg-gray-800"
                                type="text"
                                placeholder="Aa"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn whitespace-nowrap bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        >
                            Send -&gt;
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default InboxBody;
