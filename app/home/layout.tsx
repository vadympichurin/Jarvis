import SidebarComponent from "@/components/Sidebar/Sidebar";
import { headers } from "next/headers";
import { Metadata } from "next";
// import { createTranslation } from "@/lib/i18n/server";
// import Header from "@components/header/Header";

type Props = {
  children: React.ReactNode;
};

// export async function generateMetadata(): Promise<Metadata> {
//   const headersList = await headers();
//   const pathname = headersList.get("x-pathname") || "/";
//   const currentPath = pathname.split("/").filter(Boolean)[0] || "dashboard";

// //   const { t } = await createTranslation();
// //   const title = t(`navigation.${currentPath.toLowerCase()}`);

//   return {
//     title,
//   };
// }

export default async function HomeLayout({ children }: Props) {
  return (
    <div className="h-screen grid grid-dashboard-areas">
      <SidebarComponent />
      <main className="main-area overflow-y-auto">
        {/* <Header /> */}
        {children}
      </main>
    </div>
  );
}
