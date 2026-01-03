import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";
import BuyTicketButton from "./BuyTicketButton";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EventPage({ params }: PageProps) {
  // ✅ UNWRAP PARAMS
  const { id } = await params;

  const { data: event, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !event) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-80 object-cover rounded-2xl mb-8"
      />

      <h1 className="text-4xl font-bold mb-4">
        {event.name}
      </h1>

      <p className="text-zinc-400 mb-6">
        {event.description}
      </p>

      <div className="space-y-2 text-zinc-300">
        <p><span className="text-zinc-500">Venue:</span> {event.venue}</p>
        <p><span className="text-zinc-500">Date:</span> {event.date}</p>
        <p><span className="text-zinc-500">Time:</span> {event.time}</p>
        <p className="text-purple-400 font-medium">{event.category}</p>
      </div>

      <BuyTicketButton eventId={event.id} price={event.price} />
    </main>
  );
}
