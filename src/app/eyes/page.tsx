import Eye from '@/components/eyes/eye';
import EyeJoystick from '@/components/eyes/eye-joystick';
import EmotionMenu from '@/components/eyes/emotion-menu';
import { eyePlaceholder } from '@/lib/data/eye-placeholder';
import ColorPicker from '@/components/eyes/color-picker';

export default function Page() {
  return (
    <main className='flex h-full max-h-full grow basis-0 flex-col items-center overflow-auto'>
      <section className='flex w-full justify-center gap-20 border-b-2 border-b-white/10 px-8 py-10'>
        <Eye
          beziers={eyePlaceholder}
          className='aspect-square lg:w-[24rem] xl:w-[28rem] 2xl:w-[32rem]'
        />
        <Eye
          beziers={eyePlaceholder}
          className='aspect-square lg:w-[24rem] xl:w-[28rem] 2xl:w-[32rem]'
        />
      </section>
      <section className='flex w-full grow items-center justify-between px-12'>
        <EyeJoystick className='h-[16rem] w-[16rem]' />
        <div className='flex h-full gap-4 py-12'>
          <div className='flex flex-col gap-2'>
            <ColorPicker>Background</ColorPicker>
            <ColorPicker>Eye color</ColorPicker>
          </div>
          <EmotionMenu />
        </div>
      </section>
    </main>
  );
}
