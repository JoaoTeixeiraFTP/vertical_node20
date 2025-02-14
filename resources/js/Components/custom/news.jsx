import { useEffect, useState } from "react";

export default function News({ result }){
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
            <div className="flex justify-center items-center h-40 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
                <p className="text-gray-800 dark:text-gray-100 text-lg">Carregando notícias...</p>
            </div>
        );
    }

    return (
        <div className={`flex flex-col ${isFullWidth ? "w-full" : "w-1/2"} bg-white dark:bg-gray-800 shadow-sm rounded-xl p-5`}>
            <h2 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Notícias</h2>

            {businessNews.length > 0 && (
                <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100">Business</h3>
                    <div className="overflow-hidden">
                        <div className="flex transition-all duration-500 ease-in-out">
                            {businessNews.map((news, index) => (
                                <div key={index} className={`flex-shrink-0 w-80 ${index !== businessIndex && "hidden"}`}>
                                    <div className="py-2 flex items-center space-x-3">
                                        <img src={news.img} alt="Imagem" className="w-16 h-16 object-cover rounded-md" />
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 w-52 break-words">{news.title}</h3>
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
                                <div key={index} className={`flex-shrink-0 w-80 ${index !== techCrunchIndex && "hidden"}`}>
                                    <div className="py-2 flex items-center space-x-3">
                                        <img src={article.img || "/images/placeholder.jpg"} alt="Imagem" className="w-16 h-16 object-cover rounded-md" />
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 w-52 break-words">{article.title}</h3>
                                            <p className="text-xs text-gray-600 dark:text-gray-300">{article.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Dots */}
                        {techCrunchNews.length > 1 && (
                            <div className="flex justify-center mt-3 space-x-2">
                                {techCrunchNews.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`w-2 h-2 rounded-full cursor-pointer ${index === techCrunchIndex ? "bg-blue-800" : "bg-gray-300"}`}
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
};
