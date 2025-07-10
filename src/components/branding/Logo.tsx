
import React from 'react';

export const Logo = ({ className = "h-10 w-auto" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 120 80" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tree trunk */}
      <rect x="55" y="45" width="10" height="25" fill="#8B4513" rx="2"/>
      
      {/* Tree leaves - colorful circles */}
      <circle cx="60" cy="35" r="20" fill="#10B981" opacity="0.9"/>
      <circle cx="45" cy="25" r="12" fill="#F59E0B" opacity="0.8"/>
      <circle cx="75" cy="25" r="12" fill="#3B82F6" opacity="0.8"/>
      <circle cx="50" cy="40" r="8" fill="#EF4444" opacity="0.7"/>
      <circle cx="70" cy="40" r="8" fill="#8B5CF6" opacity="0.7"/>
      <circle cx="60" cy="20" r="10" fill="#EC4899" opacity="0.8"/>
      
      {/* Book at base */}
      <rect x="45" y="65" width="16" height="12" fill="#3B82F6" rx="1"/>
      <rect x="59" y="65" width="16" height="12" fill="#10B981" rx="1"/>
      <line x1="52" y1="68" x2="52" y2="74" stroke="white" strokeWidth="1"/>
      <line x1="67" y1="68" x2="67" y2="74" stroke="white" strokeWidth="1"/>
      
      {/* Mentor figure */}
      <circle cx="85" cy="55" r="6" fill="#F59E0B"/>
      <rect x="82" y="60" width="6" height="12" fill="#3B82F6" rx="3"/>
      <circle cx="83" cy="53" r="1" fill="white"/>
      <circle cx="87" cy="53" r="1" fill="white"/>
      <path d="M 83 56 Q 85 58 87 56" stroke="white" strokeWidth="0.5" fill="none"/>
    </svg>
  );
};
