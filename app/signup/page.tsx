"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import AuthForm from "@/components/AuthForm";

export default function SignUpPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-6">
        <AuthForm type="signup" />
      </main>
    </>
  );
}
