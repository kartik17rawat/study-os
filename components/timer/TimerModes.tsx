type Props = {
  onSelect: (minutes: number) => void;
};

export default function TimerModes({ onSelect }: Props) {
  return (
    <div className="flex justify-center gap-3 mb-6">

      <button
        onClick={() => onSelect(25)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        25 Min
      </button>

      <button
        onClick={() => onSelect(50)}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
      >
        50 Min
      </button>

      <button
        onClick={() => onSelect(90)}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
      >
        90 Min
      </button>

    </div>
  );
}