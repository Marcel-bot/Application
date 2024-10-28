import { cn } from '@nextui-org/theme';

export default function AIMessage({
  content,
  className = ''
}: {
  content: string;
  className?: string;
}) {
  return (
    <div className={cn(className, 'flex items-start gap-2')}>
      <i className='fa fa-sparkles pt-1 text-white' />
      <label className='text-white'>{content}</label>
    </div>
  );
}
