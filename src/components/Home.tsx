import React, { useState, useEffect } from 'react';
import { LogOut, User, Calendar, Clock, Newspaper, ChevronRight } from 'lucide-react';

interface HomeProps {
    onLogout: () => void;
    userName: string;
}

export const Home: React.FC<HomeProps> = ({ onLogout, userName }) => {
    const [dateTime, setDateTime] = useState(new Date());
    const [currentTab, setCurrentTab] = useState<'Home' | 'Perfil' | 'Coleção' | 'Configurações'>('Home');

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

    const getGreeting = () => {
        const hour = dateTime.getHours();
        if (hour >= 5 && hour < 12) return 'Bom dia';
        if (hour >= 12 && hour < 18) return 'Boa tarde';
        return 'Boa noite';
    };

    const pokemonNews = [
        "Celebrações globais do 30º aniversário de Pokémon começam este mês!",
        "Dia de Pokémon (27/02): Eventos especiais em Ligas Pokémon locais em todo o Brasil.",
        "Carta promocional de Bulbasaur disponível em eventos oficiais da Liga Pokémon.",
        "Lançamento da 'Coleção Dia de Pokémon 2026' com Pikachu holográfico exclusivo.",
        "Coleção Ilustração Parceiro Inicial — Série 1 chega às lojas em março.",
        "LEGO Pokémon: Primeiros conjuntos oficiais chegam ao Brasil em 27 de fevereiro.",
        "Jazwares anuncia linha de pelúcias exclusivas para os 30 anos da franquia.",
        "Evento Mega Medicham ex disponível no aplicativo Pokémon Estampas Ilustradas Pocket.",
        "Mercado Brasileiro: Brasil é agora o 3º maior mercado de Pokémon TCG do mundo.",
        "Super Bowl LX: Comercial do 30º aniversário de Pokémon emociona fãs globais."
    ];

    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

    useEffect(() => {
        const newsTimer = setInterval(() => {
            setCurrentNewsIndex((prev) => (prev + 1) % pokemonNews.length);
        }, 5000);
        return () => clearInterval(newsTimer);
    }, [pokemonNews.length]);

    return (
        <div className="w-full flex-1 flex flex-col bg-slate-50 overflow-hidden">
            {/* Top Bar */}
            <header className="w-full h-16 sm:h-20 bg-[#1e40af] border-b-[3px] border-[#fbbf24] shadow-lg flex items-center justify-between px-4 sm:px-8 z-20 shrink-0">
                <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
                    <img src="/logo-pokemon-tcg.png" alt="Logo" className="h-8 sm:h-12 w-auto shrink-0" />
                    <div className="h-8 w-px bg-white/20 mx-1 hidden sm:block"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                        <h1 className="text-white font-black tracking-tight text-sm sm:text-lg whitespace-nowrap hidden xs:block">TCG Collector App</h1>

                        <nav className="hidden lg:flex items-center gap-6 ml-6">
                            {['Home', 'Perfil', 'Coleção', 'Configurações'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setCurrentTab(item as any)}
                                    className={`uppercase tracking-[0.15em] font-black transition-all duration-300 relative group text-[11px] sm:text-xs ${currentTab === item ? 'text-[#fbbf24]' : 'text-white hover:text-[#fbbf24]'}`}
                                >
                                    {item}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#fbbf24] transition-all duration-300 ${currentTab === item ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </button>
                            ))}
                        </nav>
                    </div>
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
                            className="p-1.5 sm:p-2 rounded-lg bg-red-600 text-white shadow-md transition-transform active:scale-95"
                            title="Sair do Sistema"
                        >
                            <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
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

                        {currentTab === 'Home' ? (
                            <>
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 sm:mb-10">
                                    <div>
                                        <h2 className="text-lg sm:text-2xl font-black text-slate-800 tracking-tight">
                                            {getGreeting()}, {userName}!
                                        </h2>
                                        <p className="text-[10px] sm:text-sm text-slate-500 border-b border-slate-100 pb-4 sm:pb-6 uppercase tracking-[0.2em] font-bold mt-4">Seu Dashboard</p>
                                    </div>

                                    {/* News Feed - Opposite to Greeting */}
                                    <div className="flex-1 max-w-xl bg-slate-50 border-2 border-blue-100 rounded-2xl p-4 relative overflow-hidden group hover:border-[#fbbf24] transition-all duration-500 shadow-sm self-start lg:self-center">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="bg-blue-600 p-1.5 rounded-lg">
                                                <Newspaper className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-[10px] font-black text-blue-900 uppercase tracking-widest">Pokémon TCG News Brasil</span>
                                            <div className="ml-auto flex gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                                                <span className="text-[8px] font-bold text-slate-400">AO VIVO</span>
                                            </div>
                                        </div>
                                        <div className="h-10 relative overflow-hidden">
                                            {pokemonNews.map((news, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`absolute inset-0 flex items-center gap-3 transition-all duration-700 transform ${idx === currentNewsIndex
                                                        ? 'opacity-100 translate-y-0 scale-100'
                                                        : 'opacity-0 translate-y-8 scale-95'
                                                        }`}
                                                >
                                                    <ChevronRight className="w-4 h-4 text-[#fbbf24] shrink-0" />
                                                    <p className="text-xs sm:text-sm font-bold text-slate-700 leading-tight line-clamp-2">
                                                        {news}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        {/* Progress bar for the news loop */}
                                        <div className="absolute bottom-0 left-0 h-0.5 bg-[#fbbf24]/30 w-full overflow-hidden">
                                            <div
                                                className="h-full bg-[#fbbf24] transition-all duration-[5000ms] linear"
                                                style={{ width: '100%', transform: `translateX(-${100 - ((currentNewsIndex + 1) / pokemonNews.length * 100)}%)` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Proportional Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 flex-1 content-start">
                                    {/* Coleção Total - Special Styling */}
                                    <div className="bg-[#1e40af] border-[3px] border-[#fbbf24] rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-center relative overflow-hidden cursor-pointer" onClick={() => setCurrentTab('Coleção')}>
                                        <div className="absolute inset-0 opacity-10 bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_rgba(255,255,255,0.1)_30deg,_transparent_360deg)] animate-[spin_60s_linear_infinite] pointer-events-none"></div>
                                        <span className="text-[10px] sm:text-xs font-black text-white uppercase tracking-[0.2em] mb-2 sm:mb-4 relative z-10">Coleção Total</span>
                                        <p className="text-xl sm:text-4xl font-black text-[#fbbf24] tracking-tight relative z-10">1.248</p>
                                        <div className="mt-4 sm:mt-6 h-1 w-12 rounded-full bg-[#fbbf24] group-hover:w-full transition-all duration-500 relative z-10"></div>
                                    </div>

                                    {[
                                        { label: 'Cartas Raras', value: '156', color: 'text-amber-600', accent: 'bg-amber-400' },
                                        { label: 'Última Captura', value: 'Mewtwo EX', color: 'text-purple-600', accent: 'bg-purple-400' }
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-white border-[3px] border-[#fbbf24] rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-center cursor-pointer">
                                            <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2 sm:mb-4">{stat.label}</span>
                                            <p className={`text-xl sm:text-4xl font-black ${stat.color} tracking-tight`}>{stat.value}</p>
                                            <div className={`mt-4 sm:mt-6 h-1 w-12 rounded-full ${stat.accent} group-hover:w-full transition-all duration-500`}></div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 border-2 border-dashed border-blue-200">
                                    <User className="w-10 h-10 text-blue-300" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-800 mb-2 uppercase tracking-tighter">{currentTab}</h2>
                                <p className="text-slate-500 max-w-md">Esta área está sendo preparada para receber suas informações de {currentTab.toLowerCase()}.</p>
                                <button
                                    onClick={() => setCurrentTab('Home')}
                                    className="mt-8 px-6 py-2 bg-[#1e40af] text-white rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-blue-800 transition-colors shadow-lg"
                                >
                                    Voltar ao Dashboard
                                </button>
                            </div>
                        )}

                        {/* Filler Space to maintain proportion */}
                        <div className="flex-1 min-h-[100px] sm:min-h-[200px]"></div>
                    </div>
                </div>
            </main>

            {/* Footer Wrapper - Fixed at bottom */}
            <footer className="w-full py-2 sm:py-3 px-6 bg-white border-t border-slate-200 text-center text-[8px] sm:text-[10px] text-slate-400 font-mono tracking-widest shrink-0">
                © 2026 TCG COLLECTION | Parametrus.com - Todos os direitos reservados.
            </footer>
        </div>
    );
};
