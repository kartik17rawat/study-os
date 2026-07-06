import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 flex">
      <Sidebar />

      <main className="flex-1 md:ml-72 pt-16 md:pt-0 p-4">
        {children}
      </main>
    </div>
  );
}