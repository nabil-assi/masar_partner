interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-12 px-4" dir="rtl">
      {/* زر السابق */}
      <button 
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 md:px-4 py-2 bg-[#111827] text-gray-400 rounded-lg border border-white/5 disabled:opacity-50 transition-all text-sm md:text-base"
      >
        السابق
      </button>

      {/* أرقام الصفحات - حاوية للتمرير الأفقي إذا كثرت الصفحات على الموبايل */}
      <div className="flex gap-1 overflow-x-auto max-w-[200px] md:max-w-none p-1">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`w-9 h-9 md:w-10 md:h-10 rounded-lg flex-shrink-0 transition-all ${
              currentPage === index + 1 
              ? "bg-blue-600 text-white" 
              : "bg-[#111827] text-gray-400 border border-white/5"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* زر التالي */}
      <button 
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 md:px-4 py-2 bg-[#111827] text-gray-400 rounded-lg border border-white/5 disabled:opacity-50 transition-all text-sm md:text-base"
      >
        التالي
      </button>
    </div>
  );
};