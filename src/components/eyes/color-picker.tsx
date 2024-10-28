'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import { Button } from '@nextui-org/button';
import { ReactNode, useState } from 'react';
import { Chrome, hexToRgba, hsvaToHex } from '@uiw/react-color';
import { GithubPlacement } from '@uiw/react-color-github';

export default function ({ children }: { children: ReactNode }) {
  const [hsva, setHsva] = useState({ h: 0, s: 25.71, v: 82.35, a: 0.32 });
  const hex = hsvaToHex(hsva);
  const rgba = hexToRgba(hex);

  const L =
    (0.2126 * rgba.r) / 255 + (0.7152 * rgba.g) / 255 + (0.0722 * rgba.b) / 255;

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          style={{
            background: hex,
            color: L <= 0.5 ? '#FFFFFF' : '#000000'
          }}
        >
          {children}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='p-3'>
        {typeof window !== undefined && (
          <Chrome
            color={hsva}
            placement={GithubPlacement.Bottom}
            onChange={(color) => {
              setHsva(color.hsva);
            }}
          />
        )}
      </PopoverContent>
    </Popover>
  );
}
