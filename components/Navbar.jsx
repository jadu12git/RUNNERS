"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const { user, signOut } = useAuth();
    const router = useRouter();
    return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Left */}
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-500 shadow-lg shadow-purple-500/40" />
            <span className="font-semibold text-lg">Runners</span>
        </div>

          {/* Center */}
        <button className="text-zinc-400 hover:text-white transition">
            Events
        </button>

          {/* Right */}
        <div className="flex gap-4 items-center">
        {user ? (
            <>
            <span className="text-zinc-400 text-sm">
                {user.email}
            </span>
            <button
                onClick={() => {
                signOut();
                router.push("/");
                }}
                className="text-zinc-400 hover:text-white"
            >
                Sign out
            </button>
            </>
        ) : (
            <>
            <Link href="/signin" className="text-zinc-400 hover:text-white">
                Sign in
            </Link>
            <Link
                href="/signup"
                className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-400 shadow-lg shadow-purple-500/40"
            >
                Join now
            </Link>
            </>
        )}
        </div>


        </div>
    </nav>
    );
}
