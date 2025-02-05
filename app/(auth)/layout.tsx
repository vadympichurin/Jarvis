import LoginInfoPanel from "@/components/LoginInfo/LoginInfo";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen p-4 grid grid-cols-4 overflow-y-scroll">
      <LoginInfoPanel />
      <div className="px-4 col-span-2">{children}</div>
    </main>
  );
}
