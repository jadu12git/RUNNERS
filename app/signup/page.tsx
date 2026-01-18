// app/signup/page.tsx
import { Suspense } from "react";
import SignUpContent from "./SignUpContent";

export const dynamic = "force-dynamic";

export default function SignUpPage() {
  return (
    <Suspense fallback={null}>
      <SignUpContent />
    </Suspense>
  );
}
