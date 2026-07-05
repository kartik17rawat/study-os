"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function SettingsCard() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState(8);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/settings");
        const data = await res.json();

        setName(data.name);
        setGoal(data.dailyGoal);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  const handleSave = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/settings", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          dailyGoal: goal,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
       toast.error(data.message);
        setLoading(false);
        return;
      }

      toast.success("Settings updated successfully!");
    } catch (error) {
      console.error(error);
     toast.error("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8">

      <h1 className="text-3xl font-bold text-white mb-8">
        ⚙️ Settings
      </h1>

      <div className="space-y-6">

        <div>
          <label className="block text-white mb-2">
            Full Name
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-800 text-white p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-white mb-2">
            Daily Study Goal (Hours)
          </label>

          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
            className="w-full bg-slate-800 text-white p-3 rounded-lg"
          />
        </div>

        <button
          onClick={handleSave}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold disabled:opacity-50"
        >
          {loading ? "Saving..." : "💾 Save Settings"}
        </button>

      </div>
    </div>
  );
}