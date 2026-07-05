"use client";

import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen bg-slate-950">

      <Sidebar />

      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>

    </div>
  );
}