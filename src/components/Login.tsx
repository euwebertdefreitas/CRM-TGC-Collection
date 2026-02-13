import React, { useState } from 'react';
import { Mail, Lock, Sparkles, Loader2 } from 'lucide-react';

/**
 * Login Component - Hyper Rare Gold Edition (v0.3.0)
 * 
 * Tema: Hyper Rare (Gold Secret Rare) - Inspirado em cartas Mew ex douradas.
 * Estética: Dourado metálico, luxuoso, partículas de brilho, fundo escuro premium.
 * Adaptação: UI moderna com legibilidade preservada.
 */
export const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const currentYear = new Date().getFullYear();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulação de chamada de API
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="flex items-center justify-center p-4 perspective-1000">
            {/* 
                Container Principal da Carta
                - Borda dourada brilhante simulada com padding e gradiente de fundo
                - Sombra dourada difusa para "aura" de carta rara
            */}
            <div className="relative w-[20.5rem] h-[30.8rem] rounded-[20px] p-[6px] transition-all duration-700 hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(234,179,8,0.3)] hover:shadow-[0_0_60px_-10px_rgba(234,179,8,0.5)] group">

                {/* 
                    Camada de Ouro (Borda/Fundo)
                    - Gradiente metálico complexo
                    - Animação de brilho rotativo (Spin Slow)
                */}
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-tr from-yellow-600 via-yellow-200 to-yellow-600 opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Camada Estática para definir a borda dourada fixa (caso a animação distraia) */}
                <div className="absolute inset-[1px] rounded-[19px] bg-gradient-to-b from-yellow-300 via-yellow-600 to-yellow-800" />

                {/* 
                    Miolo da Carta (Interface)
                    - Fundo escuro profundo (Slate 950) para contraste alto com o ouro
                    - Textura granulada sutil
                */}
                <div className="relative h-full w-full bg-[#0a0a0a] rounded-[16px] flex flex-col overflow-hidden relative z-10">

                    {/* Background Texture - Textura sutil de ruído/papel */}
                    <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                    {/* Brilhozinhos (Sparkles) Estáticos Decorativos - Característica da carta Hyper Rare */}
                    <div className="absolute top-4 right-6 text-yellow-200 animate-pulse delay-700 opacity-60">
                        <Sparkles className="w-6 h-6" />
                    </div>


                    {/* Cabeçalho */}
                    <div className="pt-8 px-8 pb-4 text-center border-b border-yellow-500/20 relative">
                        <div className="flex justify-center mb-2">
                            <div className="w-12 h-12 relative flex items-center justify-center filter drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600 to-yellow-300 rounded-full border-2 border-yellow-900/50 shadow-inner"></div>
                                <div className="absolute top-1/2 left-0 right-0 h-1 bg-yellow-900/40 -mt-0.5 z-10"></div>
                                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-200 rounded-full border-2 border-yellow-900/40 -translate-x-1/2 -translate-y-1/2 z-20 shadow-sm"></div>
                                <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full pointer-events-none"></div>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold font-['Poppins'] tracking-widest uppercase bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">
                            TCG Collection
                        </h1>
                        <p className="text-[10px] text-yellow-500/60 font-mono tracking-[0.2em] mt-1 uppercase">
                            Acesso do Colecionador
                        </p>
                    </div>

                    {/* Área do Formulário */}
                    <div className="flex-1 p-8 flex flex-col justify-center relative z-20">
                        <form onSubmit={handleLogin} className="space-y-6">

                            {/* Input E-mail */}
                            <div className="space-y-2 group/field">
                                <label className="text-xs font-semibold text-yellow-500/80 ml-1 uppercase tracking-wider flex items-center gap-2">
                                    <span>E-mail</span>
                                    <span className="h-px flex-1 bg-gradient-to-r from-yellow-900/50 to-transparent"></span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-yellow-500/10 blur-md rounded-lg opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-500" />
                                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-yellow-600/70 group-focus-within/field:text-yellow-400 transition-colors z-10" />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="relative w-full bg-[#151515] border border-yellow-700/30 text-yellow-100 text-sm rounded-lg pl-10 pr-4 py-3.5 focus:outline-none focus:border-yellow-500/70 focus:bg-[#1a1a10] transition-all placeholder-yellow-900/30 shadow-inner"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                            </div>

                            {/* Input Senha */}
                            <div className="space-y-2 group/field">
                                <label className="text-xs font-semibold text-yellow-500/80 ml-1 uppercase tracking-wider flex items-center gap-2">
                                    <span>Senha</span>
                                    <span className="h-px flex-1 bg-gradient-to-r from-yellow-900/50 to-transparent"></span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-yellow-500/10 blur-md rounded-lg opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-500" />
                                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-yellow-600/70 group-focus-within/field:text-yellow-400 transition-colors z-10" />
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="relative w-full bg-[#151515] border border-yellow-700/30 text-yellow-100 text-sm rounded-lg pl-10 pr-4 py-3.5 focus:outline-none focus:border-yellow-500/70 focus:bg-[#1a1a10] transition-all placeholder-yellow-900/30 shadow-inner"
                                        placeholder="••••••••"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <a href="#" className="text-[11px] text-yellow-600/70 hover:text-yellow-400 transition-colors cursor-pointer hover:underline decoration-yellow-600/50 underline-offset-2">
                                        Esqueci minha senha
                                    </a>
                                </div>
                            </div>

                            {/* Botão de Ação */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full mt-2 relative group/btn"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-lg blur opacity-60 group-hover/btn:opacity-100 transition duration-300"></div>
                                <div className="relative w-full bg-gradient-to-b from-yellow-400 via-yellow-500 to-amber-600 hover:from-yellow-300 hover:to-amber-500 text-black font-bold uppercase tracking-widest text-sm py-4 rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                                    {isLoading ? (
                                        <Loader2 className="w-5 h-5 animate-spin text-yellow-900" />
                                    ) : (
                                        <>
                                            <span className="drop-shadow-sm text-yellow-950">Entrar</span>
                                        </>
                                    )}
                                </div>
                            </button>
                        </form>
                    </div>

                    {/* Rodapé da Carta (Footer) */}
                    <div className="p-4 border-t border-yellow-500/10 flex justify-between items-end text-[10px] font-mono text-yellow-700/60 bg-gradient-to-t from-yellow-900/20 to-transparent">
                        <div className="flex flex-col">
                            <span className="font-bold text-yellow-600">Hyper Rare</span>
                            <span>253/151 • Gold Edition</span>
                        </div>
                        <span className="opacity-80">
                            © {currentYear} Parametrus.com
                        </span>
                    </div>
                </div>

                {/* Overlay de Reflexo Holográfico (Foil Effect) */}
                <div className="absolute inset-0 rounded-[20px] pointer-events-none z-30 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_200%] animate-shimmer" />
            </div>
        </div>
    );
};
