"use client";

import { Test } from "./TestManager";
import LatestPerformance from "./LatestPerformance";
import TestGraph from "./TestGraph";

type Props = {
  tests: Test[];
};

export default function TestDashboard({
  tests,
}: Props) {

  const highest =
    tests.length
      ? Math.max(
          ...tests.map(
            (t) => t.marksScored
          )
        )
      : 0;

  const lowest =
    tests.length
      ? Math.min(
          ...tests.map(
            (t) => t.marksScored
          )
        )
      : 0;

  const average =
    tests.length
      ? Math.round(
          tests.reduce(
            (sum, t) =>
              sum + t.marksScored,
            0
          ) / tests.length
        )
      : 0;

  return (

    <div className="space-y-8">

      <LatestPerformance
        tests={tests}
      />

      <div className="grid md:grid-cols-4 gap-5">

        <div className="bg-slate-900 rounded-xl border border-slate-800 p-5">

          <p className="text-slate-400">
            Highest Score
          </p>

          <h2 className="text-3xl font-bold text-green-400 mt-3">
            {highest}
          </h2>

        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-800 p-5">

          <p className="text-slate-400">
            Lowest Score
          </p>

          <h2 className="text-3xl font-bold text-red-400 mt-3">
            {lowest}
          </h2>

        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-800 p-5">

          <p className="text-slate-400">
            Average Score
          </p>

          <h2 className="text-3xl font-bold text-blue-400 mt-3">
            {average}
          </h2>

        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-800 p-5">

          <p className="text-slate-400">
            Tests Given
          </p>

          <h2 className="text-3xl font-bold text-yellow-400 mt-3">
            {tests.length}
          </h2>

        </div>

      </div>

      <TestGraph
        tests={tests}
      /><div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

        <h2 className="text-2xl font-bold text-white mb-6">
          🤖 AI Coach
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-slate-800 rounded-lg p-5">

            <h3 className="text-xl font-bold text-green-400">
              📚 Strongest Subject
            </h3>

            <p className="text-white mt-3">
              {tests.length === 0
                ? "-"
                : (() => {
                    const latest = tests[0];

                    const values = [
                      {
                        name: "Physics",
                        value: latest.physicsMistakes,
                      },
                      {
                        name: "Chemistry",
                        value: latest.chemistryMistakes,
                      },
                      {
                        name: "Mathematics",
                        value: latest.mathematicsMistakes,
                      },
                    ];

                    values.sort(
                      (a, b) => a.value - b.value
                    );

                    return values[0].name;
                  })()}
            </p>

          </div>

          <div className="bg-slate-800 rounded-lg p-5">

            <h3 className="text-xl font-bold text-red-400">
              ⚠ Weakest Subject
            </h3>

            <p className="text-white mt-3">
              {tests.length === 0
                ? "-"
                : (() => {
                    const latest = tests[0];

                    const values = [
                      {
                        name: "Physics",
                        value: latest.physicsMistakes,
                      },
                      {
                        name: "Chemistry",
                        value: latest.chemistryMistakes,
                      },
                      {
                        name: "Mathematics",
                        value: latest.mathematicsMistakes,
                      },
                    ];

                    values.sort(
                      (a, b) => b.value - a.value
                    );

                    return values[0].name;
                  })()}
            </p>

          </div>

        </div>

        <div className="mt-6 bg-slate-800 rounded-lg p-5">

          <h3 className="text-xl font-bold text-blue-400 mb-4">
            🎯 Recommendation
          </h3>

          <ul className="list-disc pl-6 text-white space-y-2">

            <li>
              Revise the weakest subject before your next Allen test.
            </li>

            <li>
              Reduce silly mistakes by reviewing incorrect questions.
            </li>

            <li>
              Solve one timed paper every week.
            </li>

            <li>
              Focus on accuracy first, then speed.
            </li>

            <li>
              Update your Revision Tracker after every test.
            </li>

          </ul>

        </div>

      </div>

    </div>
  );
}