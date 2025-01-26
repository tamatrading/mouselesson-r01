import React from 'react';
import { Star } from 'lucide-react';

function App() {
  const [warningPosition, setWarningPosition] = React.useState({ x: 0, y: 0 });
  const [showWarning, setShowWarning] = React.useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setWarningPosition({ x: e.clientX, y: e.clientY });
    setShowWarning(true);
    setTimeout(() => setShowWarning(false), 2000);
  };

  return (
    <div
      className="min-h-screen bg-gray-50 flex items-center justify-center p-8"
      role="main"
      onContextMenu={handleContextMenu}
    >
      {showWarning && (
        <div 
          className="fixed bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg shadow-lg text-sm transition-opacity duration-300 opacity-90 z-50"
          style={{
            left: `${warningPosition.x}px`,
            top: `${warningPosition.y}px`,
            transform: 'translate(-50%, -120%)'
          }}
          role="alert"
        >
          みぎクリックしないでね
        </div>
      )}
      <div className="w-full max-w-6xl flex gap-8">
        {/* Left side - Paper note */}
        <div
          className="flex-1 bg-[#fdfbf7] p-8 relative shadow-md"
          role="article"
        >
          <div className="absolute top-0 left-0 right-0 flex justify-between px-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 -mt-2 rounded-b-lg" />
            ))}
          </div>
          <div className="mt-8 space-y-6 text-center">
            <h1 className="space-y-4 font-normal mb-4" lang="ja">
              <div className="text-5xl tracking-wider">かんたん</div>
              <div className="text-5xl tracking-wide">まうす</div>
              <div className="text-5xl tracking-wider">れっすん</div>
            </h1>
            <h2 className="sr-only">小学生向けマウス操作練習ゲーム</h2>
            <div className="w-48 h-0.5 bg-gray-400 mx-auto mb-8" />
            <p className="text-lg leading-relaxed" lang="ja">
              ぼーるをわったり、はこんだりして
              <br />
              まうすのつかいかたをおぼえよう！
            </p>
          </div>
          <div className="absolute bottom-12 right-12">
            <Star
              className="w-24 h-24 text-pink-400 transform rotate-12"
              fill="currentColor"
            />
          </div>
        </div>

        {/* Right side - Animated squares */}
        <nav
          className="flex-1 grid grid-cols-2 gap-4"
          aria-label="マウス練習ゲーム"
        >
          <a
            href="https://click01.manabi-time.com/"
            className="aspect-square bg-red-400 hover:bg-red-500 text-white p-6 rounded-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center group"
          >
            <div className="relative mb-2">
              <Star
                className="w-12 h-12 absolute -top-6 -left-10 text-white animate-spin-slow"
                fill="currentColor"
              />
              <span className="text-2xl font-bold">01</span>
            </div>
            <p
              className="text-center text-sm mt-4 group-hover:scale-105 transition-transform"
              lang="ja"
            >
              からふるぼーるわりげーむ
              <br />
              （クリックの練習）
            </p>
          </a>
          <a
            href="https://dclick01.manabi-time.com/"
            className="aspect-square bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center group"
          >
            <div className="relative mb-2">
              <Star
                className="w-12 h-12 absolute -top-6 -left-10 text-white animate-bounce"
                fill="currentColor"
              />
              <span className="text-2xl font-bold">02</span>
            </div>
            <p
              className="text-center text-sm mt-4 group-hover:scale-105 transition-transform"
              lang="ja"
            >
              からふるぼーるわりげーむ
              <br />
              （ダブルクリックの練習）
            </p>
          </a>
          <a
            href="https://click-double01.manabi-time.com/"
            className="aspect-square bg-purple-300 hover:bg-purple-400 text-white p-6 rounded-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center group"
          >
            <div className="relative mb-2">
              <Star
                className="w-12 h-12 absolute -top-6 -left-10 text-white animate-pulse"
                fill="currentColor"
              />
              <span className="text-2xl font-bold">03</span>
            </div>
            <p
              className="text-center text-sm mt-4 group-hover:scale-105 transition-transform"
              lang="ja"
            >
              からふるぼーるわりげーむ
              <br />
              （クリック＆ダブルクリック）
            </p>
          </a>
          <a
            href="https://dragdrop01.manabi-time.com/"
            className="aspect-square bg-yellow-400 hover:bg-yellow-500 text-white p-6 rounded-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center group"
          >
            <div className="relative mb-2">
              <Star
                className="w-12 h-12 absolute -top-6 -left-10 text-white animate-wiggle"
                fill="currentColor"
              />
              <span className="text-2xl font-bold">04</span>
            </div>
            <p
              className="text-center text-sm mt-4 group-hover:scale-105 transition-transform"
              lang="ja"
            >
              ぼーるはこびげーむ
              <br />
              （ドラッグ＆ドロップ）
            </p>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default App;
