import { AgentMessage } from '@/lib/types';
import ActionList from '@/components/chat/action-list';

export default function ({
  message: { analyticActions, outputActions, content }
}: {
  message: AgentMessage;
}) {
  return (
    <div className='text-wrap break-words'>
      {analyticActions.length > 0 && (
        <div className='flex flex-col gap-1 text-[0.875rem]'>
          <label className='text-neutral-400'>
            Analyzed {analyticActions.length} source
            {analyticActions.length > 1 && 's'}
          </label>
          <ActionList actions={analyticActions} />
        </div>
      )}
      <div className='pb-2 pt-4'>{content}</div>
      {outputActions.length > 0 && (
        <div className='flex flex-col text-[0.875rem]'>
          <label className='text-neutral-400'>
            Executed {outputActions.length} action
            {outputActions.length > 1 && 's'}
          </label>
          <ActionList actions={outputActions} />
        </div>
      )}
    </div>
  );
}
