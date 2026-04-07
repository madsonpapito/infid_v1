"use client";

import { useEffect, useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  Clock,
  ArrowRight,
  Zap,
  Lock
} from 'lucide-react';

export default function Downsell2Page() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#0B1120] min-h-screen font-sans text-slate-200 selection:bg-rose-500/30">
      
      {/* Top Warning Banner */}
      <div className="bg-rose-600 py-3 px-4 text-center sticky top-0 z-50">
        <p className="text-white font-black text-xs uppercase tracking-[0.2em] animate-pulse flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4" /> ¡ÚLTIMA OPORTUNIDAD! NO PIERDAS ESTO
        </p>
      </div>

      <main className="max-w-md mx-auto px-4 py-10 space-y-8 pb-32">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-block p-4 bg-rose-500/10 rounded-full border border-rose-500/20 mb-2">
            <Lock className="w-10 h-10 text-rose-500" />
          </div>
          <h1 className="text-3xl font-black text-white leading-tight uppercase tracking-tight">
             OFERTA <span className="text-rose-500 underline decoration-rose-500/30 underline-offset-4">FINAL</span>
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
            Haremos una excepción por última vez. Queremos que descubras la verdad hoy mismo.
            <span className="text-white font-bold"> Acceso inmediato garantizado.</span>
          </p>
        </div>

        {/* Offer Box */}
        <div className="bg-[#0f172a] rounded-3xl border border-slate-700/50 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-500 text-[#0B1120] text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-widest">
            Ahorro Máximo
          </div>
          
          <div className="p-8 space-y-6">
            <div className="space-y-1">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Informe de Instagram</p>
              <h2 className="text-2xl font-bold text-white uppercase italic">Análisis Profundo de DMs</h2>
            </div>

            {/* Price section */}
            <div className="flex items-center gap-4 py-4 border-y border-slate-800/50">
              <div className="text-slate-500 line-through text-lg font-mono">$67</div>
              <div className="flex flex-col">
                <span className="text-rose-500 text-[10px] font-black uppercase tracking-widest leading-none">Precio Especial</span>
                <span className="text-4xl font-black text-white">$14</span>
              </div>
              <div className="ml-auto bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-lg">
                <span className="text-emerald-500 text-xs font-bold font-mono">DESCUENTO MÁXIMO</span>
              </div>
            </div>

            {/* Benefits */}
            <ul className="space-y-4">
              {[
                "Logs de Mensajes Privados",
                "Fotos Temporales Recuperadas",
                "Reacciones en Historias Ocultas",
                "Análisis de Interacciones Fieles"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Countdown */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-rose-500 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Vence en:</span>
              </div>
              <span className="text-xl font-mono font-black text-white tabular-nums tracking-tighter">
                {formatTime(timeLeft)}
              </span>
            </div>

            {/* Action Button */}
            <div className="space-y-4">
              <a 
                href="https://go.centerpag.com/PPU38CQ0JFC?upsell=true"
                className="block w-full py-5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-black text-center rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wider flex items-center justify-center gap-2"
              >
                ACEPTAR OFERTA FINAL ($14)
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a 
                href="/tk.html"
                className="block w-full text-center text-slate-600 text-[10px] font-bold hover:text-slate-400 transition-colors uppercase tracking-widest"
              >
                No gracias, prefiero quedarme con la duda
              </a>
            </div>
          </div>

          <div className="bg-slate-900/50 p-4 border-t border-slate-800/50 flex justify-center gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-500" />
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Acceso Inmediato</span>
            </div>
          </div>
        </div>

      </main>
      
    </div>
  );
}
