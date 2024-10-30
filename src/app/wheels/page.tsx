'use client';

import { Button } from '@nextui-org/button';
import { Slider } from '@nextui-org/react';

export default function Page() {
  return (
    <main className='flex grow items-center justify-center p-4'>
      <div className='flex flex-col gap-8'>
        <div className='flex gap-20'>
          <div className='grid h-80 w-80 grid-cols-3 grid-rows-3'>
            <div className='flex items-center justify-center [grid-column:2] [grid-row:1]'>
              <Button variant='light' className='h-auto w-auto p-2' isIconOnly>
                <i className='fa fa-arrow-up text-6xl' />
              </Button>
            </div>
            <div className='flex items-center justify-center [grid-column:3] [grid-row:2]'>
              <Button variant='light' className='h-auto w-auto p-2' isIconOnly>
                <i className='fa fa-arrow-rotate-right text-6xl' />
              </Button>
            </div>
            <div className='flex items-center justify-center [grid-column:2] [grid-row:3]'>
              <Button variant='light' className='h-auto w-auto p-2' isIconOnly>
                <i className='fa fa-arrow-down text-6xl' />
              </Button>
            </div>
            <div className='flex items-center justify-center [grid-column:1] [grid-row:2]'>
              <Button variant='light' className='h-auto w-auto p-2' isIconOnly>
                <i className='fa fa-arrow-rotate-left text-6xl' />
              </Button>
            </div>
          </div>
          <Slider className='h-80' orientation='vertical' />
        </div>
        <Button>Emergency stop</Button>
      </div>
    </main>
  );
}
