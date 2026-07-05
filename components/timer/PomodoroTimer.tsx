"use client";

import { useEffect, useState } from "react";

import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import TimerModes from "./TimerModes";

export default function PomodoroTimer() {
  const [selectedMinutes, setSelectedMinutes] = useState(25);

  const [timeLeft, setTimeLeft] = useState(25 * 60);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);

          alert("🎉 Pomodoro Completed!");

          return selectedMinutes * 60;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, selectedMinutes]);

  const handleModeChange = (minutes: number) => {
    setSelectedMinutes(minutes);
    setTimeLeft(minutes * 60);
    setIsRunning(false);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(selectedMinutes * 60);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">

      <TimerModes onSelect={handleModeChange} />

      <TimerDisplay
        minutes={minutes}
        seconds={seconds}
      />

      <TimerControls
        isRunning={isRunning}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
      />

    </div>
  );
}