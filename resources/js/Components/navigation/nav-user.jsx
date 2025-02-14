'use client';

import { ChevronsUpDown, LogOut, UserRound } from 'lucide-react';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/Components/dropdown/dropdown-menu.jsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar.jsx';
import { router } from '@inertiajs/react';

export function NavUser({ user }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0">
                    <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src={user.profile_photo_url} alt={user.name} />
                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">{user.name}</span>
                        <span className="truncate text-xs">{user.email}</span>
                    </div>
                    <ChevronsUpDown className="ml-auto size-4 align-middle" />
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem>
                    <UserRound />
                    <a href={route('profile.edit')}>Profile</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LogOut />
                    <button onClick={() => router.post('logout')}>Sair</button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
