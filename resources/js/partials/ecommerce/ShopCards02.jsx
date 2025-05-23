import React from 'react';

import AppImage05 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/applications-image-05.jpg';
import AppImage06 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/applications-image-06.jpg';
import AppImage07 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/applications-image-07.jpg';
import AppImage08 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/applications-image-08.jpg';

function ShopCards02() {
    return (
        <React.Fragment>
            {/* Card 1 */}
            <div className="col-span-full overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-3">
                <div className="flex h-full flex-col">
                    {/* Image */}
                    <div className="relative">
                        <img className="w-full" src={AppImage05} width="286" height="160" alt="Application 05" />
                        {/* Popular label */}
                        <div className="absolute right-0 top-0 mr-4 mt-4">
                            <div className="inline-flex items-center rounded-full bg-gray-900/60 px-2 py-0.5 text-center text-xs font-medium text-gray-100 dark:bg-gray-800/60 dark:text-gray-300">
                                <svg className="mr-1 h-3 w-3 shrink-0 fill-current text-yellow-500" viewBox="0 0 12 12">
                                    <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                                </svg>
                                <span>Popular</span>
                            </div>
                        </div>
                    </div>
                    {/* Card Content */}
                    <div className="flex grow flex-col p-5">
                        {/* Card body */}
                        <div className="grow">
                            {/* Header */}
                            <header className="mb-2">
                                <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">Form Builder CP</h3>
                                <div className="text-sm">Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!</div>
                            </header>
                            {/* Rating and Price */}
                            <div className="mb-5 flex flex-wrap items-center justify-between">
                                {/* Rating */}
                                <div className="mr-2 flex items-center space-x-2">
                                    <svg className="fill-current text-yellow-500" width="16" height="16" viewBox="0 0 16 16">
                                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                    </svg>
                                    {/* Rate */}
                                    <div className="whitespace-nowrap text-sm font-medium">
                                        <span>4.7</span> <span className="text-gray-400 dark:text-gray-500">(478)</span>
                                    </div>
                                </div>
                                {/* Price */}
                                <div className="flex items-center space-x-2">
                                    <div className="inline-flex rounded-full bg-green-500/20 px-2 py-0.5 text-center text-sm font-medium text-green-700">
                                        $89.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card footer */}
                        <div>
                            <a
                                className="btn-sm w-full bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                                href="#0"
                            >
                                Buy Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="col-span-full overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-3">
                <div className="flex h-full flex-col">
                    {/* Image */}
                    <div className="relative">
                        <img className="w-full" src={AppImage06} width="286" height="160" alt="Application 06" />
                    </div>
                    {/* Card Content */}
                    <div className="flex grow flex-col p-5">
                        {/* Card body */}
                        <div className="grow">
                            {/* Header */}
                            <header className="mb-2">
                                <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">Form Builder CP</h3>
                                <div className="text-sm">Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!</div>
                            </header>
                            {/* Rating and Price */}
                            <div className="mb-5 flex flex-wrap items-center justify-between">
                                {/* Rating */}
                                <div className="mr-2 flex items-center space-x-2">
                                    <svg className="fill-current text-yellow-500" width="16" height="16" viewBox="0 0 16 16">
                                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                    </svg>
                                    {/* Rate */}
                                    <div className="whitespace-nowrap text-sm font-medium">
                                        <span>4.7</span> <span className="text-gray-400 dark:text-gray-500">(478)</span>
                                    </div>
                                </div>
                                {/* Price */}
                                <div className="flex items-center space-x-2">
                                    <div className="inline-flex rounded-full bg-green-500/20 px-2 py-0.5 text-center text-sm font-medium text-green-700">
                                        $89.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card footer */}
                        <div>
                            <a
                                className="btn-sm w-full bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                                href="#0"
                            >
                                Buy Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="col-span-full overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-3">
                <div className="flex h-full flex-col">
                    {/* Image */}
                    <div className="relative">
                        <img className="w-full" src={AppImage07} width="286" height="160" alt="Application 07" />
                    </div>
                    {/* Card Content */}
                    <div className="flex grow flex-col p-5">
                        {/* Card body */}
                        <div className="grow">
                            {/* Header */}
                            <header className="mb-2">
                                <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">Form Builder CP</h3>
                                <div className="text-sm">Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!</div>
                            </header>
                            {/* Rating and Price */}
                            <div className="mb-5 flex flex-wrap items-center justify-between">
                                {/* Rating */}
                                <div className="mr-2 flex items-center space-x-2">
                                    <svg className="fill-current text-yellow-500" width="16" height="16" viewBox="0 0 16 16">
                                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                    </svg>
                                    {/* Rate */}
                                    <div className="whitespace-nowrap text-sm font-medium">
                                        <span>4.7</span> <span className="text-gray-400 dark:text-gray-500">(478)</span>
                                    </div>
                                </div>
                                {/* Price */}
                                <div className="flex items-center space-x-2">
                                    <div className="inline-flex rounded-full bg-red-500/20 px-2 py-0.5 text-center text-sm font-medium text-red-700">
                                        $39.00
                                    </div>
                                    <div className="inline-flex text-sm font-medium text-gray-400 line-through dark:text-gray-500">$199.00</div>
                                </div>
                            </div>
                        </div>
                        {/* Card footer */}
                        <div>
                            <a
                                className="btn-sm w-full bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                                href="#0"
                            >
                                Buy Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 4 */}
            <div className="col-span-full overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-3">
                <div className="flex h-full flex-col">
                    {/* Image */}
                    <div className="relative">
                        <img className="w-full" src={AppImage08} width="286" height="160" alt="Application 08" />
                    </div>{' '}
                    {/* Card Content */}
                    <div className="flex grow flex-col p-5">
                        {/* Card body */}
                        <div className="grow">
                            {/* Header */}
                            <header className="mb-2">
                                <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">Form Builder CP</h3>
                                <div className="text-sm">Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!</div>
                            </header>
                            {/* Rating and Price */}
                            <div className="mb-5 flex flex-wrap items-center justify-between">
                                {/* Rating */}
                                <div className="mr-2 flex items-center space-x-2">
                                    <svg className="fill-current text-yellow-500" width="16" height="16" viewBox="0 0 16 16">
                                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                    </svg>
                                    {/* Rate */}
                                    <div className="whitespace-nowrap text-sm font-medium">
                                        <span>4.7</span> <span className="text-gray-400 dark:text-gray-500">(478)</span>
                                    </div>
                                </div>
                                {/* Price */}
                                <div className="flex items-center space-x-2">
                                    <div className="inline-flex rounded-full bg-green-500/20 px-2 py-0.5 text-center text-sm font-medium text-green-700">
                                        $89.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card footer */}
                        <div>
                            <a
                                className="btn-sm w-full bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                                href="#0"
                            >
                                Buy Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ShopCards02;
