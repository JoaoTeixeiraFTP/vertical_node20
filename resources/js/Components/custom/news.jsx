import { useEffect, useState } from 'react';
import placeholder from '../../../../public/images/placeholder.jpg';

export default function News({ result }) {
    const [businessIndex, setBusinessIndex] = useState(0);
    const [techCrunchIndex, setTechCrunchIndex] = useState(0);

    const businessNews = result.businessNews?.length ? result.businessNews : [];
    const techCrunchNews = result.techCrunchHeadlines?.length ? result.techCrunchHeadlines : [];

    // Se não houver notícias em nenhuma das categorias, mostrar "Carregando..."
    const isLoading = businessNews.length === 0 && techCrunchNews.length === 0;
    const isFullWidth = (businessNews.length > 0 && techCrunchNews.length === 0) || (businessNews.length === 0 && techCrunchNews.length > 0);

    // Rotação automática do Business News
    useEffect(() => {
        if (businessNews.length > 1) {
            const interval = setInterval(() => {
                setBusinessIndex((prevIndex) => (prevIndex + 1) % businessNews.length);
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [businessNews]);

    // Rotação automática do TechCrunch News
    useEffect(() => {
        if (techCrunchNews.length > 1) {
            const interval = setInterval(() => {
                setTechCrunchIndex((prevIndex) => (prevIndex + 1) % techCrunchNews.length);
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [techCrunchNews]);

    if (isLoading) {
        return (
            <div className="flex h-40 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-gray-800">
                <p className="text-lg text-gray-800 dark:text-gray-100">Carregando notícias...</p>
            </div>
        );
    }

    return (
        <div className={`flex flex-col ${isFullWidth ? 'w-full' : 'w-1/2'} rounded-xl bg-white p-5 shadow-sm dark:bg-gray-800`}>
            <h2 className="mb-4 font-semibold text-gray-800 dark:text-gray-100">Notícias</h2>

            {businessNews.length > 0 && (
                <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100">Business</h3>
                    <div className="overflow-hidden">
                        <div className="flex transition-all duration-500 ease-in-out">
                            {businessNews.map((news, index) => (
                                <div key={index} className={`w-80 flex-shrink-0 ${index !== businessIndex && 'hidden'}`}>
                                    <div className="flex items-center space-x-3 py-2">
                                        <img src={news.img ?? placeholder} alt="Imagem" className="h-16 w-16 rounded-md object-cover" />
                                        <div>
                                            <h3 className="w-52 break-words text-sm font-semibold text-gray-800 dark:text-gray-100">{news.title}</h3>
                                            <p className="text-xs text-gray-600 dark:text-gray-300">{news.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {techCrunchNews.length > 0 && (
                <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100">TechCrunch</h3>
                    <div className="overflow-hidden">
                        <div className="flex transition-all duration-500 ease-in-out">
                            {techCrunchNews.map((article, index) => (
                                <div key={index} className={`w-80 flex-shrink-0 ${index !== techCrunchIndex && 'hidden'}`}>
                                    <div className="flex items-center space-x-3 py-2">
                                        <img src={article.img ?? placeholder} alt="Imagem" className="h-16 w-16 rounded-md object-cover" />
                                        <div>
                                            <h3 className="w-52 break-words text-sm font-semibold text-gray-800 dark:text-gray-100">
                                                {article.title}
                                            </h3>
                                            <p className="text-xs text-gray-600 dark:text-gray-300">{article.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Dots */}
                        {techCrunchNews.length > 1 && (
                            <div className="mt-3 flex justify-center space-x-2">
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
        </div>
    );
}
