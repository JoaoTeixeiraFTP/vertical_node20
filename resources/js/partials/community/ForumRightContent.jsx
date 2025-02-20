import UserImage01 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/avatar-01.jpg';
import UserImage02 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/avatar-02.jpg';
import UserImage03 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/avatar-03.jpg';
import UserImage04 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/avatar-04.jpg';
import UserImage05 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/avatar-05.jpg';
import UserImage06 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/avatar-06.jpg';

function ForumRightContent() {
    return (
        <div className="hidden w-full xl:block xl:w-72">
            <div className="no-scrollbar lg:sticky lg:top-16 lg:h-[calc(100dvh-64px)] lg:overflow-y-auto lg:overflow-x-hidden">
                <div className="md:py-8">
                    {/* Button */}
                    <div className="mb-6">
                        <button className="btn w-full bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                            Create Post
                        </button>
                    </div>

                    {/* Blocks */}
                    <div className="space-y-4">
                        {/* Block 1 */}
                        <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
                            <div className="mb-4 text-xs font-semibold uppercase text-gray-400 dark:text-gray-500">Forum Meetups</div>
                            <ul>
                                {/* Event 1 */}
                                <li className="relative pb-4 last-of-type:pb-0">
                                    <div className="pl-6">
                                        <div className="mb-0.5 text-xs font-medium uppercase text-violet-600">Mon 27 Dec</div>
                                        <div className="mb-2 text-sm">
                                            <a
                                                className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
                                                href="#0"
                                            >
                                                Silicon Valley Bootstrapper Breakfast Online for 2024
                                            </a>
                                        </div>
                                        {/* Avatars */}
                                        <div className="flex items-center space-x-2">
                                            <div className="-ml-0.5 flex -space-x-3">
                                                <img
                                                    className="box-content rounded-full border-2 border-white dark:border-gray-800"
                                                    src={UserImage02}
                                                    width="28"
                                                    height="28"
                                                    alt="User 02"
                                                />
                                                <img
                                                    className="box-content rounded-full border-2 border-white dark:border-gray-800"
                                                    src={UserImage03}
                                                    width="28"
                                                    height="28"
                                                    alt="User 03"
                                                />
                                                <img
                                                    className="box-content rounded-full border-2 border-white dark:border-gray-800"
                                                    src={UserImage04}
                                                    width="28"
                                                    height="28"
                                                    alt="User 04"
                                                />
                                            </div>
                                            <div className="text-xs font-medium italic text-gray-400 dark:text-gray-500">+22</div>
                                        </div>
                                    </div>
                                    {/* Timeline element */}
                                    <div aria-hidden="true">
                                        <div className="absolute -bottom-1 left-0.5 top-0.5 ml-px w-0.5 bg-gray-200 dark:bg-gray-700" />
                                        <div className="absolute left-0 top-0.5 -ml-0.5 h-3 w-3 rounded-full border-2 border-white bg-gray-400 dark:border-gray-800 dark:bg-gray-500" />
                                    </div>
                                </li>
                                {/* Event 2 */}
                                <li className="relative pb-4 last-of-type:pb-0">
                                    <div className="pl-6">
                                        <div className="mb-0.5 text-xs font-medium uppercase text-violet-600">Mon 27 Dec</div>
                                        <div className="mb-2 text-sm">
                                            <a
                                                className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
                                                href="#0"
                                            >
                                                New York &amp; New Jersey Virtual Retreat
                                            </a>
                                        </div>
                                        {/* Avatars */}
                                        <div className="flex items-center space-x-2">
                                            <div className="-ml-0.5 flex -space-x-3">
                                                <img
                                                    className="box-content rounded-full border-2 border-white dark:border-gray-800"
                                                    src={UserImage01}
                                                    width="28"
                                                    height="28"
                                                    alt="User 01"
                                                />
                                                <img
                                                    className="box-content rounded-full border-2 border-white dark:border-gray-800"
                                                    src={UserImage04}
                                                    width="28"
                                                    height="28"
                                                    alt="User 04"
                                                />
                                                <img
                                                    className="box-content rounded-full border-2 border-white dark:border-gray-800"
                                                    src={UserImage05}
                                                    width="28"
                                                    height="28"
                                                    alt="User 05"
                                                />
                                            </div>
                                            <div className="text-xs font-medium italic text-gray-400 dark:text-gray-500">+132</div>
                                        </div>
                                    </div>
                                    {/* Timeline element */}
                                    <div aria-hidden="true">
                                        <div className="absolute -bottom-1 left-0.5 top-0.5 ml-px w-0.5 bg-gray-200 dark:bg-gray-700" />
                                        <div className="absolute left-0 top-0.5 -ml-0.5 h-3 w-3 rounded-full border-2 border-white bg-gray-400 dark:border-gray-800 dark:bg-gray-500" />
                                    </div>
                                </li>
                                {/* Event 3 */}
                                <li className="relative pb-4 last-of-type:pb-0">
                                    <div className="pl-6">
                                        <div className="mb-0.5 text-xs font-medium uppercase text-violet-600">Mon 29 Dec</div>
                                        <div className="mb-2 text-sm">
                                            <a
                                                className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
                                                href="#0"
                                            >
                                                The World of AI and Machine Learning - Open Chat
                                            </a>
                                        </div>
                                        {/* Avatars */}
                                        <div className="flex items-center space-x-2">
                                            <div className="-ml-0.5 flex -space-x-3">
                                                <img
                                                    className="box-content rounded-full border-2 border-white dark:border-gray-800"
                                                    src={UserImage06}
                                                    width="28"
                                                    height="28"
                                                    alt="User 06"
                                                />
                                                <img
                                                    className="box-content rounded-full border-2 border-white dark:border-gray-800"
                                                    src={UserImage03}
                                                    width="28"
                                                    height="28"
                                                    alt="User 03"
                                                />
                                                <img
                                                    className="box-content rounded-full border-2 border-white dark:border-gray-800"
                                                    src={UserImage01}
                                                    width="28"
                                                    height="28"
                                                    alt="User 01"
                                                />
                                            </div>
                                            <div className="text-xs font-medium italic text-gray-400 dark:text-gray-500">+12</div>
                                        </div>
                                    </div>
                                    {/* Timeline element */}
                                    <div aria-hidden="true">
                                        <div className="absolute -bottom-1 left-0.5 top-0.5 ml-px w-0.5 bg-gray-200 dark:bg-gray-700" />
                                        <div className="absolute left-0 top-0.5 -ml-0.5 h-3 w-3 rounded-full border-2 border-white bg-gray-400 dark:border-gray-800 dark:bg-gray-500" />
                                    </div>
                                </li>
                                {/* Event 4 */}
                                <li className="relative pb-4 last-of-type:pb-0">
                                    <div className="pl-6">
                                        <div className="mb-0.5 text-xs font-medium uppercase text-violet-600">Mon 29 Dec</div>
                                        <div className="mb-2 text-sm">
                                            <a
                                                className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
                                                href="#0"
                                            >
                                                NYC Code &amp; Coffee 2.0 @ Freehold Brooklyn
                                            </a>
                                        </div>
                                        {/* Avatars */}
                                        <div className="flex items-center space-x-2">
                                            <div className="-ml-0.5 flex -space-x-3">
                                                <img
                                                    className="box-content rounded-full border-2 border-white dark:border-gray-800"
                                                    src={UserImage03}
                                                    width="28"
                                                    height="28"
                                                    alt="User 03"
                                                />
                                                <img
                                                    className="box-content rounded-full border-2 border-white dark:border-gray-800"
                                                    src={UserImage05}
                                                    width="28"
                                                    height="28"
                                                    alt="User 05"
                                                />
                                                <img
                                                    className="box-content rounded-full border-2 border-white dark:border-gray-800"
                                                    src={UserImage04}
                                                    width="28"
                                                    height="28"
                                                    alt="User 04"
                                                />
                                            </div>
                                            <div className="text-xs font-medium italic text-gray-400 dark:text-gray-500">+17</div>
                                        </div>
                                    </div>
                                    {/* Timeline element */}
                                    <div aria-hidden="true">
                                        <div className="absolute -bottom-1 left-0.5 top-0.5 ml-px w-0.5 bg-gray-200 dark:bg-gray-700" />
                                        <div className="absolute left-0 top-0.5 -ml-0.5 h-3 w-3 rounded-full border-2 border-white bg-gray-400 dark:border-gray-800 dark:bg-gray-500" />
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-4">
                                <button className="btn-sm w-full border-gray-200 bg-white text-gray-800 hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600">
                                    View All
                                </button>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
                            <div className="mb-4 text-xs font-semibold uppercase text-gray-400 dark:text-gray-500">Popular Stories</div>
                            <ul className="space-y-3">
                                <li>
                                    <div className="mb-1 text-sm">
                                        <a
                                            className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
                                            href="#0"
                                        >
                                            I built and sold 2 small SaaS products and quit my job in the last two years — AMA
                                        </a>
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        <a className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">
                                            markusj
                                        </a>{' '}
                                        · 2d · 312 comments
                                    </div>
                                </li>
                                <li>
                                    <div className="mb-1 text-sm">
                                        <a
                                            className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
                                            href="#0"
                                        >
                                            Besides Product Hunt, where else should I promote my new project? 🤔
                                        </a>
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        <a className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">
                                            katemerlu
                                        </a>{' '}
                                        · 2h · 7 comments
                                    </div>
                                </li>
                                <li>
                                    <div className="mb-1 text-sm">
                                        <a
                                            className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
                                            href="#0"
                                        >
                                            Which are the main channels you use to drive traffic to your website? 📈
                                        </a>
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        <a className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">
                                            sophiestar
                                        </a>{' '}
                                        · 3d · 66 comments
                                    </div>
                                </li>
                                <li>
                                    <div className="mb-1 text-sm">
                                        <a
                                            className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
                                            href="#0"
                                        >
                                            Failed for the past 12 years as a tech entrepreneur. My key takeaways.
                                        </a>
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        <a className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">
                                            ekuplu89
                                        </a>{' '}
                                        · 4h · 14 comments
                                    </div>
                                </li>
                                <li>
                                    <div className="mb-1 text-sm">
                                        <a
                                            className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
                                            href="#0"
                                        >
                                            How to build a following on Twitter as a founder - A guide to growing your audience 🚀
                                        </a>
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        <a className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">
                                            molliehacks
                                        </a>{' '}
                                        · 3d · 32 comments
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-4">
                                <button className="btn-sm w-full border-gray-200 bg-white text-gray-800 hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600">
                                    View All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForumRightContent;
