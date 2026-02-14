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
        <div className="w-full h-full flex flex-col bg-slate-50">
            {/* Top Bar */}
            <header className="w-full h-16 bg-[#1e40af] border-b-[3px] border-[#fbbf24] shadow-lg flex items-center justify-between px-6 z-20">
                <div className="flex items-center gap-3">
                    <img src="/logo-pokemon-tcg.png" alt="Logo" className="h-10 w-auto" />
                    <div className="h-8 w-px bg-white/20 mx-2 hidden sm:block"></div>
                    <h1 className="text-white font-bold tracking-tight hidden sm:block">CRM Collection</h1>
                </div>

                <div className="flex items-center gap-6">
                    {/* Real-time Clock/Report */}
                    <div className="hidden md:flex flex-col items-end text-white/90 font-mono text-xs">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3 text-yellow-400" />
                            <span className="capitalize">{formatDay(dateTime)}, {formatDate(dateTime)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3 text-yellow-400" />
                            <span>{formatTime(dateTime)}</span>
                        </div>
                    </div>

                    <div className="h-8 w-px bg-white/20 mx-2"></div>

                    {/* User Profile & Logout */}
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-end">
                            <span className="text-white font-semibold text-sm leading-none">{userName}</span>
                            <span className="text-blue-200 text-[10px] uppercase tracking-wider leading-tight mt-1">Treinador Mestre</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-blue-900 border-2 border-yellow-400 flex items-center justify-center overflow-hidden shadow-inner">
                            <User className="text-white w-6 h-6" />
                        </div>
                        <button
                            onClick={onLogout}
                            className="p-2 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-100 hover:text-white transition-all duration-300 group"
                            title="Sair do Sistema"
                        >
                            <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 p-8 overflow-y-auto custom-scrollbar">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 min-h-[400px] relative overflow-hidden">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-slate-800 mb-2">Bem-vindo de volta, {userName}!</h2>
                            <p className="text-slate-500 mb-8 border-b border-slate-100 pb-4">Esta é a sua página principal do CRM TCG Collection.</p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { label: 'Coleção Total', value: '1.248', color: 'bg-blue-500' },
                                    { label: 'Cartas Raras', value: '156', color: 'bg-yellow-500' },
                                    { label: 'Última Captura', value: 'Mewtwo EX', color: 'bg-purple-500' }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                                        <p className={`text-2xl font-black mt-1 ${stat.color.replace('bg-', 'text-')}`}>{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Wrapper */}
            <footer className="w-full py-3 px-6 bg-white border-t border-slate-200 text-center text-[10px] text-slate-400 font-mono tracking-widest">
                © 2026 CRM TCG COLLECTION • DESENVOLVIMENTO ADMIN MODE
            </footer>
        </div>
    );
};
