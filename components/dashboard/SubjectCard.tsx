type SubjectCardProps = {
  subject: string;
  chapter: string;
  progress: number;
};

export default function SubjectCard({
  subject,
  chapter,
  progress,
}: SubjectCardProps) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white">
        📘 {subject}
      </h2>

      <p className="text-slate-400 mt-2">
        {chapter}
      </p>

      <div className="w-full h-3 bg-slate-700 rounded-full mt-4">
        <div
          className="bg-green-500 h-3 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-green-400 mt-3">
        {progress}% Completed
      </p>
    </div>
  );
}