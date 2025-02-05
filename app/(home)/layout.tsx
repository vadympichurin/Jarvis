import SidebarComponent from "@/components/Sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default async function HomeLayout({ children }: Props) {
  return (
    <div className="h-screen grid grid-dashboard-areas">
      <SidebarComponent />
      <main className="main-area overflow-y-auto">{children}</main>
    </div>
  );
}
