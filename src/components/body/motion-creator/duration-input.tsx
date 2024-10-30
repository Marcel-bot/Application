import { Input } from '@nextui-org/input';

export default function () {
  return (
    <Input
      classNames={{
        inputWrapper: 'bg-transparent',
        label: 'z-0'
      }}
      label='Duration'
      labelPlacement='outside-left'
      endContent={
        <div className='pointer-events-none flex items-center'>
          <span className='text-small text-default-400'>seconds</span>
        </div>
      }
    />
  );
}
