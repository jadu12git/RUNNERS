"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SoundWaveBackground from "@/components/SoundWaveBackground";
import AuthForm from "@/components/AuthForm";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";

export default function SignInPage() {
    const searchParams = useSearchParams();
    const fromSignup = searchParams.get("from") === "signup";
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
    if (user) router.push("/");
    }, [user]);

    return (
    <>
        <SoundWaveBackground />  
        <Navbar />
        <main className="min-h-screen flex items-center justify-center px-6">
        {fromSignup && (
            <p className="mb-4 text-sm text-green-400 text-center">
                Account created successfully. Please sign in.
            </p>
        )}

        <AuthForm type="signin" />
    </main>
    </>
);
}
