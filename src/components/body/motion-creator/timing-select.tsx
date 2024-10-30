import { Select, SelectItem } from '@nextui-org/select';

export default function () {
  return (
    <Select
      className='w-64'
      variant='underlined'
      classNames={{
        base: 'items-center',
        label: 'z-0'
      }}
      labelPlacement='outside-left'
      label='Timing'
    >
      <SelectItem key='test'>Linear</SelectItem>
      <SelectItem key='test2'>Ease In</SelectItem>
      <SelectItem key='test3'>Ease Out</SelectItem>
      <SelectItem key='test4'>Ease In-Out</SelectItem>
    </Select>
  );
}
