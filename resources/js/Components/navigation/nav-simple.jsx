import ResponsiveNavLink from '@/Components/ResponsiveNavLink.jsx';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/Components/ui/sidebar.jsx';
import { usePage } from '@inertiajs/react';

export function NavSimple({ item }) {
    const page = usePage();
    const gradient = page.url === item.url_name ? 'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]' : '';

    return (
        <SidebarMenu>
            <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                    asChild
                    className={'mb-0.5 rounded-lg bg-[linear-gradient(135deg,var(--tw-gradient-stops))] pl-2 pr-3 last:mb-0 ' + gradient}
                >
                    <ResponsiveNavLink href={item.url} active={route().current(item.name)}>
                        {item.icon && <item.icon />}
                        <span className="m-4">{item.name}</span>
                    </ResponsiveNavLink>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
