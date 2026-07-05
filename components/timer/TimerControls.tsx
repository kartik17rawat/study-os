type Props = {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
};

export default function TimerControls({
  isRunning,
  onStart,
  onPause,
  onReset,
}: Props) {
  return (
    <div className="flex justify-center gap-4 mt-6">

      {!isRunning ? (
        <button
          onClick={onStart}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
        >
          ▶ Start
        </button>
      ) : (
        <button
          onClick={onPause}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl font-semibold"
        >
          ⏸ Pause
        </button>
      )}

      <button
        onClick={onReset}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold"
      >
        🔄 Reset
      </button>

    </div>
  );
}