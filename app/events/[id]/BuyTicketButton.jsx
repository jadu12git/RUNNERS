"use client";

import { supabase } from "@/lib/supabaseClient";

export default function BuyTicketButton({ eventId, price }) {
  async function buyTicket() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      alert("Please sign in to continue");
      return;
    }

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({
        eventId,
        price,
        quantity: 1,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(text);
      alert("Checkout failed");
      return;
    }

    const data = await res.json();
    window.location.href = data.url;
  }

  return (
    <button
      onClick={buyTicket}
      className="mt-8 px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 transition shadow-lg shadow-purple-500/40"
    >
      Buy Ticket
    </button>
  );
}
