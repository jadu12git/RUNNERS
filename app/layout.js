import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Runners — Discover Music Events",
  description: "Live music event discovery platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0B0B0F] text-white">
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
