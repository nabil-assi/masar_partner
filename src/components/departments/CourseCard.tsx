import Image from "next/image";
import { Clock, Users, Star, ShoppingCart } from "lucide-react";

interface CourseProps {
  image: string;
  level: string;
  category: string;
  title: string;
  description: string;
  instructorName: string;
  instructorImg: string;
  duration: string;
  students: string;
  rating: number;
  price: number;
}

export const CourseCard = ({ 
  image, level, category, title, description, instructorName, 
  instructorImg, duration, students, rating, price 
}: CourseProps) => {
  return (
    <div className="bg-[#111827] rounded-3xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all duration-300 w-full hover:-translate-y-2">
      {/* الصورة */}
      <div className="relative h-56 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute top-4 right-4 flex gap-2">
          <span className="bg-sky-500/90 text-white text-[10px] px-3 py-1 rounded-full">{category}</span>
          <span className="bg-amber-500/90 text-white text-[10px] px-3 py-1 rounded-full">{level}</span>
        </div>
      </div>

      {/* المحتوى */}
      <div className="p-5">
        <h3 className="text-white font-bold text-lg mb-2 text-right line-clamp-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 text-right leading-relaxed h-10 line-clamp-2">{description}</p>
        
        {/* معلومات المدرب */}
        <div className="flex items-center justify-end gap-3 mb-6">
          <span className="text-white text-sm font-medium">{instructorName}</span>
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
            <Image src={instructorImg} alt={instructorName} fill className="object-cover" />
          </div>
        </div>

        {/* الإحصائيات - تم تحسين التباعد لضمان عدم التداخل */}
        <div className="flex items-center justify-between text-gray-400 text-xs mb-6 px-1">
          <div className="flex items-center gap-1"><span className="text-amber-500 font-bold">{rating}</span><Star size={14} fill="currentColor" /></div>
          <div className="flex items-center gap-1"><span>{students}</span><Users size={14} /></div>
          <div className="flex items-center gap-1"><span>{duration}</span><Clock size={14} /></div>
        </div>

        {/* السعر والزر */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <span className="text-white font-bold text-lg">{price} ريال</span>
          <button className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-all">
            حجز <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};