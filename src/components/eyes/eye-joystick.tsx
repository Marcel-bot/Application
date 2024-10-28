'use client';

import { useEffect } from 'react';
import { useEyes } from '@/lib/providers/eyes-provider';
import { pyth } from '@/lib/math';
import { cn } from '@nextui-org/theme';

export default function ({ className }: { className?: string }) {
  const { svg, dragging, joystick, pos } = useEyes();

  useEffect(() => {
    function mouseup() {
      dragging.current = false;
    }

    function mousemove(e: MouseEvent) {
      if (!dragging.current) {
        return;
      }

      const bBox = svg.current!.getBoundingClientRect();

      let x = ((e.clientX - bBox.x) * 240) / bBox.width;
      let y = ((e.clientY - bBox.y) * 240) / bBox.height;

      let d = pyth({ x: 120, y: 120 }, { x, y });

      if (d > 120) {
        x = 120 + (120 / d) * (x - 120);
        y = 120 + (120 / d) * (y - 120);
      }

      pos.current.x = x;
      pos.current.y = y;

      joystick.current!.setAttribute('x', String(x - 20));
      joystick.current!.setAttribute('y', String(y - 20));
    }

    window.addEventListener('mouseup', mouseup);
    window.addEventListener('mousemove', mousemove);

    return () => {
      window.removeEventListener('mouseup', mouseup);
      window.removeEventListener('mousemove', mousemove);
    };
  }, []);

  return (
    <svg className={cn(className)} ref={svg} viewBox='0 0 240 240'>
      <circle cx={120} cy={120} r={120} fill='#282828' />
      <rect
        ref={joystick}
        onMouseDown={() => {
          dragging.current = true;
        }}
        x={pos.current.x - 20}
        y={pos.current.y - 20}
        width={40}
        height={40}
        rx={12}
        fill='#E0E0E0'
      />
    </svg>
  );
}
