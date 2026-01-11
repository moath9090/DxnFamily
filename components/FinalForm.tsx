
import React, { useState } from 'react';
import { UserData } from '../types';

interface FinalFormProps {
  onSubmit: (data: UserData) => void;
  experience?: string;
}

const FinalForm: React.FC<FinalFormProps> = ({ onSubmit, experience }) => {
  const [formData, setFormData] = useState<UserData>({
    fullName: '',
    membershipCode: '',
    country: '',
    address: '',
    experience: experience || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">مبروك! لقد تأهلت</h2>
        <p className="text-gray-500">أدخل بياناتك للمشاركة في قرعة الـ 1000 دولار الشهرية</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">الاسم الكامل</label>
          <input
            required
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-emerald-600 outline-none transition-all"
            placeholder="الاسم كما هو في الهوية"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">كود العضوية (DXN)</label>
            <input
              required
              type="text"
              value={formData.membershipCode}
              onChange={(e) => setFormData({ ...formData, membershipCode: e.target.value })}
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-emerald-600 outline-none transition-all"
              placeholder="مثال: 812345678"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">البلد</label>
            <input
              required
              type="text"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-emerald-600 outline-none transition-all"
              placeholder="بلد الإقامة"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">العنوان الكامل</label>
          <input
            required
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-emerald-600 outline-none transition-all"
            placeholder="المدينة، الشارع، رقم الهاتف"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-all transform hover:-translate-y-1"
        >
          تأكيد التسجيل في القرعة
        </button>
      </form>
    </div>
  );
};

export default FinalForm;
