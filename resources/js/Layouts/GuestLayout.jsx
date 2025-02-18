import { ThemeProvider } from '@/utils/ThemeContext.jsx';

export default function GuestLayout({ children }) {
    return (
        <ThemeProvider>
            <div className="flex h-[100vh] flex-col items-center bg-gray-100 dark:bg-gray-900 sm:justify-center">
                <div className="h-full w-full overflow-hidden bg-white shadow-md dark:bg-gray-900 sm:rounded-lg">{children}</div>
            </div>
        </ThemeProvider>
    );
}
