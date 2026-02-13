import React, { useState } from 'react';
import { Mail, Lock, Sparkles, Loader2 } from 'lucide-react';

/**
 * LoginCard Component - Refactored (v0.2.0)
 * 
 * Theme: Hyper Rare / Rainbow Rare (Pokemon TCG)
 * Localization: PT-BR
 */
export const LoginCard: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const currentYear = new Date().getFullYear();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="flex items-center justify-center p-4 perspective-1000">
            {/* 
                Card Container - Hyper Rare Edition
                - Rainbow/Holographic border simulation using multiple heavy shadows and gradients
            */}
            <div className="relative w-[22rem] h-[34rem] rounded-2xl p-[3px] overflow-hidden group hover:scale-[1.02] transition-transform duration-500 ease-out shadow-2xl shadow-purple-500/30">

                {/* 
                   Rainbow Holographic Background/Border 
                   Using a conic gradient to simulate the spectral reflection of a Rainbow Rare card.
                   Animate-spin-slow gives it the shifting light effect.
                */}
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,red,orange,yellow,green,blue,indigo,violet,red)] opacity-60 group-hover:opacity-80 blur-xl animate-[spin_6s_linear_infinite]" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/20 opacity-50 mix-blend-overlay" />

                {/* 
                    Card Body
                    - backdrop-blur-xl: Glassmorphism feel
                    - bg-black/80: Dark base but allows some holo bleed-through
                */}
                <div className="relative h-full w-full bg-slate-900/90 backdrop-blur-xl rounded-[13px] flex flex-col p-6 z-10 overflow-hidden border border-white/10">

                    {/* Noise Texture Overlay for "Texture" feel */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

                    {/* Header: TCG Collection */}
                    <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4 relative z-20">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-300 animate-pulse" />
                            <h1 className="text-2xl font-bold font-['Poppins'] tracking-wider bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                TCG Collection
                            </h1>
                        </div>
                        <div className="px-2 py-0.5 rounded border border-purple-500/30 bg-purple-500/10 text-[10px] font-mono text-purple-200">
                            HR
                        </div>
                    </div>

                    {/* Main Form Area */}
                    <form onSubmit={handleLogin} className="space-y-5 flex-1 relative z-20">

                        {/* Email Input */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-300 ml-1 uppercase tracking-wider">E-mail</label>
                            <div className="relative group/input">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-20 group-focus-within/input:opacity-50 transition-opacity" />
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-pink-300 transition-colors z-10" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="relative w-full bg-[#0a0a0a]/80 border border-white/10 text-gray-100 text-sm rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/20 transition-all placeholder-gray-600 backdrop-blur-sm"
                                    placeholder="treinador@exemplo.com"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-300 ml-1 uppercase tracking-wider">Senha</label>
                            <div className="relative group/input">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-20 group-focus-within/input:opacity-50 transition-opacity" />
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-pink-300 transition-colors z-10" />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="relative w-full bg-[#0a0a0a]/80 border border-white/10 text-gray-100 text-sm rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/20 transition-all placeholder-gray-600 backdrop-blur-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                            {/* Forgot Password Link */}
                            <div className="flex justify-end pt-1">
                                <a href="#" className="text-[11px] text-gray-400 hover:text-pink-300 transition-colors hover:underline">
                                    Esqueci minha senha
                                </a>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full mt-8 relative overflow-hidden rounded-lg group/btn h-12 shadow-[0_4px_14px_0_rgba(236,72,153,0.39)] hover:shadow-[0_6px_20px_rgba(236,72,153,0.23)] hover:-translate-y-0.5 transition-all duration-300"
                        >
                            {/* Button Background - Heavy Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover/btn:scale-[1.03] transition-transform duration-300" />

                            {/* Texture/Noise on Button */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

                            {/* Button Content */}
                            <div className="relative flex items-center justify-center gap-3 font-bold tracking-widest text-white text-sm uppercase">
                                {isLoading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        <span>Entrar</span>
                                        <Sparkles className="w-4 h-4 text-yellow-200 animate-pulse" />
                                    </>
                                )}
                            </div>
                        </button>
                    </form>

                    {/* Footer - Dynamic Year */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex flex-col items-center gap-1 text-[10px] text-gray-500 font-mono relative z-20">
                        <div className="flex w-full justify-between opacity-70">
                            <span>253/250 • Hyper Rare</span>
                            <span>★</span>
                        </div>
                        <span className="mt-1 hover:text-gray-300 transition-colors cursor-default">
                            © {currentYear} Parametrus.com
                        </span>
                    </div>
                </div>

                {/* Glossy Overlay (Reflection) - Diagonal Swipe */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/5 to-transparent pointer-events-none rounded-2xl z-30 mix-blend-overlay" />

                {/* Holo Sparkles (Static CSS representation, in lieu of JS particles for now) */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-purple-500/20 blur-3xl rounded-full pointer-events-none animate-pulse" />
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-pink-500/20 blur-3xl rounded-full pointer-events-none animate-pulse delay-700" />
            </div>
        </div>
    );
};
