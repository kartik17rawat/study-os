"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/dashboard", icon: "🏠" },
    { name: "Tasks", href: "/tasks", icon: "📋" },
    { name: "Calendar", href: "/calendar", icon: "📅" },
    { name: "Pomodoro", href: "/pomodoro", icon: "🍅" },
    { name: "Analytics", href: "/analytics", icon: "📊" },
    { name: "Tests", href: "/tests", icon: "🧪" },
    { name: "Settings", href: "/settings", icon: "⚙️" },
    { name: "Revision Tracker", href: "/revision", icon: "🔄" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-slate-900 border-b border-slate-800 flex items-center px-4 md:hidden z-50">
        <button
          onClick={() => setOpen(true)}
          className="text-white text-3xl"
        >
          ☰
        </button>

        <h1 className="ml-4 text-xl font-bold text-blue-400">
          📚 Study OS
        </h1>
      </header>

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64
          bg-slate-900 border-r border-slate-800
          z-50 transition-transform duration-300

          ${open ? "translate-x-0" : "-translate-x-full"}

          md:translate-x-0
        `}
      >
        <div className="flex justify-between items-center p-5 border-b border-slate-800">
          <div>
            <h1 className="text-3xl font-bold text-blue-400">
              📚 Study OS
            </h1>
            <p className="text-slate-400 text-sm">
              JEE Study Dashboard
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-3xl text-white"
          >
            ✕
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                pathname === item.href
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}