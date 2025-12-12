import React, { useState } from 'react';
import { BUDDHISM_DATA } from './constants';
import { LineageNode } from './types';
import TreeVisualization from './components/TreeVisualization';
import DetailPanel from './components/DetailPanel';
import AIChat from './components/AIChat';
import { Info } from 'lucide-react';

const App: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<LineageNode | null>(BUDDHISM_DATA);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleNodeSelect = (node: LineageNode) => {
    setSelectedNode(node);
    // If chat is open, reset it or keep it open? Let's keep it closed until requested for new node context
    setIsChatOpen(false);
  };

  return (
    <div className="h-screen w-screen flex flex-col relative overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-10 px-6 py-4 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 tracking-tight">
                佛教脉络
            </h1>
            <p className="text-amber-700 text-sm font-medium tracking-widest uppercase">
                Major Lineages of Buddhism
            </p>
        </div>
        <button 
            onClick={() => setShowAbout(!showAbout)}
            className="pointer-events-auto p-2 bg-white/50 backdrop-blur rounded-full hover:bg-white text-slate-600 transition-all shadow-sm"
        >
            <Info size={24} />
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative">
        <TreeVisualization 
            data={BUDDHISM_DATA} 
            onNodeSelect={handleNodeSelect} 
        />
        
        {/* Detail Panel Slide-over */}
        <div className={`absolute top-0 right-0 h-full transition-transform duration-500 ease-out pointer-events-none ${selectedNode ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="h-full pointer-events-auto">
                <DetailPanel 
                    node={selectedNode} 
                    onClose={() => setSelectedNode(null)}
                    onAskAI={() => setIsChatOpen(true)}
                />
            </div>
        </div>
      </main>

      {/* AI Chat Modal */}
      {selectedNode && (
        <AIChat 
            node={selectedNode} 
            isOpen={isChatOpen} 
            onClose={() => setIsChatOpen(false)} 
        />
      )}

      {/* About Modal */}
      {showAbout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" onClick={() => setShowAbout(false)}>
            <div className="bg-white max-w-md p-8 rounded-xl shadow-2xl border border-slate-100" onClick={e => e.stopPropagation()}>
                <h2 className="text-xl font-serif font-bold mb-4 text-slate-800">About this Project</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                    This visualization maps the historical development of Buddhist schools from the original teachings of Shakyamuni Buddha to modern global movements.
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                    <strong>Instructions:</strong> Drag to pan, scroll to zoom. Click on any node to view details about that specific lineage or school. Use the AI Sage to ask deeper questions.
                </p>
                <button 
                    onClick={() => setShowAbout(false)}
                    className="w-full py-2 bg-slate-800 text-white rounded hover:bg-slate-700 transition-colors"
                >
                    Close
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default App;