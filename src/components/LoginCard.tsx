import React, { useState } from 'react';
import { Mail, Lock, Sparkles, Loader2 } from 'lucide-react';

/**
 * LoginCard Component
 * 
 * Represents the login interface styled as a premium TCG card.
 * Uses Tailwind CSS for all styling, including complex gradients and animations.
 */
export const LoginCard: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="flex items-center justify-center p-4 perspective-1000">
            {/* 
        Card Container
        - w-[22rem] & h-[30.8rem]: Maintains ~2.5/3.5 aspect ratio (352px x 492px)
        - relative: Positioning context for absolute children (effects)
        - group: Allows hover effects on children when hovering container
        - transition-transform: Smooth movement for 3D or hover effects
      */}
            <div className="relative w-[22rem] h-[30.8rem] rounded-2xl p-[2px] overflow-hidden group hover:scale-105 transition-transform duration-500 ease-out shadow-2xl shadow-black/50">

                {/*
          Holographic Border Effect
          - absolute inset-0: Covers the entire container
          - bg-gradient-to-br: Gradient direction
          - from-cyan-400 via-purple-500 to-pink-500: Vibrant holographic colors
          - animate-spin-slow (custom via style): Rotating gradient
          Note: We simulate the 'foil' border by having a colorful background and a slightly smaller inner container.
        */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_4s_linear_infinite]" />

                {/* 
          Inner Card Body (Dark Surface)
          - relative: Stacks above the border background
          - h-full w-full: Fills the container (minus the padding from parent)
          - bg-[#1a1a1a]: Dark textured background similar to TCG card backing
          - rounded-2xl: Matches data radius with slight offset
          - flex col: Layout direction
        */}
                <div className="relative h-full w-full bg-[#121212] rounded-[14px] flex flex-col p-6 z-10 overflow-hidden">

                    {/* Header / "Card Name" Area */}
                    <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                            <h1 className="text-xl font-bold font-['Poppins'] tracking-wide bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">
                                TRAINER LOGIN
                            </h1>
                        </div>
                        <span className="text-xs font-mono text-gray-500">HP 100</span>
                    </div>

                    {/* "Card Art" / Main Visual Area (Simulated with icon/illustration for now) */}
                    <div className="w-full h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-gray-700 mb-6 flex items-center justify-center relative group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-shadow duration-300">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                        <div className="text-center z-10">
                            <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg ring-2 ring-white/10">
                                <Lock className="w-8 h-8 text-white drop-shadow-md" />
                            </div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest">Security Clearance</p>
                        </div>
                    </div>

                    {/* Login Form Items ("Attacks" / "Abilities") */}
                    <form onSubmit={handleLogin} className="space-y-4 flex-1">

                        {/* Email Input Group */}
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-gray-400 ml-1">Email</label>
                            <div className="relative group/input">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within/input:text-purple-400 transition-colors" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#1e1e1e] border border-gray-700 text-gray-200 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-600"
                                    placeholder="trainer@example.com"
                                />
                            </div>
                        </div>

                        {/* Password Input Group */}
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-gray-400 ml-1">Password</label>
                            <div className="relative group/input">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within/input:text-purple-400 transition-colors" />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-[#1e1e1e] border border-gray-700 text-gray-200 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-600"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* Login Button ("Special Move") */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full mt-6 relative overflow-hidden rounded-lg group/btn"
                        >
                            {/* Button Background Gradient - Holographic Feel */}
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 transition-transform duration-300 group-hover/btn:scale-105" />

                            {/* Shimmer Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />

                            {/* Button Content */}
                            <div className="relative px-6 py-3 flex items-center justify-center gap-2 font-bold tracking-wide text-white">
                                {isLoading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        <span>UNLOCK DECK</span>
                                        <Sparkles className="w-4 h-4" />
                                    </>
                                )}
                            </div>
                        </button>
                    </form>

                    {/* Footer / Copyright / Card Set Info */}
                    <div className="mt-4 pt-3 border-t border-gray-800 flex justify-between text-[10px] text-gray-600 font-mono">
                        <span>001/151 • Common</span>
                        <span>© 2024 CRM-TCG</span>
                    </div>
                </div>

                {/* Glossy Overlay (Reflection) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-2xl z-20" />
            </div>
        </div>
    );
};
