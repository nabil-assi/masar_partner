"use client";
import { useState } from "react";
import { RegisterForm } from "@/components/Academy/auth/RegisterForm";

export default function RegisterPage() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="bg-[#0F172A] min-h-screen">
      <RegisterForm onClose={() => setIsOpen(false)} />
    </div>
  );
}
