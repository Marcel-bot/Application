import { Button } from '@nextui-org/button';
import { cn } from '@nextui-org/theme';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ({ icon, href }: { icon: string; href: string }) {
  const pathname = usePathname();

  return (
    <Button
      as={Link}
      href={href}
      variant={pathname === href ? 'flat' : 'light'}
      className='h-10 w-10 min-w-0 rounded-lg'
      isIconOnly
    >
      <motion.i layout className={cn(icon, 'text-xl')} />
    </Button>
  );
}
