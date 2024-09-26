import { cn } from '@nextui-org/theme';

export default function UserMessage({
  content,
  className = ''
}: {
  content: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        className,
        'rounded-2xl border-1 border-white/20 bg-[#282828] py-2 pl-4 pr-2 text-white'
      )}
    >
      {content}
    </div>
  );
}
