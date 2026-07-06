"use client";

import { Test } from "./TestManager";

type Props = {
  tests: Test[];
};

export default function LatestPerformance({
  tests,
}: Props) {

  if (tests.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white">
          📈 Latest Performance
        </h2>

        <p className="text-slate-400 mt-4">
          No tests available.
        </p>
      </div>
    );
  }

  const latest = tests[0];

  const previous =
    tests.length > 1
      ? tests[1]
      : null;

  const improvement = previous
    ? latest.marksScored -
      previous.marksScored
    : 0;

  const percentage = (
    (latest.marksScored /
      latest.totalMarks) *
    100
  ).toFixed(1);

  const totalMistakes =
    latest.physicsMistakes +
    latest.chemistryMistakes +
    latest.mathematicsMistakes +
    latest.sillyMistakes +
    latest.timeManagementMistakes;

  let performance = "Needs Improvement";

  if (Number(percentage) >= 90)
    performance = "Excellent";

  else if (
    Number(percentage) >= 75
  )
    performance = "Very Good";

  else if (
    Number(percentage) >= 60
  )
    performance = "Good";

  else if (
    Number(percentage) >= 40
  )
    performance = "Average";

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        📈 Latest Performance
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        <div className="bg-slate-800 rounded-lg p-5">

          <p className="text-slate-400">
            Test Name
          </p>

          <h3 className="text-xl font-bold text-white mt-2">
            {latest.testName}
          </h3>

          <p className="text-slate-400 mt-2">
            {new Date(
              latest.testDate
            ).toLocaleDateString()}
          </p>

        </div>

        <div className="bg-slate-800 rounded-lg p-5">

          <p className="text-slate-400">
            Marks
          </p>

          <h3 className="text-3xl font-bold text-green-400 mt-2">
            {latest.marksScored}/
            {latest.totalMarks}
          </h3>

          <p className="text-white mt-2">
            {percentage}%
          </p>

        </div>

        <div className="bg-slate-800 rounded-lg p-5">

          <p className="text-slate-400">
            Improvement
          </p>

          <h3
            className={`text-3xl font-bold mt-2 ${
              improvement >= 0
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {improvement >= 0
              ? "+"
              : ""}
            {improvement}
          </h3><p className="text-white mt-2">
            Compared to previous test
          </p>

        </div>

        <div className="bg-slate-800 rounded-lg p-5">

          <p className="text-slate-400">
            Rank
          </p>

          <h3 className="text-3xl font-bold text-blue-400 mt-2">
            {latest.rank || "-"}
          </h3>

        </div>

        <div className="bg-slate-800 rounded-lg p-5">

          <p className="text-slate-400">
            Percentile
          </p>

          <h3 className="text-3xl font-bold text-yellow-400 mt-2">
            {latest.percentile || "-"}%
          </h3>

        </div>

        <div className="bg-slate-800 rounded-lg p-5">

          <p className="text-slate-400">
            Total Mistakes
          </p>

          <h3 className="text-3xl font-bold text-red-400 mt-2">
            {totalMistakes}
          </h3>

        </div>

      </div>

      <div className="mt-6 bg-slate-800 rounded-lg p-5">

        <h3 className="text-xl font-bold text-white mb-4">
          ⭐ Performance Summary
        </h3>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <p className="text-slate-400">
              Performance
            </p>

            <p className="text-green-400 text-xl font-bold mt-1">
              {performance}
            </p>
          </div>

          <div>
            <p className="text-slate-400">
              AI Suggestion
            </p>

            <p className="text-white mt-1">
              {latest.mathematicsMistakes >
              latest.physicsMistakes &&
              latest.mathematicsMistakes >
              latest.chemistryMistakes
                ? "Focus on Mathematics before your next test."
                : latest.physicsMistakes >
                  latest.chemistryMistakes
                ? "Practice Physics concepts and reduce mistakes."
                : "Continue your Chemistry revision and maintain consistency."}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}