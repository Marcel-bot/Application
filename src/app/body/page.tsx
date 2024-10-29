'use client';

import Body from '@/components/body/body';
import MotionCreator from '@/components/body/motion-creator';

export default function Page() {
  return (
    <main className='flex grow justify-between'>
      <MotionCreator />
      <Body className='p-12' />
    </main>
  );
}
