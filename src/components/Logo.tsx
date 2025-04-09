import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-8 h-8', className)}
    >
      {/* Main E shape */}
      <path
        d="M20 20 H80 V30 H30 V45 H70 V55 H30 V70 H80 V80 H20 Z"
        stroke="url(#logo-gradient)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Small C shape inside */}
      <path
        d="M55 40 C65 40, 70 45, 70 50 C70 55, 65 60, 55 60"
        stroke="url(#logo-gradient-alt)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Decorative dots */}
      <circle cx="80" cy="20" r="3" fill="hsl(var(--primary))" />
      <circle cx="20" cy="80" r="3" fill="hsl(var(--accent))" />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="logo-gradient" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--primary))" />
          <stop offset="1" stopColor="hsl(var(--accent))" />
        </linearGradient>
        <linearGradient id="logo-gradient-alt" x1="55" y1="40" x2="70" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--accent))" />
          <stop offset="1" stopColor="hsl(var(--primary))" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;