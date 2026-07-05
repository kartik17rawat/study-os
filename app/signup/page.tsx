"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json(); console.log(data);

      if (!res.ok) {
        toast.error(data.message);
        setLoading(false);
        return;
      }

     toast.success("Account created successfully!");

      router.push("/login");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 p-6">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md bg-slate-900 rounded-2xl p-8 border border-slate-800"
      >
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-3 rounded-lg bg-slate-800 text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        <p className="text-center text-slate-400 mt-6">
          Already have an account?
        </p>

        <button
          type="button"
          onClick={() => router.push("/login")}
          className="w-full mt-3 border border-slate-700 text-white py-3 rounded-lg hover:bg-slate-800"
        >
          Login
        </button>
      </form>
    </main>
  );
}