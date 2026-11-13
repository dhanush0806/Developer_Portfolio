import React from 'react';
import { Terminal } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const CodeEditor = ({ typedCode }) => {
  return (
    <SpotlightCard tilt={true} className="p-0 border-slate-700 bg-[#0d1117] shadow-2xl shadow-cyan-500/10">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-800 bg-[#161b22]">
        <div className="flex gap-2">
          <div className="h-3.5 w-3.5 rounded-full bg-rose-500 hover:bg-rose-400 transition-colors cursor-pointer"></div>
          <div className="h-3.5 w-3.5 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors cursor-pointer"></div>
          <div className="h-3.5 w-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 transition-colors cursor-pointer"></div>
        </div>
        <div className="ml-4 text-sm font-mono text-slate-400 flex items-center gap-2">
          <Terminal size={14} className="text-cyan-500" /> developer.js
        </div>
      </div>
      <div className="p-4 overflow-x-auto min-h-[320px]">
        <pre className="font-mono text-[15px] md:text-base text-slate-300 leading-[2]">
          <code>
  {typedCode.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {i === 0 ? (
        <>
          <span className="text-purple-400 font-bold">const</span>{' '}
          <span className="text-blue-400">developer</span>{' '}
          <span className="text-cyan-400">=</span> {'{'}
        </>
      ) : (
        <span className="opacity-90">{line}</span>
      )}
      <br />
    </React.Fragment>
  ))}
  <span className="animate-pulse inline-block w-2.5 h-5 bg-cyan-400 align-middle ml-1 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
</code>
        </pre>
      </div>
    </SpotlightCard>
  );
};