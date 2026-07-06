"use client";

import { Test } from "./TestManager";

type Props = {
  test: Test | null;
  onClose: () => void;
};

export default function TestDetails({
  test,
  onClose,
}: Props) {

  if (!test) return null;

  const percentage = (
    (test.marksScored /
      test.totalMarks) *
    100
  ).toFixed(1);

  const totalMistakes =
    test.physicsMistakes +
    test.chemistryMistakes +
    test.mathematicsMistakes +
    test.sillyMistakes +
    test.timeManagementMistakes;

  let performance = "Needs Improvement";

  if (Number(percentage) >= 90)
    performance = "Excellent";

  else if (Number(percentage) >= 75)
    performance = "Very Good";

  else if (Number(percentage) >= 60)
    performance = "Good";

  else if (Number(percentage) >= 40)
    performance = "Average";

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-slate-900 rounded-xl p-8 w-full max-w-4xl border border-slate-700">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-3xl font-bold text-white">
            🧪 Test Details
          </h2>

          <button
            onClick={onClose}
            className="text-red-400 text-2xl"
          >
            ✖
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-slate-800 rounded-lg p-4">

            <p className="text-slate-400">
              Test Name
            </p>

            <h3 className="text-xl font-bold text-white mt-2">
              {test.testName}
            </h3>

          </div>

          <div className="bg-slate-800 rounded-lg p-4">

            <p className="text-slate-400">
              Date
            </p>

            <h3 className="text-xl font-bold text-white mt-2">
              {new Date(
                test.testDate
              ).toLocaleDateString()}
            </h3>

          </div>

          <div className="bg-slate-800 rounded-lg p-4">

            <p className="text-slate-400">
              Syllabus
            </p>

            <h3 className="text-white mt-2">
              {test.syllabus}
            </h3>

          </div>

          <div className="bg-slate-800 rounded-lg p-4">

            <p className="text-slate-400">
              Score
            </p>

            <h3 className="text-3xl font-bold text-green-400 mt-2">
              {test.marksScored}/{test.totalMarks}
            </h3>

            <p className="text-white mt-2">
              {percentage}%
            </p>

          </div><div className="bg-slate-800 rounded-lg p-4">
            <p className="text-slate-400">
              Rank
            </p>

            <h3 className="text-2xl font-bold text-blue-400 mt-2">
              {test.rank || "-"}
            </h3>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-slate-400">
              Percentile
            </p>

            <h3 className="text-2xl font-bold text-yellow-400 mt-2">
              {test.percentile || "-"}%
            </h3>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-slate-400">
              Physics Mistakes
            </p>

            <h3 className="text-xl font-bold text-red-400 mt-2">
              {test.physicsMistakes}
            </h3>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-slate-400">
              Chemistry Mistakes
            </p>

            <h3 className="text-xl font-bold text-red-400 mt-2">
              {test.chemistryMistakes}
            </h3>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-slate-400">
              Mathematics Mistakes
            </p>

            <h3 className="text-xl font-bold text-red-400 mt-2">
              {test.mathematicsMistakes}
            </h3>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-slate-400">
              Silly Mistakes
            </p>

            <h3 className="text-xl font-bold text-orange-400 mt-2">
              {test.sillyMistakes}
            </h3>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-slate-400">
              Time Management Mistakes
            </p>

            <h3 className="text-xl font-bold text-purple-400 mt-2">
              {test.timeManagementMistakes}
            </h3>
          </div>

          <div className="bg-slate-800 rounded-lg p-4 md:col-span-2">
            <p className="text-slate-400">
              Notes
            </p>

            <p className="text-white mt-2 whitespace-pre-wrap">
              {test.notes || "No notes added."}
            </p>
          </div>

        </div>

        <div className="mt-6 bg-slate-800 rounded-lg p-5">

          <h3 className="text-xl font-bold text-white mb-3">
            ⭐ Performance Summary
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <p className="text-slate-400">
                Overall Rating
              </p>

              <p className="text-green-400 text-xl font-bold mt-2">
                {performance}
              </p>
            </div>

            <div>
              <p className="text-slate-400">
                Total Mistakes
              </p>

              <p className="text-red-400 text-xl font-bold mt-2">
                {totalMistakes}
              </p>
            </div>

          </div>

          <div className="mt-5">
            <p className="text-slate-400">
              🤖 AI Recommendation
            </p>

            <p className="text-white mt-2">
              {test.mathematicsMistakes >
              test.physicsMistakes &&
              test.mathematicsMistakes >
              test.chemistryMistakes
                ? "Focus on Mathematics revision and solve more timed practice sets."
                : test.physicsMistakes >
                  test.chemistryMistakes
                ? "Strengthen Physics concepts and reduce calculation mistakes."
                : "Maintain Chemistry performance and continue regular revision."}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}