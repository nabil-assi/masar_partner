"use client";

import { motion } from "framer-motion";

export function Sidebar({ heading = "محتويات الصفحة", sections }: { heading?: string, sections: { title: string }[] }) {
  return (
    <aside className="w-full lg:w-80 p-6 border border-gray-100 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] lg:sticky lg:top-24 self-start" dir="rtl">
      <h4 className="text-right font-extrabold text-[#011856] text-sm mb-5">{heading}</h4>
      <ul className="flex flex-col gap-2">
        {sections.map((s, i) => (
          <li key={i}>
            <a href={`#section-${i + 1}`} className="flex items-center gap-3 text-right text-gray-600 text-sm font-medium px-3 py-2.5 rounded-xl hover:bg-blue-50 hover:text-[#0047AB] transition-all">
              <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 text-[11px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
              <span className="leading-relaxed">{s.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}