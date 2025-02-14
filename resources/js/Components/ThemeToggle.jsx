import { useTheme } from '@/utils/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <>
            <input
                type="checkbox"
                name="light-switch"
                id="light-switch"
                className="light-switch sr-only"
                checked={theme === 'light'}
                onChange={handleThemeChange}
            />
            <label
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50 lg:hover:bg-gray-200 dark:lg:hover:bg-gray-800"
                htmlFor="light-switch"
            >
                <Sun className="fill-current text-gray-500/80 dark:hidden dark:text-gray-400/80" />
                <Moon className="hidden fill-current text-gray-500/80 dark:block dark:text-gray-400/80" />
            </label>
        </>
    );
}
