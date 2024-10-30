'use client';

import { Button } from '@nextui-org/button';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import { commonEmotions, uncommonEmotions } from '@/lib/data/emotions';
import EmotionButton from '@/components/eyes/emotion-button';
import { useDisclosure } from '@nextui-org/react';
import { Modal, ModalBody, ModalContent } from '@nextui-org/modal';
import NewEmotionMenu from '@/components/eyes/new-emotion-menu';

export default function () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className='flex flex-col gap-2'>
      {commonEmotions.map((emotion, index) => (
        <EmotionButton emotion={emotion} key={index} />
      ))}
      <Popover>
        <PopoverTrigger>
          <Button className='bg-[#282828]'>More...</Button>
        </PopoverTrigger>
        <PopoverContent className='grid grid-cols-4 gap-2'>
          {uncommonEmotions.map((emotion, index) => (
            <EmotionButton emotion={emotion} key={index} />
          ))}
          <Button onClick={onOpen}>New emotion</Button>
        </PopoverContent>
      </Popover>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <ModalBody>
              <NewEmotionMenu />
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
