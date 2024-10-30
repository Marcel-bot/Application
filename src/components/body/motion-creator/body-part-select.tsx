import { Select, SelectItem } from '@nextui-org/select';

export default function () {
  return (
    <Select
      className='w-48'
      classNames={{
        trigger: '!bg-transparent !shadow-none',
        value: 'font-bold'
      }}
    >
      <SelectItem key={1}>Outer left shoulder</SelectItem>
    </Select>
  );
}
