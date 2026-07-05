export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h1 className="text-4xl font-bold text-blue-600">
            📚 Study OS
          </h1>

          <p className="text-gray-600 mt-2">
            Welcome back, Kartik 👋
          </p>

          <p className="text-gray-500">
            Let's make today productive.
          </p>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Today's Progress
          </h2>

          <div className="w-full bg-gray-300 rounded-full h-5">
            <div className="bg-green-500 h-5 rounded-full w-0"></div>
          </div>

          <p className="mt-2 text-gray-600">
            0% Completed
          </p>
        </div>

        {/* Subjects */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow-md p-5">
            <h2 className="text-xl font-bold mb-4">
              🧪 Chemistry
            </h2>

            <ul className="space-y-2">
              <li>☐ Class Notes</li>
              <li>☐ Homework</li>
              <li>☐ Exercise</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5">
            <h2 className="text-xl font-bold mb-4">
              📐 Mathematics
            </h2>

            <ul className="space-y-2">
              <li>☐ Class Notes</li>
              <li>☐ Homework</li>
              <li>☐ Exercise</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5">
            <h2 className="text-xl font-bold mb-4">
              ⚡ Physics
            </h2>

            <ul className="space-y-2">
              <li>☐ Class Notes</li>
              <li>☐ Homework</li>
              <li>☐ Exercise</li>
            </ul>
          </div>

        </div>

      </div>
    </main>
  );
}