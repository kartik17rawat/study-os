"use client";

import { useEffect, useState } from "react";

type Revision = {
  _id: string;
  subject: string;
  chapter: string;
  revised: boolean;
};

export default function RevisionManager() {
  const [revisions, setRevisions] = useState<Revision[]>([]);
  const [subject, setSubject] = useState("Chemistry");
  const [chapter, setChapter] = useState("");

  const loadRevisions = async () => {
    const res = await fetch("/api/revision");
    const data = await res.json();
    setRevisions(data);
  };

  useEffect(() => {
    loadRevisions();
  }, []);

  const addRevision = async () => {
    if (!chapter.trim()) return;

    const res = await fetch("/api/revision", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject,
        chapter,
      }),
    });

    if (!res.ok) return;

    setChapter("");
    loadRevisions();
  };

  const toggleRevision = async (
    id: string,
    revised: boolean
  ) => {
    await fetch(`/api/revision/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        revised: !revised,
      }),
    });

    loadRevisions();
  };

  const deleteRevision = async (id: string) => {
    await fetch(`/api/revision/${id}`, {
      method: "DELETE",
    });

    loadRevisions();
  };

  const subjects = ["Chemistry", "Physics", "Mathematics"];

  return (
    <div className="space-y-8">
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-4">
          ➕ Add Chapter
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-slate-800 text-white p-3 rounded-lg"
          >
            {subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <input
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
            placeholder="Chapter Name"
            className="flex-1 bg-slate-800 text-white p-3 rounded-lg"
          />

          <button
            onClick={addRevision}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white"
          >
            Add
          </button>
        </div>
      </div>

      {subjects.map((sub) => {
        const subjectChapters = revisions.filter(
          (r) => r.subject === sub
        );

        const revisedCount = subjectChapters.filter(
          (r) => r.revised
        ).length;

        const progress =
          subjectChapters.length === 0
            ? 0
            : Math.round(
                (revisedCount / subjectChapters.length) * 100
              );

        return (
          <div
            key={sub}
            className="bg-slate-900 rounded-xl p-6 border border-slate-800"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-bold text-blue-400">
                {sub}
              </h2>

              <span className="text-green-400 font-bold">
                {progress}%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-700 rounded-full mb-5">
              <div
                className="h-3 bg-green-500 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="space-y-3">
              {subjectChapters.map((r) => (
                <div
                  key={r._id}
                  className="flex justify-between items-center bg-slate-800 rounded-lg p-3"
                >
                  <label className="flex items-center gap-3 text-white">
                    <input
                      type="checkbox"
                      checked={r.revised}
                      onChange={() =>
                        toggleRevision(r._id, r.revised)
                      }
                    />
                    {r.chapter}
                  </label>

                  <button
                    onClick={() => deleteRevision(r._id)}
                    className="text-red-500 hover:text-red-400"
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}