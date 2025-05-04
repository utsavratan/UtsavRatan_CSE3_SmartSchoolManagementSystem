
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FBCFE8] via-[#6A82FB] to-[#1A2980]"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Abstract shapes with blue colors */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1A2980] rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-20 -left-20 w-60 h-60 bg-[#6A82FB] rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-[#4A00E0] rounded-full opacity-20 blur-3xl"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#1A2980] rounded-br-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-[#6A82FB] rounded-tl-3xl opacity-20"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
