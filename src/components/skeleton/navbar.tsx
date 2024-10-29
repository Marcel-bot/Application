'use client';

import { Tab, Tabs } from '@nextui-org/tabs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@nextui-org/theme';
import NavbarButton from '@/components/skeleton/navbar-button';
import NavbarNavigationButton from '@/components/skeleton/navbar-navigation-button';

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
    icon: 'fa-solid fa-eye'
  },
  {
    href: '/wheels',
    icon: 'fa-solid fa-tire'
  },
  {
    href: '/camera',
    icon: 'fa fa-camera'
  }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <aside className='flex h-full flex-col items-center justify-between border-r border-r-white/10 bg-background px-2 pb-2 pt-4'>
      <div className='flex flex-col items-center gap-20'>
        <img src='/logo.svg' alt='logo' />
        <div className='flex flex-col items-center'>
          <Tabs
            classNames={{
              tabList: 'bg-transparent',
              cursor: 'bg-primary/40 w-10 h-10 aspect-square',
              tab: 'aspect-square w-10 h-10'
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
                  <i
                    className={cn(
                      tab.icon,
                      pathname === tab.href ? 'text-primary' : 'text-white',
                      'text-xl'
                    )}
                  />
                }
              />
            ))}
          </Tabs>
          <div className='my-2 w-3/5 border-b-1 border-b-white/20' />
          <NavbarButton icon='fa fa-microphone' />
          <NavbarButton icon='fa fa-volume' />
        </div>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <NavbarNavigationButton href='/debug' icon='fa fa-terminal' />
        <NavbarNavigationButton href='/settings' icon='fa fa-gear' />
      </div>
    </aside>
  );
}
