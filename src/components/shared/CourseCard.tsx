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
  priceUnit?: string; // إضافة اختيارية للعملة
}

  

export const CourseCard = ({
  image,
  level,
  category,
  title,
  description,
  instructorName,
  instructorImg,
  duration,
  students,
  rating,
  price,
  priceUnit = "ريال",
}: CourseProps) => {
  return (
    <div className="bg-[#1E293B] rounded-3xl overflow-hidden transition-all duration-300 w-full max-w-[411px] flex flex-col hover:-translate-y-2">
      {/* القسم العلوي: الصورة بنسبة 411:269 */}
      <div className="relative w-full aspect-[411/269]">
        <Image src={image} alt={title} fill className="object-cover" />
        <span className="absolute top-4 right-4 bg-sky-500/90 text-white text-[10px] px-3 py-1 rounded-2xl z-10">
          {category}
        </span>
        <span className="absolute top-4 left-4 bg-amber-500/90 text-white text-[10px] px-3 py-1 rounded-2xl z-10">
          {level}
        </span>
      </div>

      {/* القسم السفلي: مرن ويتمدد حسب المحتوى */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-white font-bold text-lg mb-2 text-right line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 text-right min-h-[3rem] line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-3 mb-6">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10">
            <Image src={instructorImg} alt={instructorName} fill className="object-cover" />
          </div>
          <span className="text-white text-sm">{instructorName}</span>
        </div>

        <div className="flex items-center justify-between text-gray-400 text-xs mb-6 px-1">
          <div className="flex items-center gap-1"><span>{duration}</span><Clock size={14} /></div>
          <div className="flex items-center gap-1"><span>{students}</span><Users size={14} /></div>
          <div className="flex items-center gap-1 text-amber-500 font-bold"><span>{rating}</span><Star size={14} fill="gold" /></div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <div className="text-lg font-bold">
            <span className="text-blue-500">{price}</span>
            <span className="text-white mr-1 text-sm">{priceUnit}</span>
          </div>
          <button className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all">
            <ShoppingCart size={16} />
            حجز مقعد
          </button>
        </div>
      </div>
    </div>
  );
};