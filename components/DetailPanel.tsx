import React from 'react';
import { LineageNode } from '../types';
import { X, MapPin, BookOpen, Users } from 'lucide-react';

interface DetailPanelProps {
  node: LineageNode | null;
  onClose: () => void;
  onAskAI: () => void;
}

const DetailPanel: React.FC<DetailPanelProps> = ({ node, onClose, onAskAI }) => {
  if (!node) return null;

  return (
    <div className="absolute right-0 top-0 h-full w-full md:w-96 bg-white/95 backdrop-blur-md border-l border-amber-100 shadow-2xl p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out z-20">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500"
      >
        <X size={20} />
      </button>

      <div className="mt-8 space-y-6">
        {/* Header */}
        <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-2" style={{ backgroundColor: node.color || '#94a3b8' }}>
                {node.period || "Lineage / School"}
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-800">{node.name}</h2>
            <h3 className="text-lg text-amber-700 font-medium italic mt-1">{node.translation}</h3>
        </div>

        <div className="w-full h-px bg-amber-100" />

        {/* Description */}
        <p className="text-slate-600 leading-relaxed font-light text-sm md:text-base">
          {node.description || "No specific description available for this lineage."}
        </p>

        {/* Metadata Grid */}
        <div className="grid gap-4">
            {node.locations && (
                <div className="flex items-start space-x-3">
                    <MapPin className="text-amber-500 mt-1 shrink-0" size={18} />
                    <div>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">Regions</h4>
                        <p className="text-sm text-slate-700">{node.locations.join(", ")}</p>
                    </div>
                </div>
            )}
            
            {node.coreThemes && (
                <div className="flex items-start space-x-3">
                    <BookOpen className="text-amber-500 mt-1 shrink-0" size={18} />
                    <div>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">Core Themes</h4>
                        <div className="flex flex-wrap gap-2">
                            {node.coreThemes.map(theme => (
                                <span key={theme} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">
                                    {theme}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {node.keyFigures && (
                <div className="flex items-start space-x-3">
                    <Users className="text-amber-500 mt-1 shrink-0" size={18} />
                    <div>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">Key Figures</h4>
                        <p className="text-sm text-slate-700">{node.keyFigures.join(", ")}</p>
                    </div>
                </div>
            )}
        </div>

        <div className="pt-6">
            <button 
                onClick={onAskAI}
                className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg shadow-md hover:shadow-lg hover:from-amber-700 hover:to-amber-800 transition-all flex items-center justify-center gap-2 font-medium"
            >
                <span className="text-lg">✨</span> Ask Sage AI about {node.name}
            </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPanel;
