import React, { useState, useEffect } from 'react';
import { History, X, Sparkles, Bug, FileMinus, RefreshCw } from 'lucide-react';
// @ts-ignore
import changelogRaw from '../../CHANGELOG.md?raw';

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

// --- Utils ---
const parseChangelog = (md: string): ChangeLogVersion[] => {
    const versions: ChangeLogVersion[] = [];

    // Split by version header to handle blocks
    const blocks = md.split(/^## \[/m).slice(1); // Skip preamble

    blocks.forEach(block => {
        // Re-add header start for regex matching if needed, or just parse string
        const headerMatch = block.match(/^([\d\.]+)\] - ([\d\/ :]+)/);
        if (!headerMatch) return;

        const version = headerMatch[1];
        const date = headerMatch[2];
        const changes: { type: ChangeType, description: string }[] = [];

        // Split by types
        const typeBlocks = block.split(/^### /m).slice(1);

        typeBlocks.forEach(typeBlock => {
            const typeMatch = typeBlock.match(/^(Added|Changed|Fixed|Removed|Deprecated|Security)/);
            if (!typeMatch) return;

            const typeStr = typeMatch[1].toLowerCase();
            const type = (['added', 'changed', 'fixed', 'removed'].includes(typeStr) ? typeStr : 'changed') as ChangeType;

            // Get lines starting with -
            const lines = typeBlock.split('\n').filter(line => line.trim().startsWith('-'));
            lines.forEach(line => {
                changes.push({
                    type,
                    description: line.replace(/^-\s+/, '').trim()
                });
            });
        });

        versions.push({ version, date, changes });
    });

    return versions;
};

// --- Utilitários de UI ---
const getTypeColor = (type: ChangeType) => {
    switch (type) {
        case 'added': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
        case 'changed': return 'bg-blue-400/20 text-blue-200 border-blue-400/30';
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
    const [changelogData, setChangelogData] = useState<ChangeLogVersion[]>([]);

    useEffect(() => {
        if (changelogRaw) {
            const parsed = parseChangelog(changelogRaw);
            setChangelogData(parsed);
        }
    }, []);

    const latestVersion = changelogData[0] || { version: '0.0.0', date: '-', changes: [] };

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
                className="fixed bottom-6 left-6 z-50 group flex items-center justify-center w-12 h-12 rounded-full bg-blue-900/80 backdrop-blur-md border border-white/20 shadow-[0_0_20px_-5px_rgba(29,78,216,0.5)] hover:scale-110 hover:border-yellow-400 transition-all duration-300"
                title="Histórico de Versões"
            >
                <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <History className="w-5 h-5 text-blue-200 group-hover:text-yellow-400 transition-colors" />
            </button>

            {/* Modal / Popup */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div
                        className="relative w-full max-w-lg max-h-[80vh] bg-gradient-to-br from-[#1e40af] via-[#172554] to-[#1e3a8a] rounded-2xl shadow-2xl border-[3px] border-[#fbbf24] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Background Effects (Starburst) */}
                        <div className="absolute inset-0 opacity-30 bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_rgba(255,255,255,0.1)_30deg,_transparent_60deg,_rgba(255,255,255,0.1)_90deg,_transparent_120deg,_rgba(255,255,255,0.1)_150deg,_transparent_180deg,_rgba(255,255,255,0.1)_210deg,_transparent_240deg,_rgba(255,255,255,0.1)_270deg,_transparent_300deg,_rgba(255,255,255,0.1)_330deg,_transparent_360deg)] pointer-events-none" />

                        {/* Header */}
                        <div className="relative p-6 border-b border-white/10 bg-blue-950/40 backdrop-blur-md shrink-0">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-xl font-bold text-[#ffcb05] tracking-wide drop-shadow-sm" style={{ textShadow: '1px 1px 0 #1e3a8a' }}>
                                        Novidades
                                    </h2>
                                    <p className="text-xs text-blue-200 mt-1 font-mono uppercase tracking-wider flex items-center gap-2">
                                        Versão Atual: <span className="text-white font-bold">v{latestVersion.version}</span>
                                        <span className="w-1 h-1 rounded-full bg-blue-400" />
                                        <span>{latestVersion.date}</span>
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 rounded-full hover:bg-white/10 text-blue-300 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Badges de Estatísticas */}
                            <div className="flex gap-2 flex-wrap mt-2">
                                {Object.entries(stats).map(([type, count]) => (
                                    <span key={type} className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border ${getTypeColor(type as ChangeType)}`}>
                                        {getTypeIcon(type as ChangeType)}
                                        {count} {getLabel(type as ChangeType)}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Body (Scrollable List) */}
                        <div className="p-6 overflow-y-auto custom-scrollbar space-y-8 relative z-10 bg-blue-950/20">
                            {changelogData.map((versionBlock, index) => (
                                <div key={versionBlock.version} className={`relative pl-4 ${index !== changelogData.length - 1 ? 'border-l border-blue-500/30 pb-8' : ''}`}>
                                    {/* Dot */}
                                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-yellow-400 border-2 border-blue-900 shadow-[0_0_5px_rgba(251,191,36,0.5)]" />

                                    <div className="flex items-baseline gap-2 mb-3">
                                        <h3 className="text-sm font-bold text-white">v{versionBlock.version}</h3>
                                        <span className="text-[10px] text-blue-300 font-mono">{versionBlock.date}</span>
                                    </div>

                                    <ul className="space-y-3">
                                        {versionBlock.changes.map((change, idx) => (
                                            <li key={idx} className="text-sm text-blue-100/80 flex items-start gap-3 group">
                                                <div className={`mt-0.5 shrink-0 w-5 h-5 rounded flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity ${getTypeColor(change.type).split(' ')[0]}`}>
                                                    {getTypeIcon(change.type)}
                                                </div>
                                                <span className="leading-relaxed group-hover:text-white transition-colors">
                                                    {change.description}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="p-3 border-t border-white/5 bg-blue-950/50 text-center text-[10px] text-blue-400 font-mono">
                            TCG Collection • Changelog
                        </div>
                    </div>

                    {/* Backdrop */}
                    <div className="absolute inset-0 z-[-1]" onClick={() => setIsOpen(false)} />
                </div>
            )}
        </>
    );
};
