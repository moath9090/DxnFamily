
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">فريق نحن متميزون</h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
          "التميز ليس فعلاً، بل هو عادة. انضم إلينا في رحلة صناعة القادة وتغيير الحياة نحو الأفضل مع DXN."
        </p>
        
        <div className="flex justify-center space-x-6 space-x-reverse mb-10">
          <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all">
            <span className="sr-only">Facebook</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all">
            <span className="sr-only">YouTube</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.2c-.3-1.1-1.1-1.9-2.2-2.2C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.3.5c-1.1.3-1.9 1.1-2.2 2.2C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1.1 1.1 1.9 2.2 2.2 1.9.5 9.3.5 9.3.5s7.4 0 9.3-.5c1.1-.3 1.9-1.1 2.2-2.2.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/></svg>
          </a>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-gray-500 text-sm">
          جميع الحقوق محفوظة &copy; {new Date().getFullYear()} لفريق نحن متميزون
        </div>
      </div>
    </footer>
  );
};

export default Footer;
