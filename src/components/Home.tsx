import React, { useState, useEffect } from 'react';
import { LogOut, User, Calendar, Clock } from 'lucide-react';

interface HomeProps {
    onLogout: () => void;
    userName: string;
}

export const Home: React.FC<HomeProps> = ({ onLogout, userName }) => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDay = (date: Date) => {
        return date.toLocaleDateString('pt-BR', { weekday: 'long' });
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };

    return (
        <div className="w-full flex-1 flex flex-col bg-slate-50 overflow-hidden">
            {/* Top Bar */}
            <header className="w-full h-16 sm:h-20 bg-[#1e40af] border-b-[3px] border-[#fbbf24] shadow-lg flex items-center justify-between px-4 sm:px-8 z-20 shrink-0">
                <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
                    <img src="/logo-pokemon-tcg.png" alt="Logo" className="h-8 sm:h-12 w-auto shrink-0" />
                    <div className="h-8 w-px bg-white/20 mx-1 hidden sm:block"></div>
                    <h1 className="text-white font-bold tracking-tight text-sm sm:text-base whitespace-nowrap hidden xs:block">CRM Collection</h1>
                </div>

                <div className="flex items-center gap-3 sm:gap-6">
                    {/* Real-time Clock/Report - Hidden on very small screens, visible on md */}
                    <div className="hidden md:flex flex-col items-end text-white/90 font-mono text-[10px] sm:text-xs">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3 text-yellow-400" />
                            <span className="capitalize">{formatDay(dateTime)}, {formatDate(dateTime)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3 text-yellow-400" />
                            <span>{formatTime(dateTime)}</span>
                        </div>
                    </div>

                    <div className="h-8 w-px bg-white/20 mx-1 hidden sm:block"></div>

                    {/* User Profile & Logout */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="flex flex-col items-end hidden sm:flex">
                            <span className="text-white font-semibold text-xs sm:text-sm leading-none">{userName}</span>
                            <span className="text-blue-200 text-[9px] sm:text-[10px] uppercase tracking-wider leading-tight mt-1">Treinador Mestre</span>
                        </div>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-900 border-2 border-yellow-400 flex items-center justify-center overflow-hidden shadow-inner shrink-0">
                            <User className="text-white w-4 h-4 sm:w-6 sm:h-6" />
                        </div>
                        <button
                            onClick={onLogout}
                            className="p-1.5 sm:p-2 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-100 hover:text-white transition-all duration-300 group"
                            title="Sair do Sistema"
                        >
                            <LogOut className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content Area - Filling available space */}
            <main className="flex-1 p-4 sm:p-8 overflow-y-auto custom-scrollbar bg-slate-100/50">
                <div className="max-w-7xl mx-auto h-full flex flex-col">
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-10 flex-1 relative overflow-hidden flex flex-col">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10 flex-1 flex flex-col">
                            <div className="mb-6 sm:mb-10">
                                <h2 className="text-xl sm:text-4xl font-extrabold text-slate-800 mb-1 sm:mb-2 tracking-tight">Bem-vindo de volta, {userName}!</h2>
                                <p className="text-xs sm:text-lg text-slate-500 border-b border-slate-100 pb-4 sm:pb-6 uppercase tracking-wider font-medium">Dashboard de Controle TCG</p>
                            </div>

                            {/* Proportional Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 flex-1 content-start">
                                {[
                                    { label: 'Coleção Total', value: '1.248', color: 'text-blue-600', icon: 'bg-blue-50' },
                                    { label: 'Cartas Raras', value: '156', color: 'text-amber-600', icon: 'bg-amber-50' },
                                    { label: 'Última Captura', value: 'Mewtwo EX', color: 'text-purple-600', icon: 'bg-purple-50' }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white border border-slate-100 rounded-xl sm:rounded-2xl p-4 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-center">
                                        <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2 sm:mb-4">{stat.label}</span>
                                        <p className={`text-xl sm:text-4xl font-black ${stat.color} tracking-tight`}>{stat.value}</p>
                                        <div className={`mt-4 sm:mt-6 h-1 w-12 rounded-full ${stat.icon.replace('bg-', 'bg-opacity-50 bg-')} group-hover:w-full transition-all duration-500`}></div>
                                    </div>
                                ))}
                            </div>

                            {/* Filler Space to maintain proportion */}
                            <div className="flex-1 min-h-[100px] sm:min-h-[200px]"></div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Wrapper - Fixed at bottom */}
            <footer className="w-full py-2 sm:py-3 px-6 bg-white border-t border-slate-200 text-center text-[8px] sm:text-[10px] text-slate-400 font-mono tracking-widest shrink-0">
                © 2026 CRM TCG COLLECTION • MONITORAMENTO GLOBAL ATIVO
            </footer>
        </div>
    );
};
