import { Star, Clock, Users } from 'lucide-react'; // تأكد من تثبيت lucide-react

interface CourseProps {
  title: string;
  category: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
  image: string;
}

export const CourseCard = ({ title, category, instructor, rating, students, duration, price }: CourseProps) => {
  return (
    <div className="bg-[#0F172A] p-4 rounded-xl border border-white/5 hover:border-orange-500/50 transition-all">
      <div className="h-40 bg-gray-700 rounded-lg mb-4"></div> {/* مكان الصورة */}
      <span className="text-xs text-orange-400 bg-orange-900/20 px-2 py-1 rounded">{category}</span>
      <h3 className="text-white font-bold mt-2 mb-1">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">بواسطة {instructor}</p>
      
      <div className="flex justify-between items-center text-gray-400 text-sm">
        <div className="flex items-center gap-1"><Star size={14} className="text-yellow-500" /> {rating}</div>
        <div className="flex items-center gap-1"><Users size={14} /> {students}</div>
        <div className="flex items-center gap-1"><Clock size={14} /> {duration}</div>
      </div>
      
      <div className="mt-4 flex justify-between items-center border-t border-white/5 pt-4">
        <span className="text-white font-bold">{price} ريال</span>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">حجز مقعد</button>
      </div>
    </div>
  );
};