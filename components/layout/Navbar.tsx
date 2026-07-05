export default function Navbar() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="bg-slate-800 text-white px-4 py-2 rounded-lg outline-none"
        />

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          K
        </div>
      </div>
    </header>
  );
}