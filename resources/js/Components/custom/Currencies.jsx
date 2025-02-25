import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card.jsx';

export default function Currencies() {
    return (
        <Card className={'block'}>
            <CardHeader>
                <CardTitle>Moedas</CardTitle>
                <hr className="mb-4 mt-2 border-t border-gray-200 dark:border-gray-700" />
            </CardHeader>
            <CardContent>
                <table className="w-full table-auto text-left">
                    <thead className="border-b border-gray-200 dark:border-gray-700">
                        <tr>
                            <th className="py-2 text-sm font-medium">Moeda</th>
                            <th className="py-2 text-sm font-medium">Capital</th>
                            <th className="py-2 text-sm font-medium">Grafico</th>
                            <th className="py-2 text-sm font-medium">Preço</th>
                            <th className="py-2 text-sm font-medium">Últimas (24H)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td className="flex items-center space-x-2 py-3">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-sm font-semibold text-white">
                                    €
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Dólar</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">USD</p>
                                </div>
                            </td>
                            <td className="py-3 text-sm">€23T</td>
                            <td className="py-3">
                                <svg className="h-6 w-20" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
                                    <polyline fill="none" stroke="#10B981" strokeWidth="2" points="0,20 20,15 40,10 60,15 80,10 100,5" />
                                </svg>
                            </td>
                            <td className="py-3 text-sm">€1</td>
                            <td className="py-3 text-sm text-green-500 dark:text-green-400">+0.5%</td>
                        </tr>
                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td className="flex items-center space-x-2 py-3">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
                                    €
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Euro</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">EUR</p>
                                </div>
                            </td>
                            <td className="py-3 text-sm">€17T</td>
                            <td className="py-3">
                                <svg className="h-6 w-20" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
                                    <polyline fill="none" stroke="#EF4444" strokeWidth="2" points="0,10 20,15 40,20 60,25 80,20 100,25" />
                                </svg>
                            </td>
                            <td className="py-3 text-sm">€1.1</td>
                            <td className="py-3 text-sm text-red-500 dark:text-red-400">-0.3%</td>
                        </tr>
                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td className="flex items-center space-x-2 py-3">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-sm font-semibold text-white">
                                    R€
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Real</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">BRL</p>
                                </div>
                            </td>
                            <td className="py-3 text-sm">€3T</td>
                            <td className="py-3">
                                <svg className="h-6 w-20" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
                                    <polyline fill="none" stroke="#10B981" strokeWidth="2" points="0,15 20,10 40,5 60,10 80,15 100,10" />
                                </svg>
                            </td>
                            <td className="py-3 text-sm">€0.2</td>
                            <td className="py-3 text-sm text-green-500 dark:text-green-400">+1.2%</td>
                        </tr>
                    </tbody>
                </table>
            </CardContent>
        </Card>
    );
}
