import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string; // للسماح بإضافة كلاسات إضافية عند الحاجة
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    // 1. استخدم px-4 أو px-6 للموبايل، وتدرج في الشاشات الكبيرة
    // 2. أزل الخلفية من هنا، الخلفية يجب أن تكون في الـ section وليس في الكونتينر
    // 3. أضف mx-auto لضمان توسيط المحتوى
    <div className={`w-full max-w-7xl mx-auto px-4 md:px-6 ${className}`}>
      {children}
    </div>
  );
};