import { UserMessage } from '@/lib/types';

export default function ({ message }: { message: UserMessage }) {
  return (
    <div className='max-w-[32rem] self-end rounded-3xl bg-[#282828] px-5 py-2.5'>
      {message.content}
    </div>
  );
}
