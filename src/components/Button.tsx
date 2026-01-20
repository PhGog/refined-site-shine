import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  primary?: boolean;
  className?: string;
  href?: string;
}

export const Button = ({ 
  children, 
  primary = true, 
  className = "", 
  href,
  ...props 
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseClasses = cn(
    "group relative px-8 py-3.5 text-sm tracking-widest uppercase font-medium inline-block cursor-pointer",
    "transition-all duration-500 ease-out overflow-hidden",
    primary 
      ? "bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-[0_0_30px_rgba(184,151,113,0.3)]" 
      : "text-primary border border-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
    className
  );

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
    </span>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={baseClasses} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
};
