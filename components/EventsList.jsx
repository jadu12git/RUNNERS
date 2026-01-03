"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import FilterBar from "./FilterBar";

export default function EventsList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: true });

      if (!error) setEvents(data);
      setLoading(false);
    }

    fetchEvents();
  }, []);

  if (loading) {
    return <p className="text-zinc-400 px-6">Loading events...</p>;
  }

  return (
    <section className="max-w-6xl mx-auto px-6 pb-32">
      <div className="space-y-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}