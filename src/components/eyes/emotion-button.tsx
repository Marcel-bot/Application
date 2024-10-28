import { Button } from '@nextui-org/button';
import { Tooltip } from '@nextui-org/react';
import { Emotion } from '@/lib/types';

export default function ({ emotion }: { emotion: Emotion }) {
  return (
    <Tooltip closeDelay={0} content={emotion.name}>
      <Button>{emotion.name}</Button>
    </Tooltip>
  );
}
