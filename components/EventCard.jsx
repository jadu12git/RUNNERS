"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function EventCard({ event }) {
  const { user } = useAuth();
  const router = useRouter();

  const handleClick = () => {
    if (!user) {
      router.push("/signup");
    } else {
      router.push(`/events/${event.id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`rounded-xl bg-zinc-900 p-4 transition cursor-pointer
        ${user ? "hover:scale-[1.02]" : "opacity-70 hover:opacity-90"}`}
    >
      <img
        src={event.image}
        alt={event.name}
        className="h-40 w-full object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold">{event.name}</h3>
      <p className="text-zinc-400">{event.venue}</p>
    </div>
  );
}
