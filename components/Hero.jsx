"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Hero() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <section className="pt-32 pb-24 text-center">
      <h1 className="text-5xl font-bold mb-6">
        {user ? "Upcoming Events" : "Discover Music Events"}
      </h1>

      {!user && (
        <button
          onClick={() => router.push("/signup")}
          className="px-8 py-4 rounded-xl bg-purple-500 shadow-lg"
        >
          Join the movement
        </button>
      )}
    </section>
  );
}
