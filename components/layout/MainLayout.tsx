"use client";

import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-slate-950">
      <Sidebar />

      <main className="pt-20 md:pt-4 md:ml-64 p-4">
        {children}
      </main>
    </div>
  );
}