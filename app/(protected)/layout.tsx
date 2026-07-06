import Sidebar from "@/components/Sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="md:ml-72 pt-16 md:pt-0 min-h-screen">
        {children}
      </main>
    </div>
  );
}