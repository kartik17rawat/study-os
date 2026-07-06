import TestManager from "@/components/tests/TestManager";

export default function TestsPage() {
  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        🧪 Test Performance Tracker
      </h1>

      <TestManager />
    </main>
  );
}