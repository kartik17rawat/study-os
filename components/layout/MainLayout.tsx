"use client";

import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-slate-950">
      <Sidebar />

      <main className="pt-16 md:pt-0 md:ml-64 min-w-0 overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 py-6">
          {children}
        </div>
      </main>
    </div>
  );
}