export default function AnalyticsCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        📊 Weekly Analytics
      </h2>

      <div className="space-y-4">

        <div>
          <div className="flex justify-between text-white mb-1">
            <span>Chemistry</span>
            <span>80%</span>
          </div>

          <div className="w-full bg-slate-700 rounded-full h-3">
            <div className="bg-blue-500 h-3 rounded-full w-4/5"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-white mb-1">
            <span>Physics</span>
            <span>65%</span>
          </div>

          <div className="w-full bg-slate-700 rounded-full h-3">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: "65%" }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-white mb-1">
            <span>Mathematics</span>
            <span>45%</span>
          </div>

          <div className="w-full bg-slate-700 rounded-full h-3">
            <div className="bg-orange-500 h-3 rounded-full" style={{ width: "45%" }}></div>
          </div>
        </div>

      </div>
    </div>
  );
}