import React, { useState } from 'react';
import { History, X, Sparkles, Bug, FileMinus, RefreshCw } from 'lucide-react';

// --- Interfaces ---
type ChangeType = 'added' | 'changed' | 'fixed' | 'removed';

interface ChangeLogVersion {
    version: string;
    date: string;
    changes: {
        type: ChangeType;
        description: string;
    }[];
}

// --- Dados Mockados (Baseado no histórico do projeto) ---
// Em um cenário real, isso poderia vir de um arquivo JSON ou API
const changelogData: ChangeLogVersion[] = [
    {
        version: '0.6.0',
        date: '13/02/2026',
        changes: [
            { type: 'added', description: 'Implementação do widget "Novidades" (Changelog) interativo.' },
            { type: 'added', description: 'Sistema de visualização de histórico de versões diretamente na UI.' },
        ]
    },
    {
        version: '0.5.1',
        date: '13/02/2026',
        changes: [
            { type: 'fixed', description: 'Correção crítica na configuração do Tailwind CSS (sintaxe quebrada).' },
            { type: 'fixed', description: 'Restauração de animações (keyframes) perdidas na refatoração.' },
        ]
    },
    {
        version: '0.5.0',
        date: '13/02/2026',
        changes: [
            { type: 'removed', description: 'Remoção do carrossel de cartas do background.' },
            { type: 'changed', description: 'Refatoração e renomeação do componente Login.' },
            { type: 'removed', description: 'Limpeza de assets não utilizados (logos vite/react).' },
        ]
    },
    {
        version: '0.4.3',
        date: '13/02/2026',
        changes: [
            { type: 'changed', description: 'Migração para assets locais no carrossel de fundo.' },
            { type: 'added', description: 'Criação de placeholders SVG para cartas Pokémon.' },
        ]
    },
    {
        version: '0.4.0',
        date: '13/02/2026',
        changes: [
            { type: 'added', description: 'Implementação inicial do Background Marquee (Carrossel).' },
            { type: 'changed', description: 'Ajuste de animações do card de login (remoção do spin).' },
        ]
    },
    {
        version: '0.3.0',
        date: '13/02/2026',
        changes: [
            { type: 'changed', description: 'Redesign completo: Tema Hyper Rare Gold Edition.' },
            { type: 'added', description: 'Efeitos de partículas e gradientes metálicos.' },
        ]
    }
];

// --- Utilitários de UI ---
const getTypeColor = (type: ChangeType) => {
    switch (type) {
        case 'added': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
        case 'changed': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
        case 'fixed': return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
        case 'removed': return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
};

const getTypeIcon = (type: ChangeType) => {
    switch (type) {
        case 'added': return <Sparkles className="w-3 h-3" />;
        case 'changed': return <RefreshCw className="w-3 h-3" />;
        case 'fixed': return <Bug className="w-3 h-3" />;
        case 'removed': return <FileMinus className="w-3 h-3" />;
    }
};

const getLabel = (type: ChangeType) => {
    switch (type) {
        case 'added': return 'Adicionado';
        case 'changed': return 'Alterado';
        case 'fixed': return 'Corrigido';
        case 'removed': return 'Removido';
    }
}

// --- Componente Principal ---
export const ChangelogWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const latestVersion = changelogData[0];

    // Contagem de estatísticas da versão atual
    const stats = latestVersion.changes.reduce((acc, curr) => {
        acc[curr.type] = (acc[curr.type] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    return (
        <>
            {/* Floating Action Button (FAB) */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 left-6 z-50 group flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)] hover:scale-110 hover:border-yellow-500/50 transition-all duration-300"
                title="Histórico de Versões"
            >
                <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <History className="w-5 h-5 text-slate-300 group-hover:text-yellow-400 transition-colors" />
            </button>

            {/* Modal / Popup */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div
                        className="relative w-full max-w-lg max-h-[80vh] bg-[#0f172a] rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro
                    >
                        {/* Background Effects */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        {/* Header */}
                        <div className="relative p-6 border-b border-white/5 bg-white/5 backdrop-blur-md shrink-0">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-xl font-bold text-white tracking-wide">Novidades</h2>
                                    <p className="text-xs text-slate-400 mt-1 font-mono uppercase tracking-wider">
                                        Versão Atual: <span className="text-yellow-400 font-bold">v{latestVersion.version}</span>
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Badges de Estatísticas da Versão Atual */}
                            <div className="flex gap-2 flex-wrap">
                                {Object.entries(stats).map(([type, count]) => (
                                    <span key={type} className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border ${getTypeColor(type as ChangeType)}`}>
                                        {getTypeIcon(type as ChangeType)}
                                        {count} {getLabel(type as ChangeType)}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Body (Scrollable List) */}
                        <div className="p-6 overflow-y-auto custom-scrollbar space-y-8 relative z-10">
                            {changelogData.map((versionBlock, index) => (
                                <div key={versionBlock.version} className={`relative pl-4 ${index !== changelogData.length - 1 ? 'border-l border-white/5 pb-8' : ''}`}>
                                    {/* Linha do tempo visual (dot) */}
                                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-700 border-2 border-[#0f172a] shadow-[0_0_0_2px_rgba(255,255,255,0.05)]" />

                                    <div className="flex items-baseline gap-2 mb-3">
                                        <h3 className="text-sm font-bold text-slate-200">v{versionBlock.version}</h3>
                                        <span className="text-[10px] text-slate-500 font-mono">{versionBlock.date}</span>
                                    </div>

                                    <ul className="space-y-3">
                                        {versionBlock.changes.map((change, idx) => (
                                            <li key={idx} className="text-sm text-slate-400 flex items-start gap-3 group">
                                                <div className={`mt-0.5 shrink-0 w-5 h-5 rounded flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity ${getTypeColor(change.type).split(' ')[0]}`}>
                                                    {getTypeIcon(change.type)}
                                                </div>
                                                <span className="leading-relaxed group-hover:text-slate-200 transition-colors">
                                                    {change.description}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="p-3 border-t border-white/5 bg-black/20 text-center text-[10px] text-slate-600 font-mono">
                            TCG Collection • Changelog
                        </div>
                    </div>

                    {/* Backdrop click to close */}
                    <div className="absolute inset-0 z-[-1]" onClick={() => setIsOpen(false)} />
                </div>
            )}
        </>
    );
};
