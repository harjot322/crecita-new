import React from 'react';

const Logo = ({ className = "w-10 h-10", textClassName = "text-3xl" }) => {
  return (
    <div className="flex items-center space-x-3 group">
      {/* Logo based on the provided image - circular design with C */}
      <div className={`${className} relative`}>
        <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
          <span className="text-black font-bold text-2xl">C</span>
        </div>
        <div className="absolute inset-0 bg-[rgb(218,255,1)] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className={`${textClassName} font-bold text-white tracking-tight`}>
          CRECITA
        </span>
        <span className="text-xs text-[rgb(161,161,170)] uppercase tracking-wider">
          DevOps & MLOps
        </span>
      </div>
    </div>
  );
};

export default Logo;