"use client";
import { User, Mail, Lock, Eye, X, ArrowRight } from "lucide-react";

export const RegisterForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* الحاوية الرئيسية: ثابتة المقاسات وموحدة */}
      <div className="relative w-full max-w-4xl h-[600px] bg-[#0d1424] rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex flex-row">
        {/* أزرار التحكم */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        <button className="absolute top-5 left-6 z-20 text-gray-400 hover:text-white flex items-center gap-1 text-sm">
          <ArrowRight size={18} /> الرئيسية
        </button>

        {/* الجانب الأيمن: الفورم (مع إخفاء السكرول) */}
        <div
          className="flex-1 p-16 flex flex-col justify-center overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          dir="rtl"
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <h3 className="text-[#228ECC] text-3xl font-bold mb-2">
            إنشاء حساب جديد
          </h3>
          <p className="text-[#898B94] text-sm mb-10">
            املأ البيانات للبدء في رحلتك.
          </p>

          <label className="text-gray-400 text-xs mb-2 block">
            الاسم بالكامل
          </label>
          <div className="relative mb-6">
            <User
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              size={20}
            />
            <input
              className="w-full bg-[#1E293B] py-4 pr-10 pl-4 rounded-2xl text-white outline-none border border-gray-700 focus:border-blue-500 transition-all text-sm"
              placeholder="أحمد محمود"
            />
          </div>

          <label className="text-gray-400 text-xs mb-2 block">
            البريد الإلكتروني
          </label>
          <div className="relative mb-6">
            <Mail
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              size={20}
            />
            <input
              className="w-full bg-[#1E293B] py-4 pr-10 pl-4 rounded-2xl text-white outline-none border border-gray-700 focus:border-blue-500 transition-all text-sm"
              placeholder="example@email.com"
            />
          </div>

          <label className="text-gray-400 text-xs mb-2 block">
            كلمة المرور
          </label>
          <div className="relative mb-8">
            <Lock
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              size={20}
            />
            <input
              className="w-full bg-[#1E293B] py-4 pr-10 pl-10 rounded-2xl text-white outline-none border border-gray-700 focus:border-blue-500 transition-all text-sm"
              type="password"
              placeholder="••••••••"
            />
            <Eye
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
              size={20}
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl text-white font-bold transition-all text-sm mb-6 shadow-lg shadow-blue-900/20">
            إنشاء حساب
          </button>

          <p className="text-center text-gray-500 text-sm">
            لديك حساب بالفعل؟{" "}
            <a
              href="/login"
              className="text-blue-500 hover:underline font-bold"
            >
              تسجيل الدخول
            </a>
          </p>
        </div>

        {/* الجانب الأيسر: الصورة (تم وضع صورة خلفية وطبقة داكنة فوقها) */}
        <div className="hidden md:flex w-[40%] m-3 rounded-2xl relative overflow-hidden items-center justify-center p-8 text-center">
          {/* الصورة */}
          <img
            src="/images/auth/auth_bg.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* طبقة تغميق (Overlay) لضمان وضوح النص */}
          <div className="absolute inset-0 bg-blue-900/70" />

          {/* المحتوى */}
          <div className="relative z-10 text-white">
            <h2 className="text-3xl font-bold mb-4">بوابتك نحو الاحتراف.</h2>
            <p className="text-white/80 text-sm">
              استثمر في شغفك، لتبني مساراً مهنياً لا يعرف المستحيل.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
