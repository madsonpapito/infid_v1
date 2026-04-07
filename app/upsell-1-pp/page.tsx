"use client";

import { useState, useEffect, useRef } from 'react';
import {
  MessageSquare, User, Loader2, Lock, MapPin, CheckCircle2,
  AlertTriangle, LockOpen, X, Activity, Smartphone, ShieldCheck,
  Search, Image as ImageIcon, Eye
} from 'lucide-react';

const COUNTRIES = [
  { code: "+1", iso: "US", name: "Estados Unidos", flag: "🇺🇸", placeholder: "(555) 123-4567" },
  { code: "+44", iso: "GB", name: "Reino Unido", flag: "🇬🇧", placeholder: "7911 123456" },
  { code: "+1", iso: "CA", name: "Canadá", flag: "🇨🇦", placeholder: "(555) 123-4567" },
  { code: "+61", iso: "AU", name: "Australia", flag: "🇦🇺", placeholder: "412 345 678" },
  { code: "+64", iso: "NZ", name: "Nueva Zelanda", flag: "🇳🇿", placeholder: "21 123 4567" },
  { code: "+353", iso: "IE", name: "Irlanda", flag: "🇮🇪", placeholder: "87 123 4567" },
  { code: "+27", iso: "ZA", name: "Sudáfrica", flag: "🇿🇦", placeholder: "71 123 4567" },
  { code: "+33", iso: "FR", name: "Francia", flag: "🇫🇷", placeholder: "6 12 34 56 78" },
  { code: "+49", iso: "DE", name: "Alemania", flag: "🇩🇪", placeholder: "1512 3456789" },
  { code: "+39", iso: "IT", name: "Italia", flag: "🇮🇹", placeholder: "312 345 6789" },
  { code: "+34", iso: "ES", name: "España", flag: "🇪🇸", placeholder: "612 34 56 78" },
  { code: "+351", iso: "PT", name: "Portugal", flag: "🇵🇹", placeholder: "912 345 678" },
  { code: "+31", iso: "NL", name: "Países Bajos", flag: "🇳🇱", placeholder: "6 12345678" },
  { code: "+32", iso: "BE", name: "Bélgica", flag: "🇧🇪", placeholder: "470 12 34 56" },
  { code: "+41", iso: "CH", name: "Suiza", flag: "🇨🇭", placeholder: "78 123 45 67" },
  { code: "+43", iso: "AT", name: "Austria", flag: "🇦🇹", placeholder: "664 123456" },
  { code: "+46", iso: "SE", name: "Suecia", flag: "🇸🇪", placeholder: "70-123 45 67" },
  { code: "+47", iso: "NO", name: "Noruega", flag: "🇳🇴", placeholder: "406 12 345" },
  { code: "+45", iso: "DK", name: "Dinamarca", flag: "🇩🇰", placeholder: "20 12 34 56" },
  { code: "+358", iso: "FI", name: "Finlandia", flag: "🇫🇮", placeholder: "50 123 4567" },
  { code: "+48", iso: "PL", name: "Polonia", flag: "🇵🇱", placeholder: "512 345 678" },
  { code: "+30", iso: "GR", name: "Grecia", flag: "🇬🇷", placeholder: "691 234 5678" },
  { code: "+420", iso: "CZ", name: "República Checa", flag: "🇨🇿", placeholder: "712 345 678" },
  { code: "+36", iso: "HU", name: "Hungría", flag: "🇭🇺", placeholder: "20 123 4567" },
  { code: "+40", iso: "RO", name: "Rumania", flag: "🇷🇴", placeholder: "712 345 678" },
  { code: "+380", iso: "UA", name: "Ucrania", flag: "🇺🇦", placeholder: "50 123 4567" },
  { code: "+7", iso: "RU", name: "Rusia", flag: "🇷🇺", placeholder: "912 345-67-89" },
  { code: "+55", iso: "BR", name: "Brasil", flag: "🇧🇷", placeholder: "(11) 99999-9999" },
  { code: "+52", iso: "MX", name: "México", flag: "🇲🇽", placeholder: "55 1234 5678" },
  { code: "+54", iso: "AR", name: "Argentina", flag: "🇦🇷", placeholder: "11 1234-5678" },
  { code: "+56", iso: "CL", name: "Chile", flag: "🇨🇱", placeholder: "9 1234 5678" },
  { code: "+57", iso: "CO", name: "Colombia", flag: "🇨🇴", placeholder: "300 1234567" },
  { code: "+51", iso: "PE", name: "Perú", flag: "🇵🇪", placeholder: "912 345 678" },
  { code: "+58", iso: "VE", name: "Venezuela", flag: "🇻🇪", placeholder: "412-1234567" },
  { code: "+593", iso: "EC", name: "Ecuador", flag: "🇪🇨", placeholder: "99 123 4567" },
  { code: "+595", iso: "PY", name: "Paraguay", flag: "🇵🇾", placeholder: "961 123456" },
  { code: "+598", iso: "UY", name: "Uruguay", flag: "🇺🇾", placeholder: "94 123 456" },
  { code: "+591", iso: "BO", name: "Bolivia", flag: "🇧🇴", placeholder: "71234567" },
  { code: "+507", iso: "PA", name: "Panamá", flag: "🇵🇦", placeholder: "6123-4567" },
  { code: "+506", iso: "CR", name: "Costa Rica", flag: "🇨🇷", placeholder: "8123-4567" },
  { code: "+1", iso: "DO", name: "República Dominicana", flag: "🇩🇴", placeholder: "(809) 123-4567" },
  { code: "+81", iso: "JP", name: "Japón", flag: "🇯🇵", placeholder: "90-1234-5678" },
  { code: "+82", iso: "KR", name: "Corea del Sur", flag: "🇰🇷", placeholder: "10-1234-5678" },
  { code: "+86", iso: "CN", name: "China", flag: "🇨🇳", placeholder: "138 0013 8000" },
  { code: "+91", iso: "IN", name: "India", flag: "🇮🇳", placeholder: "81234 56789" },
  { code: "+62", iso: "ID", name: "Indonesia", flag: "🇮🇩", placeholder: "0812 3456 789" },
  { code: "+63", iso: "PH", name: "Filipinas", flag: "🇵🇭", placeholder: "912 345 6789" },
  { code: "+60", iso: "MY", name: "Malasia", flag: "🇲🇾", placeholder: "012-345 6789" },
  { code: "+65", iso: "SG", name: "Singapur", flag: "🇸🇬", placeholder: "8123 4567" },
  { code: "+66", iso: "TH", name: "Tailandia", flag: "🇹🇭", placeholder: "081 234 56 78" },
  { code: "+84", iso: "VN", name: "Vietnam", flag: "🇻🇳", placeholder: "091 234 56 78" },
  { code: "+92", iso: "PK", name: "Pakistán", flag: "🇵🇰", placeholder: "0300 1234567" },
  { code: "+880", iso: "BD", name: "Bangladés", flag: "🇧🇩", placeholder: "01712-345678" },
  { code: "+852", iso: "HK", name: "Hong Kong", flag: "🇭🇰", placeholder: "9123 4567" },
  { code: "+886", iso: "TW", name: "Taiwán", flag: "🇹🇼", placeholder: "0912 345 678" },
  { code: "+972", iso: "IL", name: "Israel", flag: "🇮🇱", placeholder: "50 123 4567" },
  { code: "+90", iso: "TR", name: "Turquía", flag: "🇹🇷", placeholder: "501 234 56 78" },
  { code: "+971", iso: "AE", name: "EAU", flag: "🇦🇪", placeholder: "50 123 4567" },
  { code: "+966", iso: "SA", name: "Arabia Saudita", flag: "🇸🇦", placeholder: "50 123 4567" },
  { code: "+20", iso: "EG", name: "Egipto", flag: "🇪🇬", placeholder: "100 123 4567" },
  { code: "+234", iso: "NG", name: "Nigeria", flag: "🇳🇬", placeholder: "802 123 4567" },
  { code: "+254", iso: "KE", name: "Kenia", flag: "🇰🇪", placeholder: "712 123456" },
  { code: "+212", iso: "MA", name: "Marruecos", flag: "🇲🇦", placeholder: "612-345678" },
];

const CONVERSATIONS = [
  { id: 1, name: "Usuario Desconocido 🔒", msg: "No le cuentes sobre lo de anoche...", time: "Ayer" },
  { id: 2, name: "Usuario Desconocido 🔒", msg: "Foto (Ver una vez) 📷", time: "Hace 2 días" },
  { id: 3, name: "Usuario Desconocido 🔒", msg: "Audio (0:14) 🎤", time: "Hace 3 días" }
];

const KW_STATS = [
  { w: "Amor", c: 22 }, { w: "Travesura", c: 18 }, { w: "Bebé", c: 15 },
  { w: "Te extraño", c: 12 }, { w: "Cariño", c: 10 }, { w: "Secreto", c: 9 }
];

const RECENT_LOGS_IMAGES = {
  male: ["/images/male/zap/1-f.png", "/images/male/zap/2-f.png", "/images/male/zap/3-f.png"],
  female: ["/images/female/zap/1-h.png", "/images/female/zap/2-h.png", "/images/female/zap/3-h.png"],
};

const RECOVERED_MEDIA_IMAGES = {
  male: [
    "/images/male/zap/block/4-f.png", "/images/male/zap/block/5-f.png",
    "/images/male/zap/block/6-f.png", "/images/male/zap/block/7-f.png",
    "/images/male/zap/block/8-f.png", "/images/male/zap/block/9-f.png",
  ],
  female: [
    "/images/female/zap/block/4-h.png", "/images/female/zap/block/5-h.png",
    "/images/female/zap/block/6-h.png", "/images/female/zap/block/7-h.png",
    "/images/female/zap/block/8-h.png", "/images/female/zap/block/9-h.png",
  ],
};

export default function Upsell1Page() {
  const [step, setStep] = useState<'intro' | 'loading' | 'report'>('intro');
  const [gender, setGender] = useState('Mujer');
  const [country, setCountry] = useState(COUNTRIES[COUNTRIES.findIndex(c => c.iso === 'ES') || 10]);
  const [phone, setPhone] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isFetchingAvatar, setIsFetchingAvatar] = useState(false);
  const [userLocation, setUserLocation] = useState("Madrid, ES");
  const [userLat, setUserLat] = useState<number | null>(null);
  const [userLon, setUserLon] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStepText, setLoadingStepText] = useState("Iniciando Sistema...");
  const [loadingStepsHistory, setLoadingStepsHistory] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(300);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch('/api/geo')
      .then(r => r.json())
      .then(d => {
        if (d.city && d.city !== 'Unknown Location') {
          setUserLocation(d.city);
        } else {
          throw new Error("Vercel Geo falló");
        }
      })
      .catch(() => {
        fetch('https://get.geojs.io/v1/ip/geo.json')
          .then(r => r.json())
          .then(d => {
            if (d.city) setUserLocation(d.city);
            if (d.latitude) setUserLat(parseFloat(d.latitude));
            if (d.longitude) setUserLon(parseFloat(d.longitude));
          });
      });
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length < 8) {
      setAvatarUrl(null);
      return;
    }
    const timer = setTimeout(async () => {
      setIsFetchingAvatar(true);
      try {
        const res = await fetch('/api/whatsapp-photo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone: cleaned, countryCode: country.code })
        });
        const data = await res.json();
        if (res.ok && (data.result || data.imageUrl)) {
          setAvatarUrl(data.result || data.imageUrl);
        } else {
          setAvatarUrl(null);
        }
      } catch {
        setAvatarUrl(null);
      } finally {
        setIsFetchingAvatar(false);
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, [phone, country]);

  const filteredCountries = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    c.code.includes(countrySearch) ||
    c.iso.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9\s-]/g, '');
    setPhone(val);
  };

  const startAnalysis = () => {
    if (phone.replace(/\D/g, '').length < 8) return;
    setStep('loading');
    runLoadingSequence();
  };

  const runLoadingSequence = () => {
    const STEPS = [
      "Estableciendo túnel cifrado...", "Evadiendo protocolos 2FA...", "Accediendo a servidores de WhatsApp...",
      "Extrayendo registros de chat...", "Descifrando archivos multimedia...", "Recuperando mensajes eliminados...",
      "Geolocalizando señal del dispositivo...", "Analizando patrones de interacción...", "Compilando informe final..."
    ];
    let currentStep = 0;
    const barInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) { clearInterval(barInterval); return 100; }
        return prev + 0.8;
      });
    }, 80);
    const stepInterval = setInterval(() => {
      if (currentStep < STEPS.length) {
        setLoadingStepText(STEPS[currentStep]);
        setLoadingStepsHistory(prev => [...prev, STEPS[currentStep]]);
        currentStep++;
      } else {
        clearInterval(stepInterval);
        setTimeout(() => setStep('report'), 1000);
      }
    }, 1200);
  };

  useEffect(() => {
    if (step === 'report' && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [step, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const genderKey = gender === 'Hombre' ? 'male' : 'female';
  const recentLogImages = RECENT_LOGS_IMAGES[genderKey];
  const recoveredImages = RECOVERED_MEDIA_IMAGES[genderKey];

  return (
    <div className="bg-[#0B1120] min-h-screen font-sans text-slate-200 selection:bg-cyan-500/30">
      <div className="w-full bg-rose-600/90 backdrop-blur-md text-center py-2 px-4 sticky top-0 z-50 border-b border-rose-500/50">
        <p className="text-xs font-bold text-white uppercase tracking-widest animate-pulse flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          Alerta del Sistema: Procesando Pago
        </p>
      </div>

      <main className="w-full max-w-md mx-auto px-4 py-8 pb-32">
        {step === 'intro' && (
          <div className="space-y-8 animate-fade-in-up">
            <div className="text-center space-y-4">
              <div className="relative inline-flex items-center justify-center mx-auto">
                <div className="w-24 h-24 rounded-full border-2 border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.2)] overflow-hidden bg-slate-800 flex items-center justify-center">
                  {isFetchingAvatar ? (
                    <Loader2 className="w-10 h-10 text-cyan-400 animate-spin" />
                  ) : avatarUrl ? (
                    <img src={avatarUrl} alt="Target Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-12 h-12 text-slate-500" />
                  )}
                </div>
              </div>
              <h1 className="text-2xl font-bold text-white">
                Escaneo Profundo de <span className="text-cyan-400">WhatsApp</span>
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Nuestra red de inteligencia ha detectado actividad sospechosa. Ingrese el número objetivo para extraer registros ocultos.
              </p>
            </div>

            <div className="bg-[#0f172a] border border-slate-700/50 rounded-2xl p-6 shadow-xl space-y-6 relative overflow-hidden" ref={dropdownRef}>
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Género del Objetivo</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Hombre', 'Mujer'].map((g) => (
                    <button key={g} onClick={() => setGender(g)} className={`py-3 rounded-xl text-sm font-bold border transition-all ${gender === g ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>{g}</button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 relative">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Número del Objetivo</label>
                <div className="flex bg-slate-800 rounded-xl border border-slate-700 overflow-visible focus-within:border-cyan-500">
                  <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="px-3 py-3 bg-slate-900/50 border-r border-slate-700 flex items-center gap-1.5 rounded-l-xl min-w-[80px]">
                    <span>{country.flag}</span>
                    <span className="text-xs font-mono text-slate-300">{country.code}</span>
                  </button>
                  <input type="tel" value={phone} onChange={handlePhoneChange} placeholder={country.placeholder} className="flex-1 bg-transparent px-4 py-3 text-white outline-none font-mono text-sm" />
                </div>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-50 flex flex-col max-h-60 overflow-y-auto">
                    {filteredCountries.map((c, i) => (
                      <button key={i} onClick={() => { setCountry(c); setIsDropdownOpen(false); }} className="w-full flex items-center gap-3 p-2 hover:bg-slate-700 border-b border-slate-700 last:border-0 text-left">
                        <span>{c.flag}</span>
                        <div><p className="text-xs text-white font-bold">{c.name}</p><p className="text-[10px] text-slate-400">{c.code}</p></div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={startAnalysis} disabled={phone.replace(/\D/g, '').length < 8} className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-[#0B1120] font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                <Lock className="w-5 h-5" /> INICIAR CLONACIÓN
              </button>
            </div>
          </div>
        )}

        {step === 'loading' && (
          <div className="max-w-md mx-auto space-y-6 animate-in zoom-in duration-300">
            <div className="bg-[#0f172a] rounded-2xl border border-cyan-500/30 p-6 text-center space-y-6">
              <div className="mx-auto w-20 h-20 rounded-full border-2 border-cyan-500/20 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-t-2 border-cyan-400 animate-spin"></div>
                <Smartphone className="w-8 h-8 text-cyan-400/80" />
              </div>
              <h3 className="font-bold text-white text-lg uppercase">Hackeando Sistema...</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-cyan-400"><span>{loadingStepText}</span><span>{Math.round(loadingProgress)}%</span></div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500" style={{ width: `${loadingProgress}%`, transition: 'width 0.1s linear' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 'report' && (
          <div className="animate-in slide-in-from-bottom-8 duration-700 space-y-6">
            <div className="bg-[#0f172a] rounded-2xl shadow-2xl p-5 space-y-6 border border-slate-700">
              <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl flex items-start gap-3">
                <Activity className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div><h3 className="text-sm font-bold text-rose-400">Actividad Sospechosa Detectada</h3><p className="text-xs text-slate-400 mt-1">Se encontraron <span className="text-white font-bold">148 mensajes eliminados</span>.</p></div>
              </div>

              <div className="space-y-2">
                {CONVERSATIONS.map((c, i) => (
                  <div key={c.id} onClick={() => setModalOpen(true)} className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-700 flex-shrink-0">
                        <img src={recentLogImages[i % recentLogImages.length]} alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-xs text-white uppercase">{c.name}</p>
                        <p className="text-[10px] text-rose-400 flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> {c.msg}</p>
                      </div>
                    </div>
                    <Lock className="w-3 h-3 text-slate-600" />
                  </div>
                ))}
              </div>

              <div className="bg-[#0B1120] border border-cyan-500/50 rounded-xl p-6 text-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">EXPIRA PRONTO</div>
                <div className="mx-auto w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4 border border-cyan-500/30">
                  <LockOpen className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 mb-6 flex justify-between items-center max-w-[200px] mx-auto">
                  <span className="text-[10px] text-slate-500 uppercase font-bold">La sesión expira en:</span>
                  <span className="font-mono font-bold text-rose-500">{formatTime(timeLeft)}</span>
                </div>
                
                <a href="https://go.centerpag.com/PPU38CQA4SU?upsell=true" className="block w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-[#0B1120] font-bold rounded-xl shadow-lg transition-all mb-4 uppercase">SÍ, QUIERO ACCESO POR $27</a>
                
                <a href="/downsell-1-pp" className="text-slate-500 text-xs hover:underline uppercase tracking-widest font-bold">No quiero acceso</a>
              </div>
            </div>
          </div>
        )}
      </main>

      {modalOpen && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setModalOpen(false)}>
          <div className="bg-[#0f172a] w-full max-w-sm rounded-xl overflow-hidden border border-slate-700 p-8 flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center"><Lock className="w-8 h-8 text-slate-500" /></div>
            <p className="text-slate-400 text-sm">Contenido bloqueado por cifrado de 256 bits.</p>
            <button onClick={() => setModalOpen(false)} className="bg-cyan-500 text-[#0B1120] px-6 py-2 rounded font-bold uppercase text-xs">Volver</button>
          </div>
        </div>
      )}
    </div>
  );
}
