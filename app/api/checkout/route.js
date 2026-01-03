import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { eventId, price, quantity } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Event Ticket",
          },
          unit_amount: price * 100,
        },
        quantity,
      },
    ],

    metadata: {
        event_id: eventId,
        user_id: user.id,
        quantity: String(quantity),
      },
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000",
  });

  return Response.json({ url: session.url });
}
