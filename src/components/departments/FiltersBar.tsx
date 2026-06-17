export const FiltersBar = ({
  onFilterChange,
}: {
  onFilterChange: (filters: any) => void;
}) => {
  // كلاس موحد مع إضافة padding إضافي جهة اليمين لتجنب تداخل النص مع السهم
  const selectClasses =
    "bg-[#111827] text-white px-6 py-3.5 text-sm md:text-base rounded-2xl w-full cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[left_1rem_center] bg-no-repeat border border-white/5 hover:border-orange-500/30 transition-all";

  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-6 py-10 px-0 md:px-6" dir="rtl">
      
      {/* رأس التصفية */}
      <div className="flex items-center justify-start gap-3 text-white/90 text-lg">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <line x1="4" y1="21" x2="4" y2="14"></line>
          <line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line>
          <line x1="20" y1="12" x2="20" y2="3"></line>
          <circle cx="4" cy="12" r="2"></circle>
          <circle cx="12" cy="10" r="2"></circle>
          <circle cx="20" cy="14" r="2"></circle>
        </svg>
        <span className="font-bold">تصفية النتائج</span>
      </div>

      {/* الحاوية - Grid متجاوبة */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* التصنيف */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-400 text-xs md:text-sm mr-1">التصنيف</label>
          <select onChange={(e) => onFilterChange({ category: e.target.value })} className={selectClasses}>
            <option value="">جميع التصنيفات</option>
            <option value="تطوير الويب">تطوير الويب</option>
            <option value="الذكاء الاصطناعي">الذكاء الاصطناعي</option>
            <option value="التصميم">التصميم</option>
          </select>
        </div>

        {/* المستوى */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-400 text-xs md:text-sm mr-1">المستوى</label>
          <select onChange={(e) => onFilterChange({ level: e.target.value })} className={selectClasses}>
            <option value="">جميع المستويات</option>
            <option value="مبتدئ">مبتدئ</option>
            <option value="متوسط">متوسط</option>
            <option value="متقدم">متقدم</option>
          </select>
        </div>

        {/* السعر */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-400 text-xs md:text-sm mr-1">السعر</label>
          <select onChange={(e) => onFilterChange({ price: e.target.value })} className={selectClasses}>
            <option value="">جميع الأسعار</option>
            <option value="low">من الأقل للأعلى</option>
            <option value="high">من الأعلى للأقل</option>
          </select>
        </div>
      </div>
    </div>
  );
};