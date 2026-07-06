"use client";

import { useEffect, useState } from "react";
import { Test } from "./TestManager";

type Props = {
  loadTests: () => void;
  editingTest: Test | null;
  setEditingTest: React.Dispatch<
    React.SetStateAction<Test | null>
  >;
};

export default function AddTestForm({
  loadTests,
  editingTest,
  setEditingTest,
}: Props) {
  const emptyForm: Test = {
    testName: "",
    testDate: "",
    syllabus: "",
    totalMarks: 300,
    marksScored: 0,
    rank: 0,
    percentile: 0,
    physicsMistakes: 0,
    chemistryMistakes: 0,
    mathematicsMistakes: 0,
    sillyMistakes: 0,
    timeManagementMistakes: 0,
    notes: "",
  };

  const [form, setForm] =
    useState<Test>(emptyForm);

  useEffect(() => {
    if (editingTest) {
      setForm(editingTest);
    } else {
      setForm(emptyForm);
    }
  }, [editingTest]);

  const saveTest = async () => {
    if (
      !form.testName ||
      !form.testDate ||
      !form.syllabus
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const url = editingTest
      ? `/api/tests/${editingTest._id}`
      : "/api/tests";

    const method = editingTest
      ? "PATCH"
      : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      alert("Failed to save test.");
      return;
    }

    setForm(emptyForm);
    setEditingTest(null);
    loadTests();
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

      <h2 className="text-3xl font-bold text-white mb-8">
        {editingTest ? "✏️ Edit Test" : "🧪 Add New Test"}
      </h2>

      {/* Test Information */}

      <div className="mb-8">

        <h3 className="text-xl font-bold text-cyan-400 mb-5">
          📄 Test Information
        </h3>

        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label className="block text-slate-300 mb-2">
              Test Name
            </label>

            <input
              value={form.testName}
              onChange={(e) =>
                setForm({
                  ...form,
                  testName: e.target.value,
                })
              }
              placeholder="Allen Major Test-01"
              className="w-full bg-slate-800 p-3 rounded-lg text-white"
            />

          </div>

          <div>

            <label className="block text-slate-300 mb-2">
              Test Date
            </label>

            <input
              type="date"
              value={form.testDate}
              onChange={(e) =>
                setForm({
                  ...form,
                  testDate: e.target.value,
                })
              }
              className="w-full bg-slate-800 p-3 rounded-lg text-white"
            />

          </div>

          <div className="md:col-span-2">

            <label className="block text-slate-300 mb-2">
              Syllabus
            </label>

            <input
              value={form.syllabus}
              onChange={(e) =>
                setForm({
                  ...form,
                  syllabus: e.target.value,
                })
              }
              placeholder="Atomic Structure, Kinematics..."
              className="w-full bg-slate-800 p-3 rounded-lg text-white"
            />

          </div>

        </div>

      </div>
{/* Result */}

      <div className="mb-8">

        <h3 className="text-xl font-bold text-green-400 mb-5">
          🏆 Result
        </h3>

        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label className="block text-slate-300 mb-2">
              Marks Scored
            </label>

            <input
              type="number"
              value={form.marksScored}
              onChange={(e) =>
                setForm({
                  ...form,
                  marksScored: Number(e.target.value),
                })
              }
              placeholder="Enter Marks Scored"
              className="w-full bg-slate-800 p-3 rounded-lg text-white"
            />

          </div>

          <div>

            <label className="block text-slate-300 mb-2">
              Total Marks
            </label>

            <input
              type="number"
              value={form.totalMarks}
              onChange={(e) =>
                setForm({
                  ...form,
                  totalMarks: Number(e.target.value),
                })
              }
              placeholder="300"
              className="w-full bg-slate-800 p-3 rounded-lg text-white"
            />

          </div>

          <div>

            <label className="block text-slate-300 mb-2">
              Rank
            </label>

            <input
              type="number"
              value={form.rank}
              onChange={(e) =>
                setForm({
                  ...form,
                  rank: Number(e.target.value),
                })
              }
              placeholder="Enter Rank"
              className="w-full bg-slate-800 p-3 rounded-lg text-white"
            />

          </div>

          <div>

            <label className="block text-slate-300 mb-2">
              Percentile
            </label>

            <input
              type="number"
              step="0.01"
              value={form.percentile}
              onChange={(e) =>
                setForm({
                  ...form,
                  percentile: Number(e.target.value),
                })
              }
              placeholder="99.45"
              className="w-full bg-slate-800 p-3 rounded-lg text-white"
            />

          </div>

        </div>

      </div>{/* Mistake Analysis */}

      <div className="mb-8">

        <h3 className="text-xl font-bold text-red-400 mb-5">
          ❌ Mistake Analysis
        </h3>

        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label className="block text-slate-300 mb-2">
              ⚛️ Physics Mistakes
            </label>

            <input
              type="number"
              value={form.physicsMistakes}
              onChange={(e) =>
                setForm({
                  ...form,
                  physicsMistakes: Number(e.target.value),
                })
              }
              placeholder="0"
              className="w-full bg-slate-800 p-3 rounded-lg text-white"
            />

          </div>

          <div>

            <label className="block text-slate-300 mb-2">
              🧪 Chemistry Mistakes
            </label>

            <input
              type="number"
              value={form.chemistryMistakes}
              onChange={(e) =>
                setForm({
                  ...form,
                  chemistryMistakes: Number(e.target.value),
                })
              }
              placeholder="0"
              className="w-full bg-slate-800 p-3 rounded-lg text-white"
            />

          </div>

          <div>

            <label className="block text-slate-300 mb-2">
              📐 Mathematics Mistakes
            </label>

            <input
              type="number"
              value={form.mathematicsMistakes}
              onChange={(e) =>
                setForm({
                  ...form,
                  mathematicsMistakes: Number(e.target.value),
                })
              }
              placeholder="0"
              className="w-full bg-slate-800 p-3 rounded-lg text-white"
            />

          </div>

          <div>

            <label className="block text-slate-300 mb-2">
              ❌ Silly Mistakes
            </label>

            <input
              type="number"
              value={form.sillyMistakes}
              onChange={(e) =>
                setForm({
                  ...form,
                  sillyMistakes: Number(e.target.value),
                })
              }
              placeholder="0"
              className="w-full bg-slate-800 p-3 rounded-lg text-white"
            />

          </div>

          <div className="md:col-span-2">

            <label className="block text-slate-300 mb-2">
              ⏱️ Time Management Mistakes
            </label>

            <input
              type="number"
              value={form.timeManagementMistakes}
              onChange={(e) =>
                setForm({
                  ...form,
                  timeManagementMistakes: Number(e.target.value),
                })
              }
              placeholder="0"
              className="w-full bg-slate-800 p-3 rounded-lg text-white"
            />

          </div>

        </div>

      </div>
{/* Notes */}

      <div className="mb-8">

        <h3 className="text-xl font-bold text-yellow-400 mb-5">
          📝 Notes & Analysis
        </h3>

        <textarea
          rows={5}
          value={form.notes}
          onChange={(e) =>
            setForm({
              ...form,
              notes: e.target.value,
            })
          }
          placeholder="Example:
• Lost marks due to silly mistakes.
• Need more practice in Kinematics.
• Improve time management in Mathematics."
          className="w-full bg-slate-800 p-4 rounded-lg text-white"
        />

      </div>

      {/* Buttons */}

      <div className="flex flex-col md:flex-row gap-4">

        <button
          onClick={saveTest}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition"
        >
          {editingTest ? "✏️ Update Test" : "💾 Save Test"}
        </button>

        {editingTest && (
          <button
            onClick={() => {
              setEditingTest(null);
              setForm(emptyForm);
            }}
            className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-xl font-bold text-lg transition"
          >
            ❌ Cancel
          </button>
        )}

      </div>

    </div>
  );
}