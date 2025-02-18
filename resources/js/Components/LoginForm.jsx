'use client';

import Checkbox from '@/Components/Checkbox.jsx';
import InputError from '@/Components/InputError.jsx';
import InputLabel from '@/Components/InputLabel.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import TextInput from '@/Components/TextInput.jsx';
import { useForm } from '@inertiajs/react';

export default function LoginForm({ subscriber }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        subscriber_url: subscriber,
        no: '',
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login', subscriber), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <div className="mx-auto w-full max-w-sm px-4 py-8">
                <h1 className="mb-6 text-3xl font-bold text-gray-800 dark:text-gray-100">Criar Conta</h1>
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="no" value="No" />

                        <TextInput
                            id="no"
                            type="number"
                            name="no"
                            value={data.no}
                            className="mt-1 block w-full"
                            autoComplete="no"
                            isFocused={true}
                            onChange={(e) => setData('no', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4 block">
                        <label className="flex items-center">
                            <Checkbox name="remember" checked={data.remember} onChange={(e) => setData('remember', e.target.checked)} />
                            <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Lembrar</span>
                        </label>
                    </div>

                    <div className="mt-4 flex items-center justify-end">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Entrar
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </>
    );
}
