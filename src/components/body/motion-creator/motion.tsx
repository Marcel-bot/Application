import BodyPartSelect from '@/components/body/motion-creator/body-part-select';
import DegreesInput from '@/components/body/motion-creator/degrees-input';
import { Button } from '@nextui-org/button';

export default function () {
  return (
    <div className='flex items-center justify-between rounded-xl bg-[#3D3D3D]'>
      <div className='flex items-center'>
        <BodyPartSelect />
        <label>to</label>
        <DegreesInput />
      </div>
      <Button className='bg-transparent' isIconOnly>
        <i className='fa fa-trash' />
      </Button>
    </div>
  );
}
