import {
    House,
    Puzzle,
    Workflow,
    BookA,
    MessageCircleQuestion,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
  } from "@/components/ui/sidebar"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from "@/components/ui/collapsible"

import Link from "next/link"
import ToggleMode from "./ToggleMode";

interface MenuItem {
    title: string;
    url: string;
    icon: React.ComponentType;
    subItems?: MenuItem[];
}

  // Menu items.
const items: MenuItem[] = [
    {
      title: "Home",
      url: "/",
      icon: House,
    },
    {
      title: "Games",
      url: "/games",
      icon: Puzzle,
      subItems: [
        {
            title: "Games Home",
            url: "/games",
            icon: House,
        },
        {
          title: "Connections",
          url: "/games/connections",
          icon: Workflow,
        },
        {
          title: "Wordle",
          url: "/games/wordle",
          icon: MessageCircleQuestion,
        },
      ],
    },
    {
      title: "About",
      url: "/about",
      icon: BookA,
    },
  ];

  const withSubItems = (item: MenuItem) => (
    <Collapsible
        defaultOpen
        className="group/collapsible"
        key={item.title}
    >
        <SidebarMenuItem>
        <CollapsibleTrigger asChild>
            <SidebarMenuButton>
                <item.icon />
                <span>{item.title}</span>
            </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
            <SidebarMenuSub>
            {item.subItems?.map((subItem: MenuItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuButton asChild>
                        <Link href={subItem.url}>
                            <subItem.icon />
                            <span>{subItem.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuSubItem>
            ))}
            </SidebarMenuSub>
        </CollapsibleContent>
        </SidebarMenuItem>
    </Collapsible>
  );

  const withoutSubItems = (item: MenuItem) => (
    <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild>
            <Link href={item.url}>
                <item.icon />
                <span>{item.title}</span>
            </Link>
        </SidebarMenuButton>
    </SidebarMenuItem>
  );

  const renderMenuItems = (item: MenuItem) => {
    return item.subItems ? withSubItems(item) : withoutSubItems(item);
  }
  
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item: MenuItem) => renderMenuItems(item))}
                </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter>
            <ToggleMode />
        </SidebarFooter>
      </Sidebar>
    )
  }
  