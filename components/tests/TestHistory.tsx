"use client";

import { useMemo, useState } from "react";
import { Test } from "./TestManager";

type Props = {
  tests: Test[];
  loadTests: () => void;
  onEdit: (test: Test) => void;
};

export default function TestHistory({
  tests,
  loadTests,
  onEdit,
}: Props) {
  const [search, setSearch] = useState("");

  const filteredTests = useMemo(() => {
    return tests.filter((test) => {
      const q = search.toLowerCase();

      return (
        test.testName.toLowerCase().includes(q) ||
        test.syllabus.toLowerCase().includes(q)
      );
    });
  }, [tests, search]);

  const bestScore =
    tests.length === 0
      ? 0
      : Math.max(
          ...tests.map((t) => t.marksScored)
        );

  const deleteTest = async (id?: string) => {
    if (!id) return;

    if (!confirm("Delete this test?")) return;

    const res = await fetch(`/api/tests/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      alert("Failed to delete.");
      return;
    }

    loadTests();
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <h2 className="text-2xl font-bold text-white">
          📋 Test History
        </h2>

        <input
          placeholder="Search Test..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-800 text-white rounded-lg p-3 w-full md:w-72"
        />

      </div>

      {filteredTests.length === 0 ? (
        <p className="text-slate-400">
          No Tests Found.
        </p>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-700">

                <th className="text-left py-3 text-slate-300">
                  Date
                </th>

                <th className="text-left text-slate-300">
                  Test
                </th>

                <th className="text-center text-slate-300">
                  Score
                </th>

                <th className="text-center text-slate-300">
                  Rank
                </th>

                <th className="text-center text-slate-300">
                  %
                </th>

                <th className="text-center text-slate-300">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>{filteredTests.map((test) => {
                const percentage = (
                  (test.marksScored / test.totalMarks) *
                  100
                ).toFixed(1);

                const isBest =
                  test.marksScored === bestScore;

                return (
                  <tr
                    key={test._id}
                    className={`border-b border-slate-800 hover:bg-slate-800 transition ${
                      isBest
                        ? "bg-green-900/20"
                        : ""
                    }`}
                  >
                    <td className="py-4 text-white">
                      {new Date(
                        test.testDate
                      ).toLocaleDateString()}
                    </td>

                    <td>
                      <div className="flex flex-col">
                        <span className="font-semibold text-white">
                          {test.testName}

                          {isBest && (
                            <span className="ml-2 text-green-400">
                              🏆
                            </span>
                          )}
                        </span>

                        <span className="text-sm text-slate-400">
                          {test.syllabus}
                        </span>
                      </div>
                    </td>

                    <td className="text-center">
                      <span
                        className={`font-bold ${
                          isBest
                            ? "text-green-400"
                            : "text-blue-400"
                        }`}
                      >
                        {test.marksScored}/
                        {test.totalMarks}
                      </span>
                    </td>

                    <td className="text-center text-white">
                      {test.rank || "-"}
                    </td>

                    <td className="text-center text-yellow-400">
                      {percentage}%
                    </td>

                    <td>
                      <div className="flex justify-center gap-2">

                        <button
                          onClick={() =>
                            alert(
`🧪 ${test.testName}

📅 ${new Date(
  test.testDate
).toLocaleDateString()}

📚 ${test.syllabus}

🏆 ${test.marksScored}/${test.totalMarks}

🥇 Rank: ${test.rank}

📊 Percentile: ${test.percentile}

Physics Mistakes: ${test.physicsMistakes}

Chemistry Mistakes: ${test.chemistryMistakes}

Mathematics Mistakes: ${test.mathematicsMistakes}

Silly Mistakes: ${test.sillyMistakes}

Time Management: ${test.timeManagementMistakes}

📝 Notes:
${test.notes}`
                            )
                          }
                          className="bg-sky-600 hover:bg-sky-700 px-3 py-2 rounded-lg text-white"
                        >
                          👁
                        </button>

                        <button
                          onClick={() =>
                            onEdit(test)
                          }
                          className="bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded-lg text-white"
                        >
                          ✏️
                        </button>

                        <button
                          onClick={() =>
                            deleteTest(test._id)
                          }
                          className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-white"
                        >
                          🗑️
                        </button>

                      </div>
                    </td>

                  </tr>
                );
              })}</tbody>

          </table>

        </div>

      )}

      <div className="mt-6 grid md:grid-cols-4 gap-4">

        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-slate-400 text-sm">
            Total Tests
          </p>

          <h3 className="text-2xl font-bold text-white mt-2">
            {tests.length}
          </h3>
        </div>

        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-slate-400 text-sm">
            Best Score
          </p>

          <h3 className="text-2xl font-bold text-green-400 mt-2">
            {bestScore}
          </h3>
        </div>

        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-slate-400 text-sm">
            Average Score
          </p>

          <h3 className="text-2xl font-bold text-blue-400 mt-2">
            {tests.length
              ? Math.round(
                  tests.reduce(
                    (sum, test) =>
                      sum + test.marksScored,
                    0
                  ) / tests.length
                )
              : 0}
          </h3>
        </div>

        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-slate-400 text-sm">
            Highest Percentile
          </p>

          <h3 className="text-2xl font-bold text-yellow-400 mt-2">
            {tests.length
              ? Math.max(
                  ...tests.map(
                    (t) => t.percentile
                  )
                )
              : 0}
            %
          </h3>
        </div>

      </div>

    </div>
  );
}