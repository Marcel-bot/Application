import { Button } from '@nextui-org/button';
import { cn } from '@nextui-org/theme';
import { motion } from 'framer-motion';

export default function NavbarButton({ icon }: { icon: string }) {
  return (
    <Button variant='light' className='h-10 w-10 min-w-0 rounded-lg' isIconOnly>
      <motion.i layout className={cn(icon, 'text-xl')} />
    </Button>
  );
}
