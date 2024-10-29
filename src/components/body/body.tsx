import Torso from '@/components/body/body-parts/torso';
import Head from '@/components/body/body-parts/head';
import { cn } from '@nextui-org/theme';
import { bodyParts } from '@/lib/data/body-parts';
import BodyPart from '@/components/body/body-parts/body-part';
import { useState } from 'react';
import { BodyParts } from '@/lib/enum';

export default function ({ className }: { className?: string }) {
  const [selectedPart, setSelectedPart] = useState<BodyParts | -1>(-1);

  return (
    <svg className={cn(className)} viewBox='0 0 428 554'>
      <Torso />
      {bodyParts.map((bodyPart, index) => (
        <BodyPart
          part={bodyPart.part}
          key={index}
          strokeWidth={bodyPart.stroke}
          x={bodyPart.x}
          y={bodyPart.y}
          d={bodyPart.d}
          selectedPart={selectedPart}
          setSelectedPart={setSelectedPart}
        >
          123
        </BodyPart>
      ))}
      <Head />
    </svg>
  );
}
