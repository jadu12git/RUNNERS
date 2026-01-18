"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import AuthForm from "@/components/AuthForm";

export const dynamic = "force-dynamic";

export default function SignUpPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [user, loading, router]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-6">
        <AuthForm type="signup" />
      </main>
    </>
  );
}
