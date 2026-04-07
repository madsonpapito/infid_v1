"use client";

import { useState, useEffect, useRef } from 'react';
import {
    Instagram, Search, Loader2, CheckCircle2, Heart, MessageCircle,
    Lock, Terminal, AlertTriangle, User, Eye
} from 'lucide-react';

interface InstagramProfile {
    username: string;
    full_name: string;
    biography: string;
    profile_pic_url: string;
    follower_count: number;
    following_count: number;
    media_count: number;
    is_private: boolean;
    is_verified: boolean;
}

export default function Upsell2Page() {
    const [step, setStep] = useState<'input' | 'loading' | 'results'>('input');
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState<'male' | 'female'>('female');
    const [loadingText, setLoadingText] = useState("Iniciando Protocolo...");
    const [progress, setProgress] = useState(0);

    const [profile, setProfile] = useState<InstagramProfile | null>(null);
    const [isSearching, setIsSearching] = useState(false);
    const [searchStatus, setSearchStatus] = useState<'idle' | 'searching' | 'found' | 'not_found'>('idle');
    const searchTimerRef = useRef<NodeJS.Timeout | null>(null);

    const [posts, setPosts] = useState<{ id: string; imageUrl: string }[]>([]);
    const [shuffledLiked, setShuffledLiked] = useState<string[]>([]);
    const [shuffledPerfil, setShuffledPerfil] = useState<string[]>([]);

    useEffect(() => {
        const cleaned = username.replace('@', '').trim();
        if (cleaned.length < 3) {
            setProfile(null);
            setSearchStatus('idle');
            setIsSearching(false);
            return;
        }
        if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
        setIsSearching(true);
        setSearchStatus('searching');
        searchTimerRef.current = setTimeout(async () => {
            try {
                const res = await fetch('/api/instagram/profile', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: cleaned }),
                });
                const data = await res.json();
                if (data.success && data.profile) {
                    setProfile(data.profile);
                    setSearchStatus('found');
                } else {
                    setProfile(null);
                    setSearchStatus('not_found');
                }
            } catch {
                setProfile(null);
                setSearchStatus('not_found');
            } finally {
                setIsSearching(false);
            }
        }, 800);
        return () => { if (searchTimerRef.current) clearTimeout(searchTimerRef.current); };
    }, [username]);

    const handleStartScan = () => {
        if (username.replace('@', '').trim().length < 3) return;
        setStep('loading');
        setPosts([]);

        const perfilPool = gender === 'male'
            ? ['/images/male/perfil/1.jpg', '/images/male/perfil/2.jpg', '/images/male/perfil/3.jpg']
            : ['/images/female/perfil/1.jpg', '/images/female/perfil/2.jpg', '/images/female/perfil/3.jpg'];
        const likedPool = gender === 'male'
            ? ['/images/male/liked/male-liked-photo-1.jpg', '/images/male/liked/male-liked-photo-2.jpeg']
            : ['/images/female/liked/female-liked-photo-1.jpg', '/images/female/liked/female-liked-photo-2.jpg'];

        setShuffledPerfil([...perfilPool].sort(() => Math.random() - 0.5));
        setShuffledLiked([...likedPool].sort(() => Math.random() - 0.5));

        const cleaned = username.replace('@', '').trim();
        fetch('/api/instagram/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: cleaned }),
        })
            .then(r => r.json())
            .then(data => {
                if (data.success && Array.isArray(data.posts) && data.posts.length > 0) {
                    const mapped = data.posts
                        .filter((p: any) => p.imageUrl)
                        .slice(0, 9)
                        .map((p: any) => ({
                            id: p.id || String(Math.random()),
                            imageUrl: `/api/instagram/image?url=${encodeURIComponent(p.imageUrl)}`,
                        }));
                    let index = 0;
                    const revealInterval = setInterval(() => {
                        if (index >= mapped.length) { clearInterval(revealInterval); return; }
                        setPosts(prev => [...prev, mapped[index]]);
                        index++;
                    }, 900);
                }
            })
            .catch(() => {});

        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setStep('results'), 800);
                    return 100;
                }
                return p + 1.2;
            });
        }, 80);

        setTimeout(() => setLoadingText("Extrayendo seguidores..."), 500);
        setTimeout(() => setLoadingText("Evadiendo seguridad..."), 1800);
        setTimeout(() => setLoadingText("Escaneando mensajes directos..."), 3500);
        setTimeout(() => setLoadingText("Recuperando archivos ocultos..."), 5500);
        setTimeout(() => setLoadingText("Finalizando informe..."), 7000);
    };

    const cleanUsername = username.replace('@', '').trim();

    return (
        <div className="bg-[#0B1120] min-h-screen font-sans text-slate-200 pb-20 selection:bg-rose-500/30">
            <div className="bg-rose-600/10 border-b border-rose-500/20 text-center py-2 px-4 sticky top-0 z-50 backdrop-blur-md">
                <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest animate-pulse flex items-center justify-center gap-2">
                    <AlertTriangle className="w-3 h-3" />
                    Advertencia: No cierre la consola
                </p>
            </div>

            <div className="max-w-md mx-auto p-4 pt-8">
                {step === 'input' && (
                    <div className="flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-4">
                        <div className="w-16 h-16 bg-[#0f172a] rounded-2xl border border-slate-700 flex items-center justify-center shadow-2xl">
                            <Instagram className="w-8 h-8 text-rose-500" />
                        </div>
                        <div className="text-center space-y-2">
                            <h1 className="text-2xl font-bold text-white uppercase tracking-tight">Forense de Instagram</h1>
                            <p className="text-slate-400 text-sm max-w-xs mx-auto">Detecta DMs ocultos e interacciones secretas.</p>
                        </div>
                        <div className="w-full bg-[#0f172a] p-6 rounded-2xl border border-slate-700/50 shadow-xl space-y-6">
                            <div className="space-y-3">
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-1">¿Cuál es su género?</span>
                                <div className="grid grid-cols-2 gap-3">
                                    <button onClick={() => setGender('male')} className={`p-3 rounded-lg border flex items-center justify-center gap-2 ${gender === 'male' ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>Hombre</button>
                                    <button onClick={() => setGender('female')} className={`p-3 rounded-lg border flex items-center justify-center gap-2 ${gender === 'female' ? 'bg-rose-500/10 border-rose-500 text-rose-400' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>Mujer</button>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-1">Instagram (@)</span>
                                <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg focus-within:border-rose-500">
                                    <span className="text-slate-400 font-bold pl-3 pr-0 font-mono">@</span>
                                    <input type="text" value={username.replace('@', '')} onChange={e => setUsername(e.target.value)} className="flex-1 bg-transparent text-white py-3 pl-0.5 outline-none font-mono" placeholder="username" />
                                </div>
                            </div>
                            <button onClick={handleStartScan} disabled={cleanUsername.length < 3} className="w-full py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold rounded-xl uppercase">Iniciar Escaneo</button>
                        </div>
                    </div>
                )}

                {step === 'loading' && (
                    <div className="flex flex-col items-center space-y-6 pt-8 animate-in fade-in">
                        <div className="w-20 h-20 rounded-full border-t-2 border-rose-500 animate-spin"></div>
                        <div className="text-center">
                            <h2 className="text-lg font-bold text-white">Analizando Perfil...</h2>
                            <p className="text-sm text-slate-400">@{cleanUsername}</p>
                        </div>
                        <div className="w-full space-y-2">
                            <div className="flex justify-between text-xs font-mono text-rose-400"><span>{loadingText}</span><span>{Math.round(progress)}%</span></div>
                            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-rose-500" style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}></div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 'results' && (
                    <div className="animate-in slide-in-from-bottom-8 space-y-6 pt-2">
                        <div className="bg-[#0f172a] rounded-xl border border-emerald-500/30 p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-800 border border-emerald-500/40">
                                    {profile?.profile_pic_url ? <img src={profile.profile_pic_url} alt="" className="w-full h-full object-cover" /> : <User className="w-6 h-6 m-4 mt-6" />}
                                </div>
                                <div><p className="font-bold text-white uppercase">@{cleanUsername}</p><p className="text-xs text-slate-400">Perfil Detectado</p></div>
                            </div>
                        </div>

                        <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl">
                            <p className="text-xs text-rose-400 font-bold uppercase tracking-widest flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" /> Actividad Sospechosa Detectada
                            </p>
                            <p className="text-[11px] text-slate-400 mt-1">Se detectaron 3 interacciones privadas eliminadas recientemente.</p>
                        </div>

                        <div className="text-center bg-[#0B1120] border border-rose-500/50 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase">Expira Pronto</div>
                            <div className="mb-4 flex justify-center"><Lock className="w-6 h-6 text-rose-500" /></div>
                            <h2 className="text-lg font-black text-white mb-2 uppercase tracking-wide">DESBLOQUEAR INFORME COMPLETO</h2>
                            <p className="text-xs text-slate-400 mb-6 px-4">Acceso instantáneo. 100% Anónimo.</p>
                            
                            <a href="https://go.centerpag.com/PPU38CQA549?upsell=true" className="block w-full py-4 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl shadow-lg mb-4 uppercase">SÍ, QUIERO ACCESO POR $27</a>
                            
                            <a href="/downsell-2-pp" className="text-slate-500 text-xs hover:underline uppercase tracking-widest font-bold">No quiero acceso</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
