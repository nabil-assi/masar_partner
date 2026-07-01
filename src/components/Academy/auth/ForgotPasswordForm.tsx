"use client";
import { Mail, X, ArrowRight } from "lucide-react";

export const ForgotPasswordForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl bg-[#0d1424] rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        {/* أزرار التحكم */}
        <button onClick={onClose} className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white">
          <X size={24} />
        </button>
        <button className="absolute top-4 left-4 z-20 text-gray-400 hover:text-white flex items-center gap-1 text-sm font-medium">
          <ArrowRight size={18} /> الرئيسية
        </button>

        {/* الجانب الأيسر: الفورم */}
        <div className="flex-1 p-16 flex flex-col justify-center" dir="rtl">
          <h3 className="text-[#228ECC] text-3xl font-bold mb-2">هل نسيت كلمة المرور؟</h3>
          <p className="text-[#898B94] text-sm mb-10">أدخل بريدك الإلكتروني وسنرسل لك رابطاً لإعادة التعيين.</p>

          <label className="text-gray-400 text-xs mb-2 block">البريد الإلكتروني</label>
          <div className="relative mb-8">
            <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" size={20} />
            <input
              className="w-full bg-[#1E293B] py-4 pr-10 pl-4 rounded-2xl text-white outline-none border border-gray-700 focus:border-blue-500 transition-all text-sm"
              placeholder="example@email.com"
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl text-white font-bold transition-all text-sm mb-6 shadow-lg shadow-blue-900/20">
            إرسال رابط الاستعادة
          </button>

          <p className="text-center text-gray-500 text-sm">
            <a href="/login" className="flex items-center justify-center gap-2 text-blue-500 hover:underline font-bold">
               العودة لتسجيل الدخول <ArrowRight size={16} />
            </a>
          </p>
        </div>

        {/* الجانب الأيمن: الصورة */}
        <div className="hidden md:flex w-[40%] m-3 rounded-2xl relative overflow-hidden bg-blue-900/60">
          <div className="relative z-10 p-10 flex flex-col items-center justify-center text-center h-full">
            <h2 className="text-white text-3xl font-bold leading-snug mb-4">أمانك هو أولويتنا.</h2>
            <p className="text-white/80 text-sm leading-relaxed">خطوات بسيطة تفصلك عن العودة لرحلة تعلمك.</p>
          </div>
        </div>
      </div>
    </div>
  );
};