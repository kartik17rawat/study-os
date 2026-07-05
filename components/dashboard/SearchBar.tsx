"use client";

import React from "react";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search tasks..."
        className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-white"
      />
    </div>
  );
}