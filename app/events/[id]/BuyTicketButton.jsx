"use client";

export default function BuyTicketButton({ eventId, price }) {
  async function buyTicket() {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId,
        price,
        quantity: 1,
      }),
    });

    const { url } = await res.json();
    window.location.href = url;
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
