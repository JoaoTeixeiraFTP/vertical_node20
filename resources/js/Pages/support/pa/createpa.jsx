import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';


export default function Orders({ auth, orders }) {
    const page = usePage();
    return (
        <AuthenticatedLayout
            url={page.url}
            auth={auth}
            header={<span className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">Criar PA</span>}
        >
            <Head title="Criar PA" />

            <div className="mx-4 dark:bg-[#1f2937] shadow-lg w-auto px-4 py-4">
                <h2 className="text-xl font-bold mb-4">PEDIDO DE ASSISTÊNCIA</h2>
                <p className="mb-4 text-gray-400 dark:text-gray-300">
                    Ao usar o <strong>REGISTO DE PEDIDO DE ASSISTÊNCIA</strong> está a registar o mesmo diretamente na plataforma de suporte. Será contactado com a maior brevidade pela nossa equipa. Obrigado pela preferência.
                </p>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Nome / Apelido (Cliente) *" className="border p-2 rounded w-full bg-gray-200 placeholder-gray-300 dark:bg-gray-400 dark:placeholder-gray-100" />
                        <input type="text" placeholder="Empresa" className="border p-2 rounded w-full bg-gray-200 placeholder-gray-300 dark:bg-gray-400 dark:placeholder-gray-100" />
                        <input type="text" placeholder="Morada *" className="border p-2 rounded w-full bg-gray-200 placeholder-gray-300 dark:bg-gray-400 dark:placeholder-gray-100" />
                        <input type="text" placeholder="Código Postal *" className="border p-2 rounded w-full bg-gray-200 placeholder-gray-300 dark:bg-gray-400 dark:placeholder-gray-100" />
                        <input type="text" placeholder="Localidade *" className="border p-2 rounded w-full bg-gray-200 placeholder-gray-300 dark:bg-gray-400 dark:placeholder-gray-100" />
                        <input type="email" placeholder="Email *" className="border p-2 rounded w-full bg-gray-200 placeholder-gray-300 dark:bg-gray-400 dark:placeholder-gray-100" />
                        <input type="text" placeholder="Telefone/Telemóvel *" className="border p-2 rounded w-full bg-gray-200 placeholder-gray-300 dark:bg-gray-400 dark:placeholder-gray-100" />
                        <input type="text" placeholder="Marca da Máquina *" className="border p-2 rounded w-full bg-gray-200 placeholder-gray-300 dark:bg-gray-400 dark:placeholder-gray-100" />
                        <input type="text" placeholder="Modelo da Máquina *" className="border p-2 rounded w-full bg-gray-200 placeholder-gray-300 dark:bg-gray-400 dark:placeholder-gray-100" />
                    </div>

                    <div>
                        <label className="block font-semibold">Tipo de Assistência:</label>
                        <div className="flex gap-4 mt-2">
                            <label className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                                <input type="radio" name="tipo" value="Avaria" /> Avaria
                            </label>
                            <label className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                                <input type="radio" name="tipo" value="Manutenção" /> Manutenção
                            </label>
                            <label className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                                <input type="radio" name="tipo" value="Inspecao" /> Inspeção / Verificação
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="block font-semibold">Anexar Foto:</label>
                        <input type="file" className="border p-2 rounded w-full" />
                    </div>

                    <div>
                        <label className="block font-semibold">Descrição:</label>
                        <textarea placeholder="Problema, sugestão, reportar erro, etc." className="border p-2 rounded w-full h-24 bg-gray-200 placeholder-gray-300 dark:bg-gray-400 dark:placeholder-gray-100"></textarea>
                    </div>

                    <div>
                        <label className="block font-semibold">Nível de Urgência:</label>
                        <div className="flex gap-4 mt-2">
                            <label className="flex items-center gap-1">
                                <input type="radio" name="urgencia" value="Elevado" /> Elevado
                            </label>
                            <label className="flex items-center gap-1">
                                <input type="radio" name="urgencia" value="Médio" /> Médio
                            </label>
                            <label className="flex items-center gap-1">
                                <input type="radio" name="urgencia" value="Baixo" /> Baixo
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="bg-gray-400 dark:bg-gray-300 text-white px-4 py-2 rounded w-full hover:bg-gray-500 dark:hover:bg-gray-400">
                        ENVIAR
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}