"use client"

import * as React from "react"
import {
  BookOpen,
  Settings2,
  SquareTerminal,
  Star,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import { useSession } from "next-auth/react"

// 定义类型
interface Team {
  name: string
  logo: any
  plan: string
}

interface NavItem {
  title: string
  url: string
  icon?: any
  isActive?: boolean
  items?: { title: string; url: string }[]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession()
  
  // 使用实际用户数据
  const userData = {
    user: {
      name: session?.user?.name || "Guest",
      email: session?.user?.email || "",
      avatar: session?.user?.image || "/avatars/default.jpg",
    },
    teams: [
      {
        name: "InStar Inc",
        logo: Star,
        plan: "Enterprise",
      }
    ],
    navMain: [
      {
        title: "Content",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "Articles",
            url: "#",
          },
          {
            title: "Videos",
            url: "#",
          },
          {
            title: "Books",
            url: "#",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        isActive: true,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        isActive: true,
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "Profile",
            url: "#",
          },
          {
            title: "Storage",
            url: "#",
          },
          {
            title: "LLM",
            url: "#",
          },
        ],
      },
    ]
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={userData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={userData.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
