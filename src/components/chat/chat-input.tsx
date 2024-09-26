import { Input } from '@nextui-org/input';
import { cn } from '@nextui-org/theme';
import { Dispatch, SetStateAction } from 'react';

export default function ChatInput({
  message,
  setMessage,
  className = ''
}: {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  className?: string;
}) {
  return (
    <Input
      value={message}
      onChange={(e) => {
        setMessage(e.target.value);
      }}
      className={cn(
        className,
        'rounded-full border-1 border-white/20 bg-[#282828]'
      )}
      classNames={{
        inputWrapper: 'rounded-full'
      }}
      placeholder='Type something here'
    />
  );
}
