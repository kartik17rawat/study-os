"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: "🏠", title: "Dashboard", href: "/dashboard" },
    { icon: "📋", title: "Tasks", href: "/tasks" },
    { icon: "📅", title: "Calendar", href: "/calendar" },
    { icon: "🍅", title: "Pomodoro", href: "/pomodoro" },
    { icon: "📊", title: "Analytics", href: "/analytics" },
    { icon: "🧪", title: "Tests", href: "/tests" },
    { icon: "⚙️", title: "Settings", href: "/settings" },
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 flex flex-col">

      <div className="p-6 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-blue-400">
          📚 Study OS
        </h1>

        <p className="text-slate-400 mt-2 text-sm">
          JEE Study Dashboard
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
              pathname === item.href
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>

      <div className="border-t border-slate-800 p-5">
        <div className="rounded-xl bg-slate-800 p-4">
          <p className="text-sm text-slate-400">
            Daily Goal
          </p>

          <p className="text-2xl font-bold text-green-400 mt-2">
            8 Hours
          </p>
        </div>
      </div>

    </aside>
  );
}