'use client';

import { ChevronRight } from 'lucide-react';

import NavSpan from '@/Components/navigation/nav-span.jsx';
import ResponsiveNavLink from '@/Components/navigation/ResponsiveNavLink.jsx';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/Components/ui/collapsible.jsx';
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/Components/ui/sidebar.jsx';
import { usePage } from '@inertiajs/react';

export function NavMain({ items }) {
    const page = usePage();
    const gradient = page.url.includes(items.url_name)
        ? 'from-violet-500/[0.12] hover:dark:from-violet-500/[0.24] hover:to-violet-500/[0.04] dark:from-violet-500/[0.24] to-violet-500/[0.04]'
        : '';

    return (
        <SidebarGroup className={'rounded-lg bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ' + gradient}>
            <SidebarMenu>
                <Collapsible key={items.title} asChild defaultOpen={items.isActive} className={'group/collapsible'}>
                    <SidebarMenuItem>
                        <CollapsibleTrigger className={'w-full'}>
                            <SidebarMenuButton asChild tooltip={items.title} className={'mb-0.5 w-full rounded-lg pl-4 pr-3 last:mb-0'}>
                                <NavSpan active={route().current(items.url_name)}>
                                    {items.icon && <items.icon />}
                                    <span className="ms-2">{items.title}</span>
                                    <ChevronRight className="ml-auto rotate-90 transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90" />
                                </NavSpan>
                            </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <SidebarMenuSub>
                                {items.items?.map((subItem) => (
                                    <SidebarMenuSubItem key={subItem.title}>
                                        <SidebarMenuSubButton asChild>
                                            <ResponsiveNavLink href={subItem.url}>
                                                <span>{subItem.title}</span>
                                            </ResponsiveNavLink>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                ))}
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>
            </SidebarMenu>
        </SidebarGroup>
    );
}
