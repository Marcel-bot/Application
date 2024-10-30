import { MotionGroupModel } from '@/lib/types';
import { Button } from '@nextui-org/button';
import { cn } from '@nextui-org/theme';
import { useState } from 'react';
import MotionGroup from '@/components/body/motion-creator/motion-group';
import { Reorder } from 'framer-motion';

export default function ({
  motionGroups,
  className
}: {
  motionGroups: MotionGroupModel[];
  className?: string;
}) {
  const [items, setItems] = useState<(MotionGroupModel & { index: number })[]>(
    motionGroups.map((el, index) => ({ ...el, index }))
  );

  return (
    <Reorder.Group
      axis='y'
      className={cn(
        'flex h-full grow flex-col gap-4 overflow-auto pb-4',
        className
      )}
      onReorder={setItems}
      values={items}
    >
      {items.map((motionGroup) => (
        <MotionGroup key={motionGroup.index} motionGroup={motionGroup} />
      ))}
      <Button className='min-h-10 bg-[#282828]'>New motion group</Button>
    </Reorder.Group>
  );
}
