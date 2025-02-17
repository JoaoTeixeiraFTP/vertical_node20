'use client';

import { ChevronRight } from 'lucide-react';

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
import NavSpan from '@/Components/navigation/nav-span.jsx';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.jsx';

export function NavMain({ items }) {
    const page = usePage();
    const gradient = page.url.includes(items.url_name) ? 'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]' : '';

    return (
        <SidebarGroup className={'rounded-lg bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ' + gradient}>
            <SidebarMenu>
                <Collapsible key={items.title} asChild defaultOpen={items.isActive} className={'group/collapsible'}>
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild className="">
                            <SidebarMenuButton tooltip={items.title}>
                                <NavSpan>
                                    {items.icon && <items.icon />}
                                    <span className="m-2">{items.title}</span>
                                    <ChevronRight className="ml-auto transition-transform duration-200 rotate-45 group-data-[state=open]/collapsible:-rotate-45" />
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
