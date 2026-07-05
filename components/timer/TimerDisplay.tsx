type Props = {
  minutes: number;
  seconds: number;
};

export default function TimerDisplay({
  minutes,
  seconds,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

      <h2 className="text-2xl font-bold text-white mb-6">
        🍅 Pomodoro Timer
      </h2>

      <div className="text-6xl font-bold text-blue-400 tracking-wider">
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </div>

    </div>
  );
}