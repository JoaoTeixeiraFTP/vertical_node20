import { ChartArea, Cog, Home } from 'lucide-react';

import ApplicationLogo from '@/Components/ApplicationLogo.jsx';
import { NavMain } from '@/Components/navigation/nav-main.jsx';
import { NavSimple } from '@/Components/navigation/nav-simple.jsx';
import { NavUserSidebar } from '@/Components/navigation/nav-user-sidebar.jsx';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/Components/ui/sidebar.jsx';
import { usePage } from '@inertiajs/react';

const data = {
    finance: {
        title: 'Financeira',
        url_name: '/finance',
        url: '#',
        icon: ChartArea,
        isActive: true,
        items: [
            {
                title: 'Dashboard',
                url: route('finance.dashboard'),
            },
            {
                title: 'Faturas',
                url: route('finance.invoices'),
            },
            {
                title: 'Conta Corrente',
                url: route('finance.current-account'),
            },
            {
                title: 'Não Regularizados',
                url: route('finance.notregularized'),
            },
            {
                title: 'Recibos',
                url: route('finance.receipts'),
            },
        ],
    },
    home: {
        url_name: '/home',
        name: 'Home',
        url: route('home'),
        icon: Home,
    },
    orders: {
        url_name: '/orders',
        name: 'Encomendas',
        url: route('orders'),
        icon: Cog,
    },
};

export function AppSidebar({ ...props }) {
    data.user = usePage().props.auth.user;

    return (
        <Sidebar id={'app-sidebar'} collapsible="icon" {...props}>
            <SidebarHeader className={'mb-12 justify-between px-4'}>
                <ApplicationLogo />
                <SidebarRail id={'sidebar-toggle'} />
            </SidebarHeader>
            <SidebarContent>
                <div className="grid gap-2 px-4">
                    <NavSimple item={data.home} />
                    <NavMain items={data.finance} />
                    <NavSimple item={data.orders} />
                </div>
            </SidebarContent>
            <SidebarFooter className="sm:hidden">
                <NavUserSidebar user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}
