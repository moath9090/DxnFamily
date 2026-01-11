
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-full h-full gradient-bg opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-emerald-700 uppercase bg-emerald-100 rounded-full">
          فريق نحن متميزون
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
          نحن متميزون
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-bold text-emerald-600 mb-8">
          خطة تفتيت الصخرة
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          منهج عملي ذكي لبناء النجاح الجماعي في DXN بخطوات واضحة وقابلة للتطبيق. اكتشف كيف نحول التحديات الكبيرة إلى نجاحات صغيرة متراكمة.
        </p>
        
        <div className="mt-12 flex justify-center gap-4">
          <a href="#videos" className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-all transform hover:-translate-y-1">
            ابدأ التعلم الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
