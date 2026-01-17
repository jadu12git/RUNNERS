export const dynamic = "force-dynamic";

import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// IMPORTANT: service role key (server only)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature error:", err.message);
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    
    const eventId = session.metadata.event_id;
    const userId = session.metadata.user_id;
    const quantity = Number(session.metadata.quantity);
    const totalPrice = session.amount_total / 100;
    
    //temp!!!
    console.log("Webhook type:", event.type);
    console.log("Session metadata:", session.metadata);


    // 1️⃣ Create order
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        user_id: userId,
        event_id: eventId,
        quantity,
        total_price: totalPrice,
        status: "paid",
      })
      .select()
      .single();

    if (orderError) {
      console.error("Order creation failed:", orderError);
      return new Response("Order error", { status: 500 });
    }

    //temp!!!
    console.log("Order created:", order);


    // 2️⃣ Create tickets
    const tickets = Array.from({ length: quantity }).map(() => ({
      order_id: order.id,
      user_id: userId,
      event_id: eventId,
      ticket_code: crypto.randomUUID(),
    }));

    const { error: ticketError } = await supabase
      .from("tickets")
      .insert(tickets);

    if (ticketError) {
      console.error("Ticket creation failed:", ticketError);
      return new Response("Ticket error", { status: 500 });
    }

    //temp!!!
    console.log("Tickets inserted:", tickets.length);

    // 3️⃣ Decrement inventory
    await supabase.rpc("decrement_tickets", {
      event_id_input: eventId,
      qty: quantity,
    });
  }

  return new Response("ok", { status: 200 });
}
