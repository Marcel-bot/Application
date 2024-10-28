import { Tooltip } from '@nextui-org/react';

export default function () {
  return (
    <Tooltip content='Attach file' placement='top' offset={16}>
      <button className='h-10 w-10 self-end rounded-l-full rounded-r-none'>
        <i className='fa fa-paperclip' />
      </button>
    </Tooltip>
  );
}
