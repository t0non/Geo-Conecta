import React from "react";

export const GeoIcon = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center bg-transparent border-none shadow-none p-0 m-0 ${className}`}>
      <img 
        src="/imagens/iconegeo.png" 
        alt="Geo-Conecta" 
        style={{ width: '64px', height: '64px', minWidth: '64px', minHeight: '64px' }}
        className="object-contain flex-shrink-0 bg-transparent border-none p-0 m-0 shadow-none"
      />
    </div>
  );
};
