import React from "react";

type CustomButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function CustomButton({ children, className = "", onClick }: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 mx-3 bg-purple-500 text-gray-200 text-xs font-semibold transition-all duration-200 hover:bg-purple-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    >
      {children}
    </button>
  );
}