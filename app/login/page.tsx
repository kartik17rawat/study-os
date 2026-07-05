"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
       toast.error(data.message);
        setLoading(false);
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Welcome back!");

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 p-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-slate-900 rounded-2xl p-8 border border-slate-800"
      >
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-lg bg-slate-800 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-lg bg-slate-800 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-slate-400 mt-6">
          Don't have an account?
        </p>

        <button
          type="button"
          onClick={() => router.push("/signup")}
          className="w-full mt-3 border border-slate-700 text-white py-3 rounded-lg hover:bg-slate-800"
        >
          Create Account
        </button>
      </form>
    </main>
  );
}