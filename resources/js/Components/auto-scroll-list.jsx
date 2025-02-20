import { useEffect, useRef, useState } from 'react';

export default function AutoScrollList({ children, length }) {
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
        }, 10000); // Espera 10s antes de reiniciar
    };

    return (
        <div className="relative h-full w-full overflow-hidden rounded-md border">
            <ul ref={listRef} className="absolute transition-transform duration-1000 ease-in-out">
                {children.map((child, index) => (
                    <li key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        {child}
                    </li>
                ))}
            </ul>
        </div>
    );
}
