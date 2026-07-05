"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Profile = {
  name: string;
  email: string;
  dailyGoal: number;
  streak: number;
  totalTasks: number;
  completedTasks: number;
};

export default function ProfileCard() {
  const router = useRouter();

  const [profile, setProfile] = useState<Profile>({
    name: "",
    email: "",
    dailyGoal: 8,
    streak: 0,
    totalTasks: 0,
    completedTasks: 0,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/profile");
        const data = await res.json();
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8">

      <div className="flex items-center gap-6">

        <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-4xl font-bold text-white">
          {profile.name ? profile.name.charAt(0).toUpperCase() : "U"}
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white">
            {profile.name}
          </h1>

          <p className="text-slate-400">
            {profile.email}
          </p>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div className="bg-slate-800 rounded-xl p-5">
          <h2 className="text-white text-lg font-semibold">
            🎯 Daily Goal
          </h2>

          <p className="text-3xl font-bold text-green-400 mt-2">
            {profile.dailyGoal} Hours
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <h2 className="text-white text-lg font-semibold">
            📋 Total Tasks
          </h2>

          <p className="text-3xl font-bold text-blue-400 mt-2">
            {profile.totalTasks}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <h2 className="text-white text-lg font-semibold">
            ✅ Completed Tasks
          </h2>

          <p className="text-3xl font-bold text-green-400 mt-2">
            {profile.completedTasks}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <h2 className="text-white text-lg font-semibold">
            🔥 Study Streak
          </h2>

          <p className="text-3xl font-bold text-orange-400 mt-2">
            {profile.streak} Days
          </p>
        </div>

      </div>

      <button
        onClick={handleLogout}
        className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold transition"
      >
        🚪 Logout
      </button>

    </div>
  );
}