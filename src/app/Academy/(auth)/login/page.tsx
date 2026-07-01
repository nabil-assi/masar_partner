"use client";
import { useState } from "react";
import { LoginForm } from "@/components/Academy/auth/LoginForm";

export default function LoginPage() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="bg-[#0F172A] min-h-screen">
      <LoginForm onClose={() => setIsOpen(false)} />
    </div>
  );
}
