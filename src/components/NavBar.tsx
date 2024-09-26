'use client';

import { Tab, Tabs } from '@nextui-org/tabs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@nextui-org/theme';
import { Button } from '@nextui-org/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

const routes = [
  {
    href: '/',
    icon: 'fa fa-grid-2'
  },
  {
    href: '/chat',
    icon: 'fa fa-message'
  },
  {
    href: '/body',
    icon: 'fa fa-person'
  },
  {
    href: '/eyes',
    icon: 'fa-light fa-eye'
  }
];

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const pathname = usePathname();

  return (
    <motion.aside
      onHoverStart={() => {
        setIsExpanded(true);
      }}
      onHoverEnd={() => {
        setIsExpanded(false);
      }}
      className='flex h-full flex-col items-center border-r border-r-white/10 bg-background px-2 pt-4'
    >
      <div className='flex flex-col items-center gap-20'>
        <img src='/logo.svg' alt='logo' />
        <div className='flex flex-col items-center'>
          <Tabs
            classNames={{
              tabList: 'bg-transparent',
              cursor: cn('bg-primary/40', isExpanded ? '' : 'aspect-square'),
              tab: 'aspect-square'
            }}
            isVertical
            selectedKey={pathname}
          >
            {routes.map((tab) => (
              <Tab
                as={Link}
                href={tab.href}
                key={tab.href}
                title={
                  <>
                    <i
                      className={cn(
                        tab.icon,
                        pathname === tab.href ? 'text-primary' : 'text-white'
                      )}
                    />
                    test
                  </>
                }
              />
            ))}
          </Tabs>
          <div className='w-3/5 border-b-1 border-b-white/20' />
          <Button
            variant='light'
            className='h-8 w-8 min-w-0 rounded-lg'
            isIconOnly
          >
            <i className='fa fa-microphone' />
          </Button>
          <Button
            variant='light'
            className='h-8 w-8 min-w-0 rounded-lg'
            isIconOnly
          >
            <i className='fa fa-volume' />
          </Button>
        </div>
      </div>
    </motion.aside>
  );
}
