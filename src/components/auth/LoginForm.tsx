"use client";
import { Mail, Lock, Eye, X, ArrowRight, ArrowLeft } from "lucide-react";

export const LoginForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl bg-[#0d1424] rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        {/* أزرار التحكم: الرئيسية يسار، إغلاق يمين */}
        <button className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white flex items-center gap-1 text-sm font-medium">
          <X size={24} />
        </button>
         <button  className="absolute top-4 left-4 z-20 text-gray-400 hover:text-white flex items-center gap-1 text-sm font-medium">
          <ArrowLeft size={18} /> الرئيسية
        </button>
 
        {/* جانب الفورم */}
        <div className="flex-1 p-16 flex flex-col justify-center" dir="rtl">
          <h3 className="text-[#228ECC] text-3xl font-bold mb-2">
            واصل بناء مستقبلك...
          </h3>
          <p className="text-[#898B94] text-sm mb-10">
            سجل الدخول للوصول إلى حسابك
          </p>

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

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="appearance-none w-4 h-4 rounded border border-white bg-[#0F172A] accent-blue-600 cursor-pointer checked:bg-blue-600 transition-all"
              />
              <label
                htmlFor="remember"
                className="text-gray-400 text-xs cursor-pointer"
              >
                تذكرني
              </label>
            </div>
            <a
              href="/forgot-password"
              className="text-blue-500 text-xs hover:underline"
            >
              نسيت كلمة السر؟
            </a>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl text-white font-bold transition-all text-sm mb-6 shadow-lg shadow-blue-900/20">
            تسجيل الدخول
          </button>

          <p className="text-center text-gray-500 text-sm">
            ليس لديك حساب؟{" "}
            <a
              href="/register"
              className="text-blue-500 hover:underline font-bold"
            >
              سجل الآن
            </a>
          </p>
        </div>

        {/* الجانب الأيمن */}
        <div className="hidden md:flex w-[40%]  rounded-r-2xl relative overflow-hidden bg-blue-900/60">
          {/* هنا تم إضافة الصورة كـ Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/auth/auth_bg.png')" }}
          />

          {/* طبقة التعتيم لضمان وضوح النص */}
          <div className="absolute inset-0 bg-blue-900/70" />

          <div className="relative z-10 p-10 flex flex-col items-center justify-center text-center h-full">
            <h2 className="text-white text-3xl font-bold leading-snug mb-4">
              عالمك الجديد يبدأ بسطر برمجي.
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              لا تكتفِ بتعلم الكود، بل تعلم كيف تبني به واقعاً جديداً يربطك
              بمستقبل التكنولوجيا.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
