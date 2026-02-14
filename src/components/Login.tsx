import React, { useState } from 'react';
import { Mail, Lock, Loader2, AlertCircle } from 'lucide-react';

interface LoginProps {
    onLoginSuccess: (user: string) => void;
}

/**
 * Login Component - Japanese Card Back Edition (v0.9.0)
 * 
 * Tema: Verso da carta Pokémon TCG Japonesa com autenticação mockada.
 */
export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Mock Authentication (Admin/Admin)
        setTimeout(() => {
            if (email === 'Admin' && password === 'Admin') {
                onLoginSuccess('Admin');
            } else {
                setError('Credenciais inválidas. Tente Admin / Admin.');
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <div className="flex items-center justify-center p-4">
            {/* Card Container */}
            <div className="relative w-[22rem] h-[31rem] rounded-[18px] bg-[#1d4ed8] p-[10px] shadow-2xl transition-transform duration-500 hover:scale-[1.02] group">

                {/* Decorative Border */}
                <div className="absolute inset-0 rounded-[18px] border-[8px] border-[#fbbf24] pointer-events-none z-20 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"></div>

                {/* Main Card Background */}
                <div className="h-full w-full bg-gradient-to-br from-[#1e40af] via-[#172554] to-[#1e3a8a] rounded-[8px] overflow-hidden relative flex flex-col items-center">

                    {/* Starburst Effect */}
                    <div className="absolute inset-0 opacity-40 bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_rgba(255,255,255,0.1)_30deg,_transparent_60deg,_rgba(255,255,255,0.1)_90deg,_transparent_120deg,_rgba(255,255,255,0.1)_150deg,_transparent_180deg,_rgba(255,255,255,0.1)_210deg,_transparent_240deg,_rgba(255,255,255,0.1)_270deg,_transparent_300deg,_rgba(255,255,255,0.1)_330deg,_transparent_360deg)] animate-[spin_60s_linear_infinite]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#172554] to-transparent z-0" />

                    {/* Content Layer */}
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-10 px-6">

                        {/* Top Logo Area */}
                        <div className="text-center mt-2 flex flex-col items-center">
                            <img
                                src="/logo-pokemon-tcg.png"
                                alt="Pokémon TCG Logo"
                                className="w-48 h-auto drop-shadow-xl filter brightness-110"
                            />
                        </div>

                        {/* Center Decorative Element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-20 pointer-events-none">
                            <img src="/pokeball.svg" alt="Pokeball Background" className="w-full h-full drop-shadow-2xl" />
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleLogin} className="w-full space-y-4 mt-4 backdrop-blur-sm bg-blue-950/30 p-4 rounded-xl border border-blue-500/20 shadow-inner">
                            {error && (
                                <div className="flex items-center gap-2 text-xs bg-red-500/20 text-red-200 p-2 rounded border border-red-500/30 animate-in fade-in slide-in-from-top-1">
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    <span>{error}</span>
                                </div>
                            )}

                            {/* Email/User */}
                            <div className="relative group">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300 group-focus-within:text-yellow-400 transition-colors" />
                                <input
                                    type="text"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-blue-900/40 border border-blue-400/30 rounded-lg py-2.5 pl-10 pr-4 text-white text-sm placeholder-blue-300/50 focus:outline-none focus:border-yellow-400 focus:bg-blue-900/60 transition-all"
                                    placeholder="Usuário (Admin)"
                                />
                            </div>

                            {/* Password */}
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300 group-focus-within:text-yellow-400 transition-colors" />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-blue-900/40 border border-blue-400/30 rounded-lg py-2.5 pl-10 pr-4 text-white text-sm placeholder-blue-300/50 focus:outline-none focus:border-yellow-400 focus:bg-blue-900/60 transition-all"
                                    placeholder="Senha (Admin)"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full relative group overflow-hidden rounded-lg mt-2"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:scale-105 transition-transform duration-300"></div>
                                <div className="relative py-2.5 flex items-center justify-center gap-2 font-bold text-blue-950 uppercase tracking-wider text-xs">
                                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Entrar'}
                                </div>
                            </button>
                        </form>

                        <div className="text-[10px] font-mono text-blue-300/60 mt-4 text-center">
                            TCG Collection App • v0.9.0
                        </div>
                    </div>
                </div>

                {/* Holographic Shine */}
                <div className="absolute inset-0 rounded-[18px] pointer-events-none z-30 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
        </div>
    );
};
