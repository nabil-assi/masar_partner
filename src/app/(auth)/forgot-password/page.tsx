"use client";
import { useState } from "react";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="bg-[#0F172A] min-h-screen">
      <ForgotPasswordForm onClose={() => setIsOpen(false)} />
    </div>
  );
}