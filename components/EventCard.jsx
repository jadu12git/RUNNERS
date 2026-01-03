import Link from "next/link";

export default function EventCard({ event }) {
  return (
    <Link href={`/events/${event.id}`}>
      <div className="flex gap-6 p-6 rounded-2xl bg-[#12121A] border border-white/5 hover:border-purple-500/40 transition cursor-pointer">
        
        <img
          src={event.image}
          alt={event.name}
          className="w-40 h-40 rounded-xl object-cover"
        />

        <div>
          <h3 className="text-xl font-semibold mb-2">
            {event.name}
          </h3>

          <p className="text-zinc-400 mb-4">
            {event.description}
          </p>

          <div className="text-sm text-zinc-400 space-y-1">
            <div>{event.location}</div>
            <div>{event.venue}</div>
            <div>{event.date} • {event.time}</div>
            <div className="text-purple-400 font-medium">
              {event.category}
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
}
