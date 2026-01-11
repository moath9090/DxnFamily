
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import VideoCard from './components/VideoCard';
import QuizModal from './components/QuizModal';
import FinalForm from './components/FinalForm';
import Footer from './components/Footer';
import { VIDEOS } from './constants';
import { AppState, UserData } from './types';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.SPLASH);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [userExperience, setUserExperience] = useState('');

  // Splash Screen Loading Logic
  useEffect(() => {
    if (appState === AppState.SPLASH) {
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setAppState(AppState.LANDING), 500);
            return 100;
          }
          return prev + 2; // Adjust speed here
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [appState]);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleQuizPass = (experience: string) => {
    setShowQuiz(false);
    setUserExperience(experience);
    setAppState(AppState.FINAL_FORM);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (data: UserData) => {
    console.log('Sending data to dedicated email...', data);
    setTimeout(() => {
      setAppState(AppState.SUCCESS);
    }, 1000);
  };

  if (appState === AppState.SPLASH) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="mb-8 flex flex-col items-center">
          <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-4xl font-black mb-4 shadow-xl animate-pulse">
            ن
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">فريق نحن متميزون</h1>
          <p className="text-emerald-600 font-bold">خطة تفتيت الصخرة</p>
        </div>

        <div className="w-full max-w-sm">
          <div className="flex justify-between mb-2 text-sm font-bold text-gray-600">
            <span>جاري التحميل...</span>
            <span dir="ltr">{loadingProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden shadow-inner">
            <div 
              className="bg-emerald-600 h-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(5,150,105,0.5)]"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>
        
        <p className="mt-8 text-gray-400 text-sm animate-pulse">
          نصنع التميز.. خطوة بخطوة
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen transition-opacity duration-1000 opacity-100">
      {/* Header/Navbar (Sticky) */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">ن</div>
            <span className="font-extrabold text-xl text-emerald-900 tracking-tight">نحن متميزون</span>
          </div>
          <button 
            onClick={handleStartQuiz}
            className="hidden md:block px-6 py-2 bg-emerald-600 text-white rounded-lg font-bold text-sm hover:bg-emerald-700 transition-all"
          >
            اشترك في القرعة
          </button>
        </div>
      </nav>

      <main>
        {appState === AppState.LANDING && (
          <>
            <Hero />
            
            {/* Videos Section */}
            <section id="videos" className="py-20 px-6 bg-gray-50">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">شروحات الخطة</h2>
                  <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
                </div>
                
                <div className="space-y-12">
                  {VIDEOS.map(video => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Sticky Bar (Mobile Only) */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t z-30">
              <button 
                onClick={handleStartQuiz}
                className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
              >
                <span>💰 الاشتراك في قرعة 1000 دولار</span>
              </button>
            </div>

            {/* Main CTA Section (Desktop/Tablet) */}
            <section className="py-20 px-6 bg-emerald-900 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 opacity-20 blur-3xl rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400 opacity-20 blur-3xl rounded-full"></div>
              
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                  جاهز للبدء في رحلة النجاح الحقيقي؟
                </h2>
                <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                  خطة تفتيت الصخرة هي بوابتك للأمان المالي. شاهد الفيديوهات، افهم الخطة، وسجل اسمك في قرعة الـ 1000 دولار الشهرية للمتميزين.
                </p>
                <button 
                  onClick={handleStartQuiz}
                  className="px-12 py-5 bg-white text-emerald-900 text-2xl font-black rounded-2xl shadow-2xl hover:bg-emerald-50 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mx-auto"
                >
                  <span>💰 الاشتراك في قرعة 1000 دولار</span>
                </button>
              </div>
            </section>
          </>
        )}

        {appState === AppState.FINAL_FORM && (
          <section className="py-32 px-6 bg-gray-50 min-h-screen">
            <FinalForm onSubmit={handleFormSubmit} experience={userExperience} />
          </section>
        )}

        {appState === AppState.SUCCESS && (
          <section className="py-32 px-6 flex items-center justify-center min-h-screen bg-gray-50">
            <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-12 text-center border border-emerald-100">
              <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">تم تسجيلك بنجاح!</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                شكراً لانضمامك لقرعة فريق نحن متميزون. سيتم التواصل مع الرابحين في نهاية الشهر عبر كود العضوية ورقم الهاتف.
              </p>
              <button 
                onClick={() => setAppState(AppState.LANDING)}
                className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-all"
              >
                العودة للصفحة الرئيسية
              </button>
            </div>
          </section>
        )}
      </main>

      <Footer />

      {/* Quiz Overlay */}
      {showQuiz && (
        <QuizModal 
          onPass={handleQuizPass} 
          onClose={() => setShowQuiz(false)} 
        />
      )}
    </div>
  );
};

export default App;
