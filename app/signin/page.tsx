"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import AuthForm from "@/components/AuthForm";
import SoundWaveBackground from "@/components/SoundWaveBackground";

export default function SignInPage() {
const { user, loading } = useAuth();
const router = useRouter();
const searchParams = useSearchParams();

const fromSignup = searchParams.get("from") === "signup";

useEffect(() => {
    if (!loading && user) {
    router.push("/");
    }
}, [user, loading, router]);

return (
    <>
    <SoundWaveBackground />
    <Navbar />

    <main className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md">
        {fromSignup && (
            <p className="mb-4 text-sm text-green-400 text-center">
            Account created successfully. Please sign in.
            </p>
        )}

        <AuthForm type="signin" />
        </div>
    </main>
    </>
);
}
