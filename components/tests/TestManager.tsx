"use client";

import { useEffect, useState } from "react";
import AddTestForm from "./AddTestForm";
import LatestPerformance from "./LatestPerformance";
import TestHistory from "./TestHistory";

export type Test = {
  _id?: string;
  testName: string;
  testDate: string;
  syllabus: string;
  totalMarks: number;
  marksScored: number;
  rank: number;
  percentile: number;
  physicsMistakes: number;
  chemistryMistakes: number;
  mathematicsMistakes: number;
  sillyMistakes: number;
  timeManagementMistakes: number;
  notes: string;
};

export default function TestManager() {
  const [tests, setTests] = useState<Test[]>([]);
  const [editingTest, setEditingTest] =
    useState<Test | null>(null);

  const loadTests = async () => {
    try {
      const res = await fetch("/api/tests");

      if (!res.ok) return;

      const data = await res.json();

      setTests(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadTests();
  }, []);

  return (
    <div className="space-y-8">

      <AddTestForm
        loadTests={loadTests}
        editingTest={editingTest}
        setEditingTest={setEditingTest}
      />

      <LatestPerformance tests={tests} />

      <TestHistory
        tests={tests}
        loadTests={loadTests}
        onEdit={setEditingTest}
      />

    </div>
  );
}