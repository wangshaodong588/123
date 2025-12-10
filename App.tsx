import React, { Suspense } from 'react';
import { TreeExperience } from './components/TreeExperience';
import { UI } from './components/UI';
import { WebcamController } from './components/WebcamController';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-[#051505]">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
            <TreeExperience />
        </Suspense>
      </div>

      {/* Inputs & Overlays */}
      <WebcamController />
      <UI />
      
      {/* Loading Fallback Visual */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black z-50 transition-opacity duration-1000 opacity-0 animate-[fadeOut_1s_ease-out_forwards]" style={{animationDelay: '1s'}}>
        <span className="text-[#FFD700] font-serif text-2xl animate-pulse">Initializing Luxury...</span>
      </div>
    </div>
  );
};

export default App;