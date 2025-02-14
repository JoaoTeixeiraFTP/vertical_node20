import { ThemeProvider } from '@/utils/ThemeContext.jsx';

export default function GuestLayout({ children }) {
    return (
        <ThemeProvider>
            <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 h-[100vh] sm:justify-center">
                <div className="w-full h-full overflow-hidden bg-white shadow-md dark:bg-gray-900 sm:rounded-lg">
                    {children}
                </div>
            </div>
        </ThemeProvider>
    );
}
