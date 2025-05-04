
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0] via-[#FFEFD6] to-white"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Soft shapes instead of waves */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFDAB9] rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute top-20 -left-20 w-60 h-60 bg-[#FFE4C4] rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-[#FFF0DB] rounded-full opacity-50 blur-3xl"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FFDDC1] rounded-br-3xl opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-[#FFE8D6] rounded-tl-3xl opacity-30"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
