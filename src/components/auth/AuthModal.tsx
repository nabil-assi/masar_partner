"use client";
import { X } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const AuthModal = ({ isOpen, onClose, children }: AuthModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* خلفية معتمة */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* المودال */}
      <div className="relative w-full max-w-3xl bg-[#111827] rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 left-4 z-10 p-2 text-gray-400 hover:text-white transition-colors">
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};