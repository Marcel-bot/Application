import { cn } from '@nextui-org/theme';
import { actionIcons } from '@/lib/data/action-icons';
import { Action } from '@/lib/types';

export default function ({ actions }: { actions: Action[] }) {
  return (
    <div className='flex items-center gap-1'>
      {actions.map((action, index) => (
        <i
          key={index}
          className={cn(
            'text-neutral-400',
            actionIcons[action.type as keyof typeof actionIcons]
          )}
        />
      ))}
    </div>
  );
}
