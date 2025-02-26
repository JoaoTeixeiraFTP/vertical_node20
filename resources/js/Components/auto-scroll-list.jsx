import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card.jsx';
import { cn } from '@/lib/utils.js';
import { formatEuro } from '@/utils/Utils.js';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { useEffect, useRef, useState } from 'react';

export default function AutoScrollList({ title, children, length, className, classNameUl, footerValue = null }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const listRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
        }, 1000); // Muda de item a cada 1s

        return () => clearInterval(interval);
    }, [isPaused, length]);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.style.transform = `translateY(-${currentIndex * 1}%)`;
        }
    }, [currentIndex]);

    const handleMouseEnter = () => {
        setIsPaused(true);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current); // Cancela reinício automático se hover voltar
        }
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsPaused(false);
        }, 4000); // Espera 10s antes de reiniciar
    };

    return (
        <Card className={cn('block', className)}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <hr className="mb-2 mt-2 border-t border-gray-200 dark:border-gray-700" />
            </CardHeader>
            <CardContent>
                <ScrollArea className={'m-0 w-full overflow-hidden p-0'}>
                    <ul ref={listRef} className={cn('w-full transition-transform duration-1000 ease-in-out', classNameUl)}>
                        {children.map((child, index) => (
                            <li key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={'w-full'}>
                                {child}
                            </li>
                        ))}
                    </ul>
                </ScrollArea>
            </CardContent>
            {footerValue !== null ? (
                <CardFooter>
                    <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        Total:
                        <span className="text-red-600 dark:text-red-400"> {formatEuro(footerValue.current)}</span>
                    </h1>
                </CardFooter>
            ) : (
                <div hidden={true}></div>
            )}
        </Card>
    );
}
