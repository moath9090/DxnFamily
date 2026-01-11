
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';

interface QuizModalProps {
  onPass: (experience: string) => void;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ onPass, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [experienceText, setExperienceText] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  const handleOptionSelect = (option: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: option });
    setMessage(null);
    setIsError(false);

    // Special logic for Q4 (Understanding)
    if (currentQuestion.id === 4 && option === 'لا') {
      setMessage('نرجو إعادة مشاهدة الشرح لفهم الخطة بشكل صحيح قبل المتابعة.');
      setIsError(true);
      return;
    }

    // Special logic for Q6 (Product Use)
    if (currentQuestion.id === 6 && option === 'لا') {
      setMessage('ننصحك باستخدام المنتجات أولاً، لأن معرفة المنتجات أساس النجاح في هذا العمل، وبدونها لن تحقق نتائج حقيقية أبداً.');
      setIsError(false);
    }
  };

  const calculateScore = () => {
    const factualQuestions = QUIZ_QUESTIONS.filter(q => q.type === 'multiple');
    let correctCount = 0;
    factualQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    return (correctCount / factualQuestions.length) * 100;
  };

  const handleNext = () => {
    if (currentQuestion.id === 6 && answers[6] === 'نعم' && !experienceText) {
      setIsError(true);
      setMessage('يرجى كتابة تفاصيل تجربتك.');
      return;
    }

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
      setMessage(null);
    } else {
      const score = calculateScore();
      if (score > 90) {
        onPass(experienceText);
      } else {
        setIsError(true);
        setMessage(`للأسف نسبتك هي ${score.toFixed(0)}%. يجب أن تكون إجاباتك صحيحة بنسبة أكثر من 90% للتسجيل في القرعة. يرجى إعادة المحاولة.`);
        setCurrentStep(0);
        setAnswers({});
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 bg-emerald-600 text-white flex justify-between items-center">
          <h2 className="text-xl font-bold">استبيان التأهل للقرعة</h2>
          <button onClick={onClose} className="p-2 hover:bg-emerald-700 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <div className="p-8 overflow-y-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-emerald-600">السؤال {currentStep + 1} من {QUIZ_QUESTIONS.length}</span>
              <span className="text-sm font-medium text-gray-400">{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-600 h-full transition-all duration-300" 
                style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {currentQuestion.text}
          </h3>

          <div className="space-y-4">
            {currentQuestion.options?.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option)}
                className={`w-full p-4 text-right rounded-xl border-2 transition-all flex items-center justify-between ${
                  answers[currentQuestion.id] === option 
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900' 
                    : 'border-gray-100 bg-gray-50 hover:border-emerald-200'
                }`}
              >
                <span className="font-medium">{option}</span>
                {answers[currentQuestion.id] === option && (
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {currentQuestion.id === 6 && answers[6] === 'نعم' && (
            <div className="mt-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                اذكر تفاصيل تجربتك، ما هي المنتجات التي استخدمتها؟ وماذا حصل بعد الاستخدام؟
              </label>
              <textarea
                value={experienceText}
                onChange={(e) => setExperienceText(e.target.value)}
                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-emerald-600 outline-none transition-all h-32"
                placeholder="اكتب هنا..."
              />
            </div>
          )}

          {message && (
            <div className={`mt-6 p-4 rounded-xl text-sm font-medium ${isError ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'}`}>
              {message}
            </div>
          )}
        </div>

        <div className="p-6 bg-gray-50 border-t flex justify-end">
          <button
            onClick={handleNext}
            disabled={!answers[currentQuestion.id]}
            className={`px-10 py-3 rounded-xl font-bold text-white transition-all ${
              !answers[currentQuestion.id] ? 'bg-gray-300 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700 shadow-lg'
            }`}
          >
            {currentStep === QUIZ_QUESTIONS.length - 1 ? 'إنهاء وحساب النتيجة' : 'السؤال التالي'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
