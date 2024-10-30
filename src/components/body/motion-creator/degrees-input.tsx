import { Input } from '@nextui-org/input';

export default function () {
  return (
    <Input
      className='w-16'
      classNames={{
        inputWrapper: '!bg-transparent',
        input: 'font-bold'
      }}
      value='180'
      endContent={
        <div className='pointer-events-none flex items-center'>
          <span className='text-small text-default-400'>°</span>
        </div>
      }
    />
  );
}
