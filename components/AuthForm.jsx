"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useSearchParams } from "next/navigation";

export default function AuthForm({ type }) {
    const searchParams = useSearchParams();
    const fromSignup = searchParams.get("from") === "signup";
    
    const isSignUp = type === "signup";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();
    const { signIn, signUp } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
        if (isSignUp) {
            await signUp(email, password);
            router.push("/signin?from=signup");
        } else {
            await signIn(email, password);
            router.push("/");
        }
        } catch (err) {
        alert(err.message);
        }
    }
    
    return (
        <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#12121A] border border-white/10 rounded-2xl p-8 space-y-6"
        >
        <h1 className="text-3xl font-bold text-center">
            {isSignUp ? "Join Runners" : "Welcome back"}
        </h1>

        <p className="text-center text-zinc-400">
            {isSignUp
            ? "Create an account to discover live music events."
            : "Sign in to continue discovering events."}
        </p>

        <div>
            <label className="block text-sm mb-1">Email</label>
            <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-purple-500"
            />
        </div>

        <div>
            <label className="block text-sm mb-1">Password</label>
            <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-purple-500"
            />
        </div>

        <button
            type="submit"
            className="w-full py-3 rounded-xl bg-purple-500 hover:bg-purple-400 transition shadow-lg shadow-purple-500/40"
        >
            {isSignUp ? "Create account" : "Sign in"}
        </button>

        <div className="text-center text-sm text-zinc-400">
            {isSignUp ? (
                <>
                Have an account already?{" "}
                <Link
                    href="/signin"
                    className="text-purple-400 hover:underline"
                >
                    Sign in
                </Link>
                </>
                ) : (
                <>
                Create an account if you don&apos;t have one already.{" "}
                <Link
                    href="/signup"
                    className="text-purple-400 hover:underline"
                >
                    Sign up
                </Link>
                </>
            )}
            </div>

        </form>
    );
    }
