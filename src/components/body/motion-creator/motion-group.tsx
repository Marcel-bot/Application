import DurationInput from '@/components/body/motion-creator/duration-input';
import TimingSelect from '@/components/body/motion-creator/timing-select';
import Motion from '@/components/body/motion-creator/motion';
import { Button } from '@nextui-org/button';
import { MotionGroupModel } from '@/lib/types';
import { Reorder, useDragControls } from 'framer-motion';

export default function ({
  motionGroup
}: {
  motionGroup: MotionGroupModel & { index: number };
}) {
  const controls = useDragControls();

  return (
    <Reorder.Item
      value={motionGroup}
      dragListener={false}
      dragControls={controls}
    >
      <div className='flex w-full select-none flex-col gap-3 rounded-3xl bg-[#282828] p-4'>
        <div className='flex items-center gap-2'>
          <i
            className='fa fa-grip-dots cursor-pointer text-2xl text-neutral-500'
            onPointerDown={(e) => controls.start(e)}
          />
          <DurationInput />
          <TimingSelect />
          <Button className='bg-transparent' isIconOnly>
            <i className='fa fa-trash' />
          </Button>
        </div>
        <div className='flex flex-col gap-2'>
          {motionGroup.motions.map((motion, motionIndex) => (
            <Motion key={motionIndex} />
          ))}
          <Button className='bg-[#3D3D3D]'>New motion</Button>
        </div>
      </div>
    </Reorder.Item>
  );
}
