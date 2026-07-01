const stats = [
  { value: '+15k', label: 'ساعة تعليمية' },
  { value: '85%', label: 'معدل التوظيف' },
  { value: '+1200', label: 'مشروع تم تسليمه' },
  { value: '98%', label: 'نسبة رضاء الطلاب' },
];

export const Stats = () => {
  return (
    <section className="py-16 bg-[#1E293B] border-y border-blue-500/20">
      <div className="container mx-auto px-4">
        {/* تغيير التوزيع ليكون 2x2 في الموبايل و 4x1 في الشاشات الكبيرة */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group border-l border-white/10 last:border-0 lg:last:border-0 lg:[&:nth-child(2)]:border-l lg:[&:nth-child(3)]:border-l">
              <div className="text-3xl md:text-5xl font-extrabold text-white mb-2 group-hover:text-blue-400 transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};