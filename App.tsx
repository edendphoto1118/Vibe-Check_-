import React, { useState, useEffect, useRef } from 'react';
import { 
  Martini, 
  Gamepad2, 
  Users, 
  User, 
  ChevronRight, 
  ArrowLeft,
  Info,
  X,
  Aperture,
  Mic,
  Hand,
  Eye,
  Wind,
  UserCheck,
  Hash,
  Navigation,
  Droplets,
  RefreshCcw,
  Sparkles,
  Settings,
  Plus,
  Trash2,
  MessageCircle,
  Zap,
  Lightbulb,
  Shuffle,
  Lock,
  Unlock,
  AlertTriangle,
  Flame,
  Dices,
  LogOut,
  Scissors
} from 'lucide-react';
import { GAMES, COCKTAILS, DARES, TRUTHS, SOLO_CONTENT, TWO_PLAYER_CONTENT } from './constants';
import { AppScreen, GameRule, GameState, GameContent, ContentType, Cocktail } from './types';

// --- Global Styles for Animations ---
const GlobalStyles = () => (
  <style>{`
    @keyframes bounce-random-1 {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(15px, -25px); }
      50% { transform: translate(-10px, -15px); }
      75% { transform: translate(5px, 10px); }
    }
    @keyframes bounce-random-2 {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(-15px, 20px); }
      50% { transform: translate(10px, 15px); }
      75% { transform: translate(-5px, -20px); }
    }
    @keyframes bounce-random-3 {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(10px, 20px); }
      50% { transform: translate(-15px, -10px); }
      75% { transform: translate(15px, -5px); }
    }
    .animate-bounce-1 { animation: bounce-random-1 0.4s infinite linear alternate; }
    .animate-bounce-2 { animation: bounce-random-2 0.5s infinite linear alternate; }
    .animate-bounce-3 { animation: bounce-random-3 0.45s infinite linear alternate; }
    
    .magazine-font {
      font-family: 'Outfit', sans-serif;
    }
  `}</style>
);

// --- UI Components ---

const Button: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass' | 'danger' | 'evil';
  className?: string;
  disabled?: boolean;
}> = ({ onClick, children, variant = 'primary', className = '', disabled = false }) => {
  const baseStyle = "relative overflow-hidden font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-neon-blue to-neon-purple text-black hover:shadow-[0_0_20px_rgba(188,19,254,0.5)] border border-transparent",
    secondary: "bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]",
    glass: "glass-panel text-white hover:bg-white/10",
    danger: "bg-red-500/20 text-red-500 hover:bg-red-500/40 border border-red-500/50",
    evil: "bg-gradient-to-r from-red-950 via-red-900 to-black text-red-100 border border-red-500/50 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:border-red-400"
  };

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Card: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ children, className = '', onClick }) => (
  <div onClick={onClick} className={`glass-panel rounded-2xl p-6 transition-all duration-300 ${onClick ? 'cursor-pointer hover:bg-white/5 active:scale-98' : ''} ${className}`}>
    {children}
  </div>
);

const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-8 text-center relative z-20">
    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neon-blue to-neon-purple neon-text-blue mb-2">
      {title}
    </h1>
    {subtitle && <p className="text-gray-400 font-light tracking-widest uppercase text-sm">{subtitle}</p>}
  </div>
);

const IconMap: Record<string, React.FC<any>> = {
  Aperture, Mic, Hand, Eye, Wind, UserCheck, Users, Hash, Navigation, Droplets, Zap, Scissors
};

// --- Branding Overlay (The Magazine Look - Foreground) ---
// High Z-Index, fixed, pointer-events-none
const BrandingOverlay: React.FC = () => (
  <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[60] overflow-hidden select-none magazine-font mix-blend-screen">
      {/* Top Left Corner Branding */}
      <div className="absolute top-5 left-5 md:top-8 md:left-8 flex flex-col items-start">
         <h1 className="text-xl md:text-2xl font-black italic tracking-tighter text-white leading-none drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
           VIBE CHECK
         </h1>
         <div className="flex items-center mt-1 w-full opacity-90">
            <div className="h-[1px] bg-neon-blue flex-1 shadow-[0_0_5px_#00f3ff]"></div>
            <span className="text-[10px] md:text-xs font-bold text-neon-blue tracking-[0.4em] uppercase px-2 shrink-0 drop-shadow-md">
              氣氛博士
            </span>
            <div className="h-[1px] bg-neon-blue flex-1 shadow-[0_0_5px_#00f3ff]"></div>
         </div>
      </div>
  </div>
);

// --- Background Watermark (The Magazine Look - Background) ---
// Low Z-Index, fixed, giant text
const BackgroundWatermark: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
     <div className="absolute -top-10 -left-10 text-[30vw] font-black text-white/[0.02] leading-none tracking-tighter mix-blend-overlay">
       VIBE
     </div>
     <div className="absolute bottom-20 -right-10 text-[30vw] font-black text-white/[0.02] leading-none tracking-tighter mix-blend-overlay text-right">
       CHECK
     </div>
  </div>
);

// --- Footer Ad Component ---
const AdBanner: React.FC = () => (
  <a 
    href="https://s.shopee.tw/3B0Ii9juKw" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-neon-purple/90 to-neon-blue/90 backdrop-blur-md border-t border-white/20 p-4 z-50 transform hover:-translate-y-1 transition-all duration-300 group shadow-[0_-5px_20px_rgba(0,0,0,0.5)]"
  >
    <div className="max-w-4xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <div className="absolute -inset-1 bg-white/30 rounded-full animate-ping"></div>
          <Sparkles className="text-yellow-300 relative z-10" size={24} />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-white text-base md:text-lg tracking-wide group-hover:text-yellow-300 transition-colors">
            不夠嗨嗎? 試試酒局撲克吧
          </span>
          <span className="text-[10px] md:text-xs text-white/80">
            派對神器 / 讓氣氛瞬間引爆 🔥
          </span>
        </div>
      </div>
      <div className="bg-black/30 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold border border-white/20 group-hover:bg-white group-hover:text-black transition-all whitespace-nowrap">
        了解更多 &rarr;
      </div>
    </div>
  </a>
);

// --- Credits / Watermark Component (Restored & Styled) ---
const Credits: React.FC = () => (
  <div className="fixed bottom-[85px] right-4 z-[55] pointer-events-auto group">
    <a 
      href="https://www.instagram.com/eden_d_photo/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:border-neon-blue/50 transition-all duration-300 shadow-lg"
    >
      <div className="relative flex items-center justify-center">
        <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse relative z-10"></div>
        <div className="absolute inset-0 bg-neon-pink/50 rounded-full animate-ping"></div>
      </div>
      <div className="flex flex-col items-start justify-center h-full">
        <span className="text-[8px] text-gray-400 font-mono leading-none mb-1 tracking-wider uppercase">Concept By</span>
        <span className="text-[10px] font-bold text-white tracking-[0.15em] leading-none group-hover:text-neon-blue transition-colors">EDEN_D_PHOTO</span>
      </div>
    </a>
  </div>
);

// --- 18+ Sensual Effect Background ---
const SensualEffect: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Red/Purple Vignette Pulse */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(50,0,0,0.4)_70%,_rgba(80,0,20,0.8)_100%)] animate-pulse-slow"></div>
    
    {/* Floating Mist/Smoke/Particles */}
    <div className="absolute top-0 left-0 w-full h-full opacity-30">
      <div className="absolute top-[100%] left-[20%] w-32 h-32 bg-pink-600 rounded-full blur-[80px] animate-[floatUp_10s_linear_infinite]"></div>
      <div className="absolute top-[100%] left-[50%] w-48 h-48 bg-purple-700 rounded-full blur-[100px] animate-[floatUp_15s_linear_infinite_2s]"></div>
      <div className="absolute top-[100%] left-[80%] w-24 h-24 bg-red-600 rounded-full blur-[60px] animate-[floatUp_8s_linear_infinite_5s]"></div>
    </div>
    
    <style>{`
      @keyframes floatUp {
        0% { transform: translateY(0) scale(1); opacity: 0; }
        20% { opacity: 0.6; }
        80% { opacity: 0.4; }
        100% { transform: translateY(-120vh) scale(1.5); opacity: 0; }
      }
    `}</style>
  </div>
);

// --- Lotto Ball Animation Component ---
const LottoMachine: React.FC = () => (
  <div className="relative w-32 h-32 mx-auto mb-6">
    {/* Glass Sphere Container */}
    <div className="absolute inset-0 rounded-full bg-white/5 border border-white/20 shadow-[0_0_30px_rgba(255,0,255,0.2)] backdrop-blur-sm overflow-hidden flex items-center justify-center">
       {/* Reflection shine */}
       <div className="absolute top-2 left-4 w-10 h-6 bg-white/20 rounded-full blur-md rotate-[-45deg] z-20"></div>
       
       {/* Balls */}
       <div className="relative w-full h-full">
          <div className="absolute top-[40%] left-[40%] w-8 h-8 rounded-full bg-gradient-to-br from-neon-pink to-purple-800 shadow-inner animate-bounce-1 z-10 flex items-center justify-center border border-white/30">
             <span className="text-[8px] font-bold text-white">?</span>
          </div>
          <div className="absolute top-[50%] left-[30%] w-7 h-7 rounded-full bg-gradient-to-br from-neon-blue to-blue-900 shadow-inner animate-bounce-2 z-0 flex items-center justify-center border border-white/30">
          </div>
          <div className="absolute top-[30%] left-[50%] w-6 h-6 rounded-full bg-gradient-to-br from-neon-yellow to-yellow-800 shadow-inner animate-bounce-3 z-0 flex items-center justify-center border border-white/30">
          </div>
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-10"></div>
       </div>
    </div>
  </div>
);

// --- Custom Manager ---
const CustomManager: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<ContentType>('DARE');
  const [customItems, setCustomItems] = useState<GameContent[]>([]);
  const [inputText, setInputText] = useState('');

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('nightmode_custom_content');
    if (saved) {
      setCustomItems(JSON.parse(saved));
    }
  }, []);

  // Save to local storage whenever items change
  useEffect(() => {
    localStorage.setItem('nightmode_custom_content', JSON.stringify(customItems));
  }, [customItems]);

  const handleAdd = () => {
    if (!inputText.trim()) return;
    const newItem: GameContent = {
      id: Date.now(),
      text: inputText,
      type: activeTab,
      category: 'custom',
      isCustom: true
    };
    setCustomItems(prev => [newItem, ...prev]);
    setInputText('');
  };

  const handleDelete = (id: string | number) => {
    setCustomItems(prev => prev.filter(item => item.id !== id));
  };

  const addInspiration = (text: string) => {
    const newItem: GameContent = {
      id: Date.now(),
      text: text,
      type: activeTab,
      category: 'custom',
      isCustom: true
    };
    setCustomItems(prev => [newItem, ...prev]);
  };

  const filteredItems = customItems.filter(item => item.type === activeTab);

  const inspirations = activeTab === 'DARE' ? [
    "用屁股寫字", "對隔壁的人撒嬌", "模仿猩猩五秒", "跟Siri告白"
  ] : [
    "你最想回到哪個時候?", "你曾經喜歡過在場的人嗎?", "你最後悔的一件事?", "你討厭在場誰?"
  ];

  return (
    <div className="flex flex-col h-full max-w-2xl mx-auto w-full px-4 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack}><ArrowLeft className="text-gray-400" /></button>
        <div>
           <h2 className="text-2xl font-bold">客製化內容</h2>
           <p className="text-xs text-gray-500">Custom Pack</p>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <button 
          onClick={() => setActiveTab('DARE')}
          className={`flex-1 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'DARE' ? 'bg-neon-pink text-black shadow-lg shadow-neon-pink/20' : 'bg-white/5 text-gray-400'}`}
        >
          <Zap size={18} /> 大冒險
        </button>
        <button 
          onClick={() => setActiveTab('TRUTH')}
          className={`flex-1 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'TRUTH' ? 'bg-neon-blue text-black shadow-lg shadow-neon-blue/20' : 'bg-white/5 text-gray-400'}`}
        >
          <MessageCircle size={18} /> 真心話
        </button>
      </div>

      <div className="glass-panel p-4 rounded-xl mb-6">
        <div className="flex gap-2 mb-4">
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`輸入你的${activeTab === 'DARE' ? '大冒險' : '真心話'}...`}
            className="flex-1 bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          />
          <button onClick={handleAdd} className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors">
            <Plus size={24} />
          </button>
        </div>

        {/* Quick Add / Inspiration */}
        <div className="flex flex-wrap gap-2 mb-2">
          <div className="flex items-center gap-1 text-xs text-neon-yellow mr-2">
            <Lightbulb size={12} /> <span>靈感:</span>
          </div>
          {inspirations.map((insp, idx) => (
             <button key={idx} onClick={() => addInspiration(insp)} className="text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-300 transition-colors">
               {insp}
             </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pb-20">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p>還沒有自訂的{activeTab === 'DARE' ? '大冒險' : '真心話'}</p>
            <p className="text-xs mt-2">上方輸入即可新增到轉盤中</p>
          </div>
        ) : (
          filteredItems.map(item => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-transparent hover:border-white/10 group">
              <span className="font-medium text-gray-200">{item.text}</span>
              <button onClick={() => handleDelete(item.id)} className="text-gray-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// --- Sub-Screens ---

const PlayerSelection: React.FC<{ onSelect: (n: number) => void }> = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] animate-fade-in relative z-10">
      <div className="mb-12 relative">
        <div className="absolute -inset-4 bg-neon-purple/20 blur-xl rounded-full"></div>
        <Users size={64} className="text-neon-purple relative z-10" />
      </div>
      <SectionTitle title="有多少人?" subtitle="How many players?" />
      
      {/* Updated Grid to remove "3" option */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-2xl px-4">
        {[1, 2, 4].map((num) => (
          <Button key={num} onClick={() => onSelect(num)} variant="glass" className="flex flex-col items-center justify-center h-32">
            <span className="text-4xl mb-2">{num}</span>
            <span className="text-xs uppercase text-gray-400">{num === 4 ? '4+' : ''} People</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

const ModeSelection: React.FC<{ onSelect: (mode: 'MIX' | 'GAME') => void; onBack: () => void; onCustom: () => void }> = ({ onSelect, onBack, onCustom }) => {
  return (
    <div className="flex flex-col h-full px-4 relative z-10">
       {/* Top Bar for Custom Button: Use normal flow to avoid overlapping */}
      <div className="w-full flex justify-end mb-4">
        <button onClick={onCustom} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10 z-10">
          <Settings size={14} /> 客製化內容
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh]">
        <SectionTitle title="現在狀況?" subtitle="Current Status" />
        
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl">
          <Button onClick={() => onSelect('MIX')} variant="glass" className="flex-1 h-64 flex flex-col items-center justify-center group">
            <div className="p-4 rounded-full bg-neon-blue/10 mb-6 group-hover:scale-110 transition-transform">
              <Martini size={48} className="text-neon-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-2">先調酒</h3>
            <p className="text-gray-400 text-sm">Mixology Guide</p>
            <p className="text-xs text-gray-500 mt-4">超商調酒推薦</p>
          </Button>

          <Button onClick={() => onSelect('GAME')} variant="glass" className="flex-1 h-64 flex flex-col items-center justify-center group">
            <div className="p-4 rounded-full bg-neon-pink/10 mb-6 group-hover:scale-110 transition-transform">
              <Gamepad2 size={48} className="text-neon-pink" />
            </div>
            <h3 className="text-2xl font-bold mb-2">已有酒</h3>
            <p className="text-gray-400 text-sm">Start Game</p>
            <p className="text-xs text-gray-500 mt-4">熱門喝酒遊戲</p>
          </Button>
        </div>
        
        <button onClick={onBack} className="mt-12 text-gray-500 hover:text-white flex items-center gap-2">
          <ArrowLeft size={20} /> Back
        </button>
      </div>
    </div>
  );
};

const Mixology: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [recipe, setRecipe] = useState(COCKTAILS[0]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [history, setHistory] = useState<string[]>([]); // Track recent cocktails to avoid repeats

  const getRandomCocktail = () => {
    // Filter out cocktails that are in the history
    const available = COCKTAILS.filter(c => !history.includes(c.id));
    
    // If we've exhausted options (or history is full), clear history or just pick any
    let next: Cocktail;
    if (available.length === 0) {
      setHistory([]); // Reset history if looped through all (or many)
      next = COCKTAILS[Math.floor(Math.random() * COCKTAILS.length)];
    } else {
      next = available[Math.floor(Math.random() * available.length)];
    }
    return next;
  };

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    let count = 0;
    
    // Visual shuffle
    const interval = setInterval(() => {
      setRecipe(COCKTAILS[Math.floor(Math.random() * COCKTAILS.length)]);
      count++;
      if (count > 8) {
        clearInterval(interval);
        
        // Final Selection Logic
        const finalSelection = getRandomCocktail();
        setRecipe(finalSelection);
        setHistory(prev => {
          const newHistory = [...prev, finalSelection.id];
          // Keep history size reasonable (e.g., last 5)
          if (newHistory.length > 5) newHistory.shift();
          return newHistory;
        });

        setIsSpinning(false);
      }
    }, 100);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-8 relative z-10">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack}><ArrowLeft className="text-gray-400 hover:text-white" /></button>
        <h2 className="text-xl font-bold text-neon-blue">今日特調</h2>
        <div className="w-6"></div>
      </div>

      <div className="relative">
        <div className={`transition-all duration-300 ${isSpinning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
          <Card className="min-h-[400px] flex flex-col items-center text-center justify-between border-neon-blue/30">
            <div className="w-full">
              <div className="w-20 h-20 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Martini size={40} className="text-neon-blue" />
              </div>
              <h1 className="text-3xl font-bold mb-1">{recipe.name}</h1>
              <p className="text-neon-blue text-sm mb-6 font-mono">{recipe.engName}</p>
              
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {recipe.tags.map(t => (
                  <span key={t} className="px-2 py-1 bg-white/5 rounded text-xs border border-white/10">{t}</span>
                ))}
              </div>

              {/* Ratios Display (New Horizontal Layout) */}
              <div className="w-full bg-black/40 p-6 rounded-xl mb-4 border border-white/5">
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-8 text-center">黃金比例 Golden Ratio</h3>
                
                {/* Horizontal Container */}
                <div className="flex justify-around items-end gap-2 min-h-[200px]">
                  {recipe.ingredients.map((ing, idx) => {
                    // Calculate visual height based on ratio, maxing out at roughly 100px for the largest part
                    const maxRatio = Math.max(...recipe.ingredients.map(i => Number(i.ratio)));
                    const barHeight = (Number(ing.ratio) / maxRatio) * 80 + 20; // Min 20px, variable up to 100px
                    
                    return (
                      <div key={idx} className="flex flex-col items-center flex-1">
                        {/* Ingredient Name (Top) */}
                        <div className="text-xs md:text-sm font-medium text-gray-300 mb-2 h-8 flex items-end text-center leading-tight">
                          {ing.name}
                        </div>
                        
                        {/* The Neon Bar (Middle) */}
                        <div className="w-full max-w-[40px] bg-gray-800/50 rounded-t-lg relative overflow-hidden flex-shrink-0 border-x border-t border-white/10" style={{ height: '100px' }}>
                           <div 
                             className="absolute bottom-0 w-full bg-gradient-to-t from-neon-blue to-neon-purple shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all duration-500 ease-out" 
                             style={{ height: `${barHeight}px` }}
                           >
                             <div className="absolute top-0 w-full h-[2px] bg-white/50"></div>
                           </div>
                        </div>

                        {/* Huge Number (Bottom) */}
                        <div className="text-4xl font-bold text-white mt-3 font-mono drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                          {ing.ratio}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            <p className="mt-4 text-gray-300 italic text-sm border-t border-white/10 pt-4 w-full">"{recipe.description}"</p>
          </Card>
        </div>
      </div>

      <Button onClick={spin} className="w-full mt-6" disabled={isSpinning}>
        <div className="flex items-center justify-center gap-2">
          <RefreshCcw className={isSpinning ? 'animate-spin' : ''} />
          換一杯 Mix Another
        </div>
      </Button>
    </div>
  );
};

// --- Custom SVGs ---

// Evil Devil Tail Pointer (Pointing Outwards/UP) - Refined Style
const DevilPointer: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 150" className={className} style={{ overflow: 'visible', filter: 'drop-shadow(0px 0px 8px rgba(220, 38, 38, 0.8))' }}>
    <defs>
      <linearGradient id="magma" x1="50%" y1="100%" x2="50%" y2="0%">
        <stop offset="0%" stopColor="#450a0a" /> {/* Dark Red */}
        <stop offset="40%" stopColor="#dc2626" /> {/* Red */}
        <stop offset="100%" stopColor="#fca5a5" /> {/* Light Red/White hot */}
      </linearGradient>
    </defs>
    
    {/* The Tail Shaft - Curved and Spiked */}
    <path 
      d="M 50 140 
         C 65 120, 30 100, 50 80 
         C 70 60, 45 40, 50 25" 
      fill="none" 
      stroke="url(#magma)" 
      strokeLinecap="round"
      strokeWidth="6"
    />

    {/* The Arrowhead - Forked/Barb style */}
    <path 
      d="M 50 5 
         L 65 35 
         L 50 28 
         L 35 35 
         Z" 
      fill="#b91c1c"
      stroke="#fca5a5"
      strokeWidth="2"
    />
    
    {/* Glowing Core */}
    <circle cx="50" cy="15" r="3" fill="#fff" className="animate-pulse" />
  </svg>
);

// Sci-Fi Standard Pointer (Pointing Outwards/UP)
const StandardPointer: React.FC<{ className?: string; colorClass?: string }> = ({ className, colorClass = "text-neon-blue" }) => (
  <svg viewBox="0 0 100 100" className={`${className} ${colorClass}`} fill="currentColor">
    {/* Arrow pointing up */}
    <path d="M50 0 L 90 80 L 50 60 L 10 80 Z" />
    <circle cx="50" cy="70" r="5" className="text-white" />
  </svg>
);

// Solo Mode Random Quotes
const SOLO_QUOTES = [
  "Me, Myself & I.",
  "Solo Leveling...",
  "Cheaper Bar Tab.",
  "No Drama, Just Vodka.",
  "VIP of Lonely Club.",
  "Master of my Destiny.",
  "Drinking for One.",
  "Self-Love (with Alcohol).",
  "More for Me.",
  "Date Night with Me."
];

const DareWheel: React.FC<{ onClose: () => void; playerCount: number }> = ({ onClose, playerCount }) => {
  const [currentContent, setCurrentContent] = useState<GameContent | null>(null);
  const [spinning, setSpinning] = useState(false);
  // Increase history history to 50 to avoid repeats within 50 spins
  const [history, setHistory] = useState<GameContent[]>([]);
  const [customItems, setCustomItems] = useState<GameContent[]>([]);
  const [mode, setMode] = useState<'MIX' | 'DARE' | 'TRUTH'>('MIX');
  const [is18Plus, setIs18Plus] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [sectorHistory, setSectorHistory] = useState<number[]>([]); // Track recent visual sectors
  const [activeLight, setActiveLight] = useState<'left' | 'right' | null>(null); // For 2-player mode
  const [soloQuote, setSoloQuote] = useState("DRAWING..."); // Quote for solo mode

  const isSolo = playerCount === 1;
  const isTwoPlayer = playerCount === 2;

  useEffect(() => {
    const saved = localStorage.getItem('nightmode_custom_content');
    if (saved) {
      setCustomItems(JSON.parse(saved));
    }
  }, []);

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    setCurrentContent(null);
    setActiveLight(null);

    // If Solo Mode, pick a random quote for the animation
    if (isSolo) {
      setSoloQuote(SOLO_QUOTES[Math.floor(Math.random() * SOLO_QUOTES.length)]);
    }
    
    // Construct pools
    let poolGeneral: GameContent[] = [];
    let poolR18: GameContent[] = [];
    
    const systemDares = DARES.filter(d => d.category !== 'r18');
    const systemTruths = TRUTHS.filter(t => t.category !== 'r18');
    const systemR18Dares = DARES.filter(d => d.category === 'r18');
    const systemR18Truths = TRUTHS.filter(t => t.category === 'r18');
    const myDares = customItems.filter(i => i.type === 'DARE');
    const myTruths = customItems.filter(i => i.type === 'TRUTH');
    
    // --- POOL SELECTION ---
    if (isSolo) {
       poolGeneral = [...SOLO_CONTENT, ...myDares];
    } else if (isTwoPlayer) {
       // Use dedicated 2-player content + custom items
       const twoPlayerBase = TWO_PLAYER_CONTENT.filter(item => {
          if (!is18Plus && item.category === 'r18') return false;
          return true;
       });
       // Add custom items (assuming they work for 2 players since user added them)
       poolGeneral = [...twoPlayerBase, ...customItems];
       if (poolGeneral.length === 0) poolGeneral = twoPlayerBase; // Fallback
    } else {
       // Normal Multi-player
       if (mode === 'DARE') {
         poolGeneral = [...systemDares, ...myDares];
         poolR18 = [...systemR18Dares];
       } else if (mode === 'TRUTH') {
         poolGeneral = [...systemTruths, ...myTruths];
         poolR18 = [...systemR18Truths];
       } else {
         poolGeneral = [...systemDares, ...systemTruths, ...customItems];
         poolR18 = [...systemR18Dares, ...systemR18Truths];
       }
    }
    
    if (poolGeneral.length === 0 && !isTwoPlayer) poolGeneral = DARES.filter(d => d.category !== 'r18');
    if (poolR18.length === 0 && !isTwoPlayer) poolR18 = poolGeneral;

    // --- VISUAL LOGIC ---
    if (isTwoPlayer) {
      // 2-Player "Light Switching" Animation
      let count = 0;
      const interval = setInterval(() => {
        setActiveLight(prev => prev === 'left' ? 'right' : 'left');
        count++;
        // Stop after some toggles
        if (count > 20) {
          clearInterval(interval);
          // Determine final light randomly
          setActiveLight(Math.random() > 0.5 ? 'left' : 'right');
          finishSpin(poolGeneral, poolR18);
        }
      }, 150); // Speed of blink

    } else {
      // Wheel Animation (Solo or 4+)
      // Divide circle into 8 sectors. Try to pick unvisited ones from last 4 spins.
      const sectors = [0, 1, 2, 3, 4, 5, 6, 7];
      const recentSectors = sectorHistory.slice(-4);
      const availableSectors = sectors.filter(s => !recentSectors.includes(s));
      
      let targetSector;
      if (availableSectors.length > 0) {
        targetSector = availableSectors[Math.floor(Math.random() * availableSectors.length)];
      } else {
        targetSector = Math.floor(Math.random() * 8);
      }

      setSectorHistory(prev => [...prev, targetSector].slice(-10));

      // Calculate angle
      const sectorAngle = 360 / 8;
      const offset = Math.random() * (sectorAngle - 10) + 5; 
      const targetAngleBase = (targetSector * sectorAngle) + offset;
      
      const extraSpins = 360 * (5 + Math.floor(Math.random() * 3));
      const newTotalRotation = rotation + extraSpins + (360 - (rotation % 360)) + targetAngleBase;

      setRotation(newTotalRotation);
      
      // Timer to finish
      setTimeout(() => {
        finishSpin(poolGeneral, poolR18);
      }, 3000);
    }
  };

  const finishSpin = (poolGeneral: GameContent[], poolR18: GameContent[]) => {
      let candidatePool: GameContent[] = [];
      
      // Determine which pool to draw from (for Multiplayer/2P if 18+ is on)
      if (is18Plus && !isSolo) {
         // 65% chance for R18 if poolR18 exists
         if (Math.random() < 0.65 && poolR18.length > 0) {
            candidatePool = poolR18;
         } else {
            candidatePool = poolGeneral;
         }
      } else {
         candidatePool = poolGeneral;
      }

      // Filter out items present in the last 20 history entries to avoid repeats (STRICT NO REPEAT)
      const historyIds = history.map(h => h.id);
      const availableCandidates = candidatePool.filter(item => !historyIds.includes(item.id));

      // If we've exhausted everything (unlikely with big list, but possible), reset pool usage or just pick random
      const finalPool = availableCandidates.length > 0 ? availableCandidates : candidatePool;
      
      const finalContent = finalPool[Math.floor(Math.random() * finalPool.length)];

      setCurrentContent(finalContent);
      setHistory(prev => [finalContent, ...prev].slice(0, 20)); // Store up to 20 for non-repeat logic
      setSpinning(false);
  };

  const themeColor = mode === 'TRUTH' && !isSolo && !isTwoPlayer ? 'text-neon-blue' : 
                   (mode === 'DARE' || isSolo || isTwoPlayer) ? 'text-neon-pink' : 
                   'text-neon-purple';

  const wheelGradient = is18Plus 
    ? 'conic-gradient(from 0deg, #1a0505, #7f1d1d, #000000, #991b1b, #2d0a0a, #7f1d1d, #1a0505)' 
    : (mode === 'TRUTH' 
        ? 'conic-gradient(from 0deg, #020617, #00f3ff, #020617, #0088ff, #020617, #00f3ff, #020617)' 
        : 'conic-gradient(from 0deg, #1a0515, #ff00ff, #000000, #bc13fe, #1a0515, #ff00ff, #1a0515)');

  return (
    <div className="flex flex-col items-center h-full w-full max-w-lg mx-auto relative z-10">
      {/* Explicit Back Button for DareWheel to fix missing navigation issue */}
      <div className="absolute top-0 left-0 z-50 p-2">
        <button 
          onClick={onClose} 
          className="p-3 bg-black/50 backdrop-blur-md rounded-full text-gray-300 hover:text-white border border-white/20 hover:border-white shadow-lg transition-all"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      {is18Plus && <SensualEffect />}

      <div className="text-center mb-6 w-full relative z-20 mt-8">
        <h2 className={`text-3xl font-bold mb-2 transition-colors duration-500 ${themeColor} drop-shadow-md`}>
          {isSolo ? '單人挑戰 Solo Mode' : isTwoPlayer ? '雙人對決 Duel Mode' : (mode === 'TRUTH' ? '真心話' : mode === 'DARE' ? '大冒險' : '命運轉盤')}
        </h2>
        
        {/* Skip Rule - Now placed below the title */}
        {!isSolo && (
          <div className="w-full max-w-sm mx-auto text-center animate-pulse mb-3">
             <p className="text-xs md:text-sm text-yellow-500/80 font-mono border-y border-yellow-500/20 py-1 bg-yellow-500/5">
               ⚠ 嚴格執行：若跳過 (Skip) 3次 <span className="text-white">→</span> 今日全桌買單
             </p>
          </div>
        )}

        {!isSolo && !isTwoPlayer && (
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2 justify-center mt-2">
              <button onClick={() => setMode('DARE')} className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${mode === 'DARE' ? 'bg-neon-pink text-black border-neon-pink' : 'border-white/20 text-gray-400'}`}>大冒險 Only</button>
              <button onClick={() => setMode('MIX')} className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${mode === 'MIX' ? 'bg-neon-purple text-black border-neon-purple' : 'border-white/20 text-gray-400'}`}>混合 Mix</button>
              <button onClick={() => setMode('TRUTH')} className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${mode === 'TRUTH' ? 'bg-neon-blue text-black border-neon-blue' : 'border-white/20 text-gray-400'}`}>真心話 Only</button>
            </div>
            
            <button 
              onClick={() => setIs18Plus(!is18Plus)} 
              className={`flex items-center gap-2 px-6 py-2 rounded-full border-2 transition-all duration-300 text-xs font-bold tracking-widest ${is18Plus ? 'bg-gradient-to-r from-red-950 to-black text-red-500 border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.5)] scale-105' : 'bg-black/40 text-gray-500 border-gray-700'}`}
            >
              {is18Plus ? <Flame size={16} className="animate-pulse" /> : <Lock size={14} />}
              {is18Plus ? '18+ EVIL MODE ACTIVE' : '18+ MODE OFF'}
            </button>
          </div>
        )}

        {isTwoPlayer && (
             <button 
              onClick={() => setIs18Plus(!is18Plus)} 
              className={`mt-2 flex items-center gap-2 px-6 py-2 rounded-full border-2 transition-all duration-300 text-xs font-bold tracking-widest mx-auto ${is18Plus ? 'bg-gradient-to-r from-red-950 to-black text-red-500 border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.5)] scale-105' : 'bg-black/40 text-gray-500 border-gray-700'}`}
            >
              {is18Plus ? <Flame size={16} className="animate-pulse" /> : <Lock size={14} />}
              {is18Plus ? '18+ EVIL MODE ACTIVE' : '18+ MODE OFF'}
            </button>
        )}
      </div>

      <div className="relative w-full flex flex-col items-center mb-8 mt-4">
        
        {isSolo ? (
          /* --- SOLO MODE UI --- */
          <div className="relative w-full max-w-[320px] aspect-[3/4] my-2 perspective-1000">
             {/* ... Same Solo Card UI ... */}
             <div className={`relative w-full h-full duration-500 transition-all ${spinning ? 'animate-pulse scale-95' : 'scale-100'}`}>
               <div className="absolute inset-0 bg-black/60 backdrop-blur-xl border-2 border-neon-pink rounded-3xl shadow-[0_0_40px_rgba(255,0,255,0.15)] flex flex-col overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-pink to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-pink to-transparent"></div>
                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center relative z-10">
                     {spinning ? (
                       <div className="flex flex-col items-center justify-center h-full w-full">
                         {/* REPLACED SPIN ICON WITH LOTTO MACHINE ANIMATION */}
                         <LottoMachine />
                         
                         {/* Enhanced Solo Animation Text */}
                         <div className="animate-pulse-fast mt-4">
                           <span className="text-xl font-bold tracking-widest text-white/90 uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] leading-tight">{soloQuote}</span>
                         </div>
                       </div>
                     ) : currentContent ? (
                       <div className="animate-fade-in flex flex-col items-center h-full justify-center">
                         <div className="w-16 h-16 rounded-full bg-neon-pink/10 flex items-center justify-center mb-6 border border-neon-pink/30 shadow-[0_0_15px_rgba(255,0,255,0.3)]">
                            <Zap size={32} className="text-neon-pink" />
                         </div>
                         <h3 className="text-2xl font-bold mb-4 leading-relaxed">{currentContent.text}</h3>
                         <p className="text-sm text-gray-400 border-t border-white/10 pt-4 mt-2 w-full">{currentContent.engText}</p>
                       </div>
                     ) : (
                       <div className="flex flex-col items-center opacity-60">
                          <div className="mb-6"><Dices size={64} className="text-gray-400" /></div>
                          <h3 className="text-3xl font-bold text-white mb-2 tracking-wider">命運抽籤</h3>
                          <p className="text-sm text-gray-400 uppercase tracking-widest">Draw Your Destiny</p>
                       </div>
                     )}
                  </div>
               </div>
             </div>
          </div>
        ) : isTwoPlayer ? (
          /* --- 2-PLAYER UI: LIGHTS & CARD --- */
          <div className="w-full max-w-md flex flex-col items-center">
            {/* The Two Lights */}
            <div className="flex justify-between w-full px-12 mb-8 gap-8">
               {/* Left Light (e.g., Player 1) */}
               <div className={`flex-1 flex flex-col items-center transition-all duration-100 ${activeLight === 'left' ? 'scale-110' : 'scale-100 opacity-30'}`}>
                  <div className={`w-20 h-20 rounded-full border-4 ${activeLight === 'left' ? 'bg-neon-blue border-white shadow-[0_0_50px_#00f3ff]' : 'bg-transparent border-gray-700'}`}></div>
                  <span className="mt-2 text-xs font-bold uppercase tracking-widest text-neon-blue">Left / Player A</span>
               </div>

               {/* Right Light (e.g., Player 2) */}
               <div className={`flex-1 flex flex-col items-center transition-all duration-100 ${activeLight === 'right' ? 'scale-110' : 'scale-100 opacity-30'}`}>
                  <div className={`w-20 h-20 rounded-full border-4 ${activeLight === 'right' ? 'bg-neon-pink border-white shadow-[0_0_50px_#ff00ff]' : 'bg-transparent border-gray-700'}`}></div>
                  <span className="mt-2 text-xs font-bold uppercase tracking-widest text-neon-pink">Right / Player B</span>
               </div>
            </div>

            {/* Content Area */}
            <div className="w-full glass-panel rounded-2xl p-6 min-h-[200px] flex items-center justify-center text-center relative overflow-hidden">
               {spinning ? (
                  <p className="text-xl font-bold animate-pulse tracking-widest">SELECTING...</p>
               ) : currentContent ? (
                  <div className="animate-fade-in relative z-10 w-full">
                     <div className="absolute -top-4 -right-4 text-white/5"><Dices size={100} /></div>
                     <div className="mb-4 flex justify-center">
                        {currentContent.category === 'r18' ? <Flame className="text-red-500" size={32} /> : 
                         currentContent.category === 'drinking' ? <Martini className="text-neon-yellow" size={32} /> : 
                         <Zap className="text-white" size={32} />}
                     </div>
                     <h3 className="text-2xl font-bold mb-3">{currentContent.text}</h3>
                     <p className="text-sm text-gray-400">{currentContent.engText}</p>
                     
                     {/* Indicator of who does it based on light */}
                     {activeLight && (
                       <div className={`mt-6 py-1 px-4 rounded-full text-xs font-bold inline-block ${activeLight === 'left' ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue' : 'bg-neon-pink/20 text-neon-pink border border-neon-pink'}`}>
                          {activeLight === 'left' ? '👈 LEFT PLAYER ACTION' : '👉 RIGHT PLAYER ACTION'}
                       </div>
                     )}
                  </div>
               ) : (
                  <div className="opacity-50">
                    <Zap size={48} className="mx-auto mb-2" />
                    <p>Press Spin to Challenge</p>
                  </div>
               )}
            </div>
          </div>
        ) : (
          /* --- MULTIPLAYER UI: WHEEL & POINTER (Existing) --- */
          <div className="relative w-[300px] h-[300px] md:w-[320px] md:h-[320px] my-6">
            <div 
               className="absolute inset-0 rounded-full border-4 border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-transform duration-[3000ms] cubic-bezier(0.1, 0.7, 0.1, 1)"
               style={{ 
                 transform: `rotate(${rotation}deg)`,
                 background: wheelGradient
               }}
            >
              <div className="absolute inset-0 rounded-full opacity-30 bg-[repeating-conic-gradient(transparent_0deg_10deg,rgba(0,0,0,0.5)_10deg_20deg)]"></div>
              <div className="absolute inset-[10%] bg-black/80 rounded-full backdrop-blur-sm"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[85%] z-30 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
                 {is18Plus ? <DevilPointer className="w-16 h-24 text-red-600" /> : <StandardPointer className="w-16 h-16" colorClass={themeColor} />}
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none p-10">
              {currentContent && !spinning ? (
                <div className="animate-fade-in text-center flex flex-col items-center justify-center h-full w-full">
                  <div className={`mb-3 ${currentContent.type === 'TRUTH' ? 'text-neon-blue' : is18Plus && currentContent.category === 'r18' ? 'text-red-500' : 'text-neon-pink'}`}>
                    {currentContent.category === 'r18' ? <Flame size={32} className="animate-bounce" /> : 
                     currentContent.type === 'TRUTH' ? <MessageCircle size={32} /> : 
                     currentContent.category === 'drinking' ? <Martini size={32} /> : <Zap size={32} />}
                  </div>
                  <div className="mb-2">
                     {currentContent.category === 'r18' && <span className="text-[10px] font-bold bg-red-900 text-red-100 px-2 py-1 rounded border border-red-500 mr-2">18+</span>}
                     <span className="text-[10px] uppercase tracking-wider text-gray-500 border border-gray-700 px-2 py-1 rounded">{currentContent.type}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight mb-2 drop-shadow-lg break-words w-full">{currentContent.text}</h3>
                  <p className="text-xs text-gray-400 font-light">{currentContent.engText}</p>
                </div>
              ) : (
                 <div className={`text-center transition-opacity duration-300 ${spinning ? 'opacity-100' : 'opacity-50'}`}>
                   <p className="text-lg font-bold tracking-[0.2em]">{spinning ? 'SPINNING...' : 'TAP SPIN'}</p>
                 </div>
              )}
            </div>
          </div>
        )}
      </div>

      <Button 
        onClick={spinWheel} 
        disabled={spinning} 
        className="w-full mb-6" 
        variant={is18Plus ? 'evil' : spinning ? 'secondary' : 'primary'}
      >
        {spinning ? (isSolo ? 'DRAWING...' : 'SPINNING...') : (isSolo ? 'DRAW CARD' : 'SPIN')}
      </Button>

      {history.length > 0 && (
        <div className="w-full glass-panel rounded-xl p-4 mt-6">
          <h4 className="text-xs text-gray-500 uppercase mb-3">Recent</h4>
          <div className="space-y-3">
             {history.slice(1, 4).map((d, i) => (
               <div key={i} className="flex items-center gap-3 text-sm text-gray-400 border-b border-white/5 pb-2 last:border-0">
                 <span className={`w-1 h-1 rounded-full ${d.type === 'TRUTH' ? 'bg-neon-blue' : 'bg-neon-pink'} ${d.category === 'r18' ? 'bg-red-500' : ''}`}></span>
                 <span>{d.text}</span>
               </div>
             ))}
          </div>
        </div>
      )}
    </div>
  );
};

const GameDetails: React.FC<{ game: GameRule; playerCount: number; onBack: () => void }> = ({ game, playerCount, onBack }) => {
  const Icon = IconMap[game.icon] || Info;

  if (game.isWheel) {
    return <DareWheel onClose={onBack} playerCount={playerCount} />;
  }

  return (
    <div className="flex flex-col h-full max-w-2xl mx-auto px-4 relative z-10 pb-20">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-white/10 transition-colors">
          <ArrowLeft className="text-gray-400" />
        </button>
        <h2 className="text-xl font-bold text-neon-blue">{game.title}</h2>
      </div>

      <div className="glass-panel p-6 rounded-2xl mb-6 border-neon-blue/20">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-neon-blue/10 rounded-xl">
             <Icon size={32} className="text-neon-blue" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{game.title}</h1>
            <p className="text-sm text-gray-400">{game.subtitle}</p>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6 italic border-l-2 border-neon-pink pl-4">
          {game.description}
        </p>

        <div className="space-y-4">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">How to Play</h3>
          <ul className="space-y-3">
            {game.detailedSteps.map((step, idx) => (
              <li key={idx} className="flex gap-3 text-gray-200 text-sm leading-relaxed">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs font-mono text-gray-400 border border-white/10">{idx + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Footer / Action */}
      <div className="mt-auto">
         <p className="text-center text-xs text-gray-500 mb-4">
           {playerCount < game.minPlayers ? `⚠️ 建議人數: ${game.minPlayers}人以上` : `目前人數: ${playerCount}人 (符合)`}
         </p>
         <Button onClick={onBack} variant="secondary" className="w-full">
           結束遊戲 End Game
         </Button>
      </div>
    </div>
  );
};

const GameMenu: React.FC<{ onSelect: (g: GameRule) => void; onBack: () => void; playerCount: number }> = ({ onSelect, onBack, playerCount }) => {
  // Filter games based on player count
  const availableGames = GAMES.filter(game => playerCount >= game.minPlayers);

  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="flex items-center gap-4 mb-2 px-4">
        <button onClick={onBack}><ArrowLeft className="text-gray-400" /></button>
        <SectionTitle title="選擇遊戲" subtitle="Select Game" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-20 overflow-y-auto">
        {availableGames.map(game => {
          const Icon = IconMap[game.icon] || Info;
          return (
            <Card key={game.id} onClick={() => onSelect(game)} className="flex items-center gap-4 group hover:border-neon-blue/50 border border-transparent">
              <div className="p-4 rounded-xl bg-white/5 group-hover:bg-neon-blue/20 transition-colors">
                <Icon size={32} className="text-gray-300 group-hover:text-neon-blue transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-100 group-hover:text-white">{game.title}</h3>
                <p className="text-xs text-gray-500">{game.subtitle}</p>
              </div>
              <ChevronRight className="text-gray-600 group-hover:text-neon-blue" />
            </Card>
          );
        })}
        {availableGames.length === 0 && (
          <div className="col-span-1 md:col-span-2 text-center text-gray-500 py-10">
             <p>沒有適合此人數的遊戲</p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    playerCount: 0,
    currentScreen: 'PLAYER_SELECT',
    selectedGame: null,
  });

  const setPlayerCount = (n: number) => {
    setGameState(prev => ({ ...prev, playerCount: n, currentScreen: 'MODE_SELECT' }));
  };

  const handleModeSelect = (mode: 'MIX' | 'GAME') => {
    if (mode === 'MIX') {
      setGameState(prev => ({ ...prev, currentScreen: 'MIXOLOGY' }));
    } else {
      // Logic Update: If 1 player, skip game menu and go directly to Wheel (Solo Mode)
      if (gameState.playerCount === 1) {
        const wheelGame = GAMES.find(g => g.id === 'wheel');
        if (wheelGame) {
          setGameState(prev => ({ ...prev, selectedGame: wheelGame, currentScreen: 'PLAYING' }));
        } else {
          // Fallback if wheel not found
           setGameState(prev => ({ ...prev, currentScreen: 'GAME_MENU' }));
        }
      } else {
        setGameState(prev => ({ ...prev, currentScreen: 'GAME_MENU' }));
      }
    }
  };

  const selectGame = (game: GameRule) => {
    setGameState(prev => ({ ...prev, selectedGame: game, currentScreen: 'PLAYING' }));
  };

  const goBack = () => {
    setGameState(prev => {
      if (prev.currentScreen === 'PLAYING') {
         // If we are in solo mode (player count 1), back goes to Mode Select, not Game Menu
         if (prev.playerCount === 1) return { ...prev, currentScreen: 'MODE_SELECT', selectedGame: null };
         return { ...prev, currentScreen: 'GAME_MENU', selectedGame: null };
      }
      if (prev.currentScreen === 'GAME_MENU') return { ...prev, currentScreen: 'MODE_SELECT' };
      if (prev.currentScreen === 'MIXOLOGY') return { ...prev, currentScreen: 'MODE_SELECT' };
      if (prev.currentScreen === 'MODE_SELECT') return { ...prev, currentScreen: 'PLAYER_SELECT', playerCount: 0 };
      if (prev.currentScreen === 'CUSTOM_MANAGER') return { ...prev, currentScreen: 'MODE_SELECT' };
      return prev;
    });
  };
  
  const openCustomManager = () => {
    setGameState(prev => ({ ...prev, currentScreen: 'CUSTOM_MANAGER' }));
  };

  // Background style
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-neon-blue/30 overflow-x-hidden relative">
      <GlobalStyles />
      
      {/* 1. Background Elements (Lowest Z-Index) */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black z-0"></div>
      <div className="fixed top-0 left-0 right-0 h-[500px] bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <BackgroundWatermark />

      {/* 2. Main Content (Middle Z-Index) */}
      <main className="relative z-10 min-h-screen pt-20 md:pt-24 pb-20 max-w-4xl mx-auto flex flex-col">
        {/* Added padding-top to avoid overlapping with fixed branding header */}
        
        {gameState.currentScreen === 'PLAYER_SELECT' && (
          <PlayerSelection onSelect={setPlayerCount} />
        )}

        {gameState.currentScreen === 'MODE_SELECT' && (
          <ModeSelection onSelect={handleModeSelect} onBack={goBack} onCustom={openCustomManager} />
        )}

        {gameState.currentScreen === 'CUSTOM_MANAGER' && (
          <CustomManager onBack={goBack} />
        )}

        {gameState.currentScreen === 'MIXOLOGY' && (
          <Mixology onBack={goBack} />
        )}

        {gameState.currentScreen === 'GAME_MENU' && (
          <GameMenu onSelect={selectGame} onBack={goBack} playerCount={gameState.playerCount} />
        )}

        {gameState.currentScreen === 'PLAYING' && gameState.selectedGame && (
          <GameDetails 
            game={gameState.selectedGame} 
            playerCount={gameState.playerCount} 
            onBack={goBack} 
          />
        )}
      </main>

      {/* 3. Overlays (Highest Z-Index) */}
      <BrandingOverlay />
      <Credits />
      <AdBanner />
    </div>
  );
};

export default App;