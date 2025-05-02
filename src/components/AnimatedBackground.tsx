
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-white"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute top-20 -left-20 w-60 h-60 bg-indigo-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
