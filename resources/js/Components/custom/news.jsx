import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card.jsx';
import { useCallback, useEffect, useState } from 'react';
import placeholder from '../../../../public/images/placeholder.jpg';

export default function News({ result }) {
    const [businessIndex, setBusinessIndex] = useState(1);
    const [techCrunchIndex, setTechCrunchIndex] = useState(0);

    const businessNews = result.businessHeadlines?.length ? result.businessHeadlines : [];
    const techCrunchNews = result.techCrunchHeadlines?.length ? result.techCrunchHeadlines : [];

    const isFullWidth = (businessNews.length > 0 && techCrunchNews.length === 0) || (businessNews.length === 0 && techCrunchNews.length > 0);

    const updateBusinessIndex = useCallback(() => {
        setBusinessIndex((prevIndex) => (prevIndex + 1) % businessNews.length);
    }, [businessNews.length]);

    const updateTechCrunchIndex = useCallback(() => {
        setTechCrunchIndex((prevIndex) => (prevIndex + 1) % techCrunchNews.length);
    }, [techCrunchNews.length]);

    useEffect(() => {
        if (businessNews.length > 1) {
            const interval = setInterval(updateBusinessIndex, 6000);
            return () => clearInterval(interval);
        }
    }, [businessNews.length, updateBusinessIndex]);

    useEffect(() => {
        if (techCrunchNews.length > 1) {
            const interval = setInterval(updateTechCrunchIndex, 6000);
            return () => clearInterval(interval);
        }
    }, [techCrunchNews.length, updateTechCrunchIndex]);

    return (
        <Card className={'block h-96'}>
            <CardHeader>
                <CardTitle>Business</CardTitle>
                <hr className="mb-2 mt-2 border-t border-gray-200 dark:border-gray-700" />
            </CardHeader>
            <CardContent>
                {' '}
                {businessNews.length > 0 && (
                    <div className="overflow-hidden">
                        <div className="flex transition-all duration-500 ease-in-out">
                            {businessNews.map((news, index) => (
                                <div key={index} className={`w-full ${index !== businessIndex && 'hidden'}`}>
                                    <div className="mb-4 flex items-center space-x-3 py-1">
                                        <img src={news.urlToImage ?? placeholder} alt="Imagem" className="h-16 w-16 rounded-md object-cover" />
                                        <div>
                                            <h3 className="w-full break-words text-sm font-semibold text-gray-800 dark:text-gray-100">
                                                {news.title}
                                            </h3>
                                            <p className="text-xs text-gray-600 dark:text-gray-300">{news.publishedAt}</p>
                                        </div>
                                    </div>
                                    {/*<div className="flex items-center space-x-3 py-2">*/}
                                    {/*    <img src={news.urlToImage ?? placeholder} alt="Imagem" className="h-16 w-16 rounded-md object-cover" />*/}
                                    {/*    <div>*/}
                                    {/*        <h3 className="w-42 break-words text-sm font-semibold text-gray-800 dark:text-gray-100">{news.title}</h3>*/}
                                    {/*        <p className="text-xs text-gray-600 dark:text-gray-300">{news.date}</p>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            ))}
                        </div>
                        {businessNews.length > 1 && (
                            <div className="flex justify-center space-x-2">
                                {businessNews.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`h-2 w-2 cursor-pointer rounded-full ${index === businessIndex ? 'bg-blue-800' : 'bg-gray-300'}`}
                                        onClick={() => setBusinessIndex(index)}
                                    ></span>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </CardContent>
            <CardHeader>
                <CardTitle>TechCrunh</CardTitle>
                <hr className="mb-2 mt-2 border-t border-gray-200 dark:border-gray-700" />
            </CardHeader>
            <CardContent>
                {' '}
                {techCrunchNews.length > 0 && (
                    <div>
                        <div className="overflow-hidden">
                            <div className="row-span-2 grid transition-all duration-500 ease-in-out">
                                {techCrunchNews.map((article, index) => (
                                    <div key={index} className={`w-full ${index !== techCrunchIndex && 'hidden'}`}>
                                        <div className="mb-4 flex items-center space-x-3 py-1">
                                            <img src={article.urlToImage ?? placeholder} alt="Imagem" className="h-16 w-16 rounded-md object-cover" />
                                            <div>
                                                <h3 className="w-full break-words text-sm font-semibold text-gray-800 dark:text-gray-100">
                                                    {article.title}
                                                </h3>
                                                <p className="text-xs text-gray-600 dark:text-gray-300">{article.publishedAt}</p>
                                            </div>
                                        </div>
                                        {/*<div className="flex items-center space-x-3 py-2">*/}
                                        {/*    <img src={article.urlToImage ?? placeholder} alt="Imagem" className="h-16 w-16 rounded-md object-cover" />*/}
                                        {/*    <div>*/}
                                        {/*        <h3 className="w-52 break-words text-sm font-semibold text-gray-800 dark:text-gray-100">*/}
                                        {/*            {article.title}*/}
                                        {/*        </h3>*/}
                                        {/*        <p className="text-wrap text-xs text-gray-600 dark:text-gray-300">{article.date}</p>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                ))}
                            </div>

                            {techCrunchNews.length > 1 && (
                                <div className="mt-2 flex justify-center space-x-2">
                                    {techCrunchNews.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`h-2 w-2 cursor-pointer rounded-full ${index === techCrunchIndex ? 'bg-blue-800' : 'bg-gray-300'}`}
                                            onClick={() => setTechCrunchIndex(index)}
                                        ></span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
