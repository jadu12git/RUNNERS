export default function SuccessPage() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold mb-4 text-purple-400">
          Payment Successful 🎉
        </h1>
        <p className="text-zinc-400 mb-6">
          Your ticket purchase was completed successfully.
        </p>
  
        <a
          href="/tickets"
          className="px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 transition"
        >
          View My Tickets
        </a>
      </main>
    );
  }
  