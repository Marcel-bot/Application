import { UserMessage } from '@/lib/types';

export default function ({ message }: { message: UserMessage }) {
  return (
    <div className='w-full max-w-[28rem] self-end break-words rounded-3xl bg-[#282828] px-5 py-2.5'>
      {message.content}
    </div>
  );
}
