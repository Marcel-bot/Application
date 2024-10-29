import { Dispatch, SetStateAction } from 'react';
import { BodyParts } from '@/lib/enum';

export default function ({
  children,
  x,
  y,
  d,
  strokeWidth,
  part,
  selectedPart,
  setSelectedPart
}: {
  children: string;
  x: string;
  y: string;
  d: string;
  strokeWidth?: string;
  part: BodyParts;
  selectedPart: BodyParts | -1;
  setSelectedPart: Dispatch<SetStateAction<BodyParts | -1>>;
}) {
  return (
    <>
      <path
        onClick={() => {
          setSelectedPart(part);
        }}
        xmlns='http://www.w3.org/2000/svg'
        d={d}
        fill={part === selectedPart ? '#FFFFFF' : '#454545'}
        stroke={strokeWidth ? '#000000' : 'none'}
        strokeWidth={strokeWidth}
      />
      <text
        xmlns='http://www.w3.org/2000/svg'
        fill='black'
        xmlSpace='preserve'
        style={{
          whiteSpace: 'pre',
          userSelect: 'none',
          pointerEvents: 'none'
        }}
        fontSize='10'
        letterSpacing='0em'
      >
        <tspan x={x} y={y}>
          {children}
        </tspan>
      </text>
    </>
  );
}
