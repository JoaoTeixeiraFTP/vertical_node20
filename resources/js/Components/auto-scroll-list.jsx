import { useEffect, useRef, useState } from 'react';
import { ScrollArea } from '@/Components/ui/scroll-area.jsx';

export default function AutoScrollList({ children, length }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const listRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
        }, 1000); // Change item every 3 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.style.transform = `translateY(-${currentIndex * 1}%)`;
        }
    }, [currentIndex]);

    return (
        <ScrollArea className="h-full w-full rounded-md border">
            <ul
                ref={listRef}
                className="absolute transition-transform duration-1000 ease-in-out">
                {children}
            </ul>
        </ScrollArea>
    );
}

