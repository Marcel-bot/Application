'use client';

import { Bezier } from '@/lib/types';
import { cn } from '@nextui-org/theme';

export default function ({
  className,
  beziers
}: {
  className?: string;
  beziers: Bezier[];
}) {
  return (
    <svg className={cn(className)} viewBox='0 0 240 240'>
      <circle r={120} cx={120} cy={120} stroke='#FFFFFF' />
      {beziers.map((bezier, index) => (
        <path
          d={`M${bezier.start.x} ${bezier.start.y} C${bezier.control1.x} ${bezier.control1.y} ${bezier.control2.x} ${bezier.control2.y} ${bezier.end.x} ${bezier.end.y}`}
          stroke='#FFFFFF'
          strokeLinecap='round'
          key={index}
        />
      ))}
    </svg>
  );
}
