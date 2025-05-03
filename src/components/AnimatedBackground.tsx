
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F5] via-[#FFE8DD] to-white"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FDE1D3] rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute top-20 -left-20 w-60 h-60 bg-[#E5DEFF] rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-[#FEF7CD] rounded-full opacity-50 blur-3xl"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
