'use client';

import Body from '@/components/body/body';
import MotionCreator from '@/components/body/motion-creator/motion-creator';
import { motionGroupsPlaceholder } from '@/lib/data/motion-groups-placeholder';
import { Select, SelectItem } from '@nextui-org/select';
import Counter from '@/components/body/counter';
import { Button } from '@nextui-org/button';
import { Slider } from '@nextui-org/react';

export default function Page() {
  return (
    <main className='flex grow justify-between gap-8 px-12 pt-12'>
      <MotionCreator
        className='max-w-[34rem]'
        motionGroups={motionGroupsPlaceholder}
      />
      <div className='flex grow basis-0 flex-col gap-4'>
        <div className='flex gap-4'>
          <Button className='grow basis-0 bg-[#282828]'>
            Save motion group
          </Button>
          <Button className='grow basis-0 bg-[#282828]'>
            New motion group
          </Button>
        </div>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(4rem,1fr))] gap-4'>
          <Button className='aspect-square h-auto bg-[#282828]'>
            Flex hands
          </Button>
          <Button className='aspect-square h-auto bg-[#282828]'>
            Flex hands
          </Button>
          <Button className='aspect-square h-auto bg-[#282828]'>
            Flex hands
          </Button>
          <Button className='aspect-square h-auto bg-[#282828]'>
            Flex hands
          </Button>
          <Button className='aspect-square h-auto bg-[#282828]'>
            Flex hands
          </Button>
          <Button className='aspect-square h-auto bg-[#282828]'>
            Flex hands
          </Button>
          <Button className='aspect-square h-auto bg-[#282828]'>
            Flex hands
          </Button>
          <Button className='aspect-square h-auto bg-[#282828]'>
            Flex hands
          </Button>
          <Button className='aspect-square h-auto bg-[#282828]'>
            Flex hands
          </Button>
          <Button className='aspect-square h-auto bg-[#282828]'>
            Flex hands
          </Button>
          <Button className='aspect-square h-auto bg-[#282828]'>
            Flex hands
          </Button>
        </div>
      </div>
      <div className='flex max-w-[32rem] grow flex-col gap-4 pb-12'>
        <Body className='grow basis-0' />
        <div className='flex items-center gap-2'>
          <Select>
            <SelectItem key='test'>Left hand</SelectItem>
          </Select>
          <Counter />
        </div>
        <Slider size='lg' />
        <Button className='bg-[#282828]'>Emergency stop</Button>
      </div>
    </main>
  );
}
