import React from 'react';

import ShopCategory01 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/shop-category-01.png';
import ShopCategory02 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/shop-category-02.png';
import ShopCategory03 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/shop-category-03.png';
import ShopCategory04 from '../../../../../../Documents/mosaicreact/mosaic-react/src/images/shop-category-04.png';

function ShopCards05() {
    return (
        <React.Fragment>
            {/* Card 1 */}
            <div className="col-span-full rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-3">
                <div className="flex h-full flex-col p-5 text-center">
                    <div className="mb-1 grow">
                        <div className="mb-2 inline-flex">
                            <img className="rounded-full" src={ShopCategory01} width={48} height={48} alt="Merchandise" />
                        </div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">Merchandise</h3>
                    </div>
                    <div>
                        <a className="text-sm font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">
                            Explore -&gt;
                        </a>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="col-span-full rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-3">
                <div className="flex h-full flex-col p-5 text-center">
                    <div className="mb-1 grow">
                        <div className="mb-2 inline-flex">
                            <img className="rounded-full" src={ShopCategory02} width={48} height={48} alt="Audiobooks" />
                        </div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">Audiobooks</h3>
                    </div>
                    <div>
                        <a className="text-sm font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">
                            Explore -&gt;
                        </a>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="col-span-full rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-3">
                <div className="flex h-full flex-col p-5 text-center">
                    <div className="mb-1 grow">
                        <div className="mb-2 inline-flex">
                            <img className="rounded-full" src={ShopCategory03} width={48} height={48} alt="Design & Tech" />
                        </div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">Design & Tech</h3>
                    </div>
                    <div>
                        <a className="text-sm font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">
                            Explore -&gt;
                        </a>
                    </div>
                </div>
            </div>

            {/* Card 4 */}
            <div className="col-span-full rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-3">
                <div className="flex h-full flex-col p-5 text-center">
                    <div className="mb-1 grow">
                        <div className="mb-2 inline-flex">
                            <img className="rounded-full" src={ShopCategory04} width={48} height={48} alt="Apps & Software" />
                        </div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">Apps & Software</h3>
                    </div>
                    <div>
                        <a className="text-sm font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">
                            Explore -&gt;
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ShopCards05;
