import { DashboardContainer } from "@/components/dashboard-container"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <DashboardContainer>{children}</DashboardContainer>
}