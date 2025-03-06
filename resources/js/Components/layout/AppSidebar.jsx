import { ChartArea, Cog, Home, Wrench } from 'lucide-react';

import ApplicationLogo from '@/Components/ApplicationLogo.jsx';
import { NavMain } from '@/Components/navigation/nav-main.jsx';
import { NavSimple } from '@/Components/navigation/nav-simple.jsx';
import { NavUserSidebar } from '@/Components/navigation/nav-user-sidebar.jsx';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, SidebarTrigger } from '@/Components/ui/sidebar.jsx';

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
    support: {
        url_name: '/support',
        name: 'Suporte',
        url: route('support'),
        icon: Wrench,
    },
};

export function AppSidebar({ auth, url }) {
    data.user = auth.user;
    //data.finance.isActive = url.includes('/finance');

    console.log(data);
    return (
        <Sidebar id={'app-sidebar'} collapsible="icon">
            <SidebarHeader className={'mb-12 justify-between px-4'}>
                <ApplicationLogo />
                <SidebarRail id={'sidebar-toggle'} />
            </SidebarHeader>
            <SidebarContent>
                <div className="grid gap-2 px-3">
                    <NavSimple item={data.home} />
                    <NavMain items={data.finance} />
                    <NavSimple item={data.orders} />
                    <NavSimple item={data.support} />
                </div>
            </SidebarContent>
            <SidebarFooter className="sm:hidden">
                <NavUserSidebar user={data.user} />
            </SidebarFooter>
            <SidebarTrigger className={'z-40 hidden sm:absolute sm:bottom-2 sm:right-1 sm:block'} />
        </Sidebar>
    );
}
