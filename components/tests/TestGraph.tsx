"use client";

import { Test } from "./TestManager";

type Props = {
  tests: Test[];
};

export default function TestGraph({
  tests,
}: Props) {

  if (tests.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white">
          📈 Marks Trend
        </h2>

        <p className="text-slate-400 mt-4">
          No tests available.
        </p>
      </div>
    );
  }

  const maxMarks = Math.max(
    ...tests.map((t) => t.totalMarks)
  );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        📈 Marks Trend
      </h2>

      <div className="space-y-5">

        {tests
          .slice()
          .reverse()
          .map((test) => {

            const percentage =
              (test.marksScored /
                maxMarks) *
              100;

            return (
              <div
                key={test._id}
              >
                <div className="flex justify-between text-white mb-2">

                  <span>
                    {test.testName}
                  </span>

                  <span>
                    {test.marksScored}/
                    {test.totalMarks}
                  </span>

                </div>

                <div className="w-full bg-slate-700 rounded-full h-5">

                  <div
                    className="bg-blue-500 h-5 rounded-full transition-all duration-700"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />

                </div>

              </div>
            );
          })}</div>

      <div className="mt-8 grid md:grid-cols-3 gap-4">

        <div className="bg-slate-800 rounded-lg p-5">
          <p className="text-slate-400">
            Best Score
          </p>

          <h3 className="text-3xl font-bold text-green-400 mt-2">
            {Math.max(...tests.map((t) => t.marksScored))}
          </h3>
        </div>

        <div className="bg-slate-800 rounded-lg p-5">
          <p className="text-slate-400">
            Average Score
          </p>

          <h3 className="text-3xl font-bold text-blue-400 mt-2">
            {Math.round(
              tests.reduce(
                (sum, t) => sum + t.marksScored,
                0
              ) / tests.length
            )}
          </h3>
        </div>

        <div className="bg-slate-800 rounded-lg p-5">
          <p className="text-slate-400">
            Total Tests
          </p>

          <h3 className="text-3xl font-bold text-yellow-400 mt-2">
            {tests.length}
          </h3>
        </div>

      </div>

      <div className="mt-8 bg-slate-800 rounded-lg p-5">

        <h3 className="text-xl font-bold text-white mb-4">
          📊 Performance Summary
        </h3>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <p className="text-slate-400">
              Latest Score
            </p>

            <p className="text-white text-xl font-bold mt-2">
              {tests[0].marksScored}/{tests[0].totalMarks}
            </p>
          </div>

          <div>
            <p className="text-slate-400">
              Improvement
            </p>

            <p className="text-green-400 text-xl font-bold mt-2">
              {tests.length > 1
                ? `${tests[0].marksScored - tests[1].marksScored >= 0 ? "+" : ""}${
                    tests[0].marksScored - tests[1].marksScored
                  } Marks`
                : "First Test"}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}