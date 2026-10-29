import React from 'react';

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* The Grid - Extremely faint */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Floating Shapes - Very transparent */}
      <div className="absolute top-[15%] left-[10%] w-20 h-20 border border-white/[0.03] rotate-12"></div>
      <div className="absolute top-[60%] right-[15%] w-12 h-12 border border-white/[0.03] rotate-45"></div>
      <div className="absolute bottom-[20%] left-[20%] w-16 h-16 bg-white/[0.02] rotate-12"></div>
      <div className="absolute top-[30%] right-[25%] w-10 h-10 border border-white/[0.03] rotate-30"></div>
      <div className="absolute bottom-[10%] right-[10%] w-24 h-24 border border-white/[0.02] rotate-45"></div>
    </div>
  );
}

export default Background;