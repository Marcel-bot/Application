import FileAttachButton from '@/components/chat/file-attach-button';
import { Textarea } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { useState } from 'react';
import { cn } from '@nextui-org/theme';

export default function () {
  const [value, setValue] = useState<string>('');

  return (
    <div className='flex w-[48rem] rounded-3xl bg-[#282828] p-2'>
      <FileAttachButton />
      <Textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className='self-center hover:bg-transparent'
        classNames={{
          inputWrapper:
            'data-[hover=true]:!bg-transparent group-data-[focus=true]:!bg-transparent'
        }}
        minRows={1}
        placeholder='Message Marcel'
      />
      <Button
        disabled={value.trim().length > 0}
        className={cn(
          'w-10 min-w-10 self-end rounded-full bg-white',
          value.trim().length > 0 ? '' : 'opacity-40 hover:!opacity-40'
        )}
      >
        <i className='fa fa-arrow-turn-down-left text-black' />
      </Button>
    </div>
  );
}
