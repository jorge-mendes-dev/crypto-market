'use client';

import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import React, { JSX, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog, DialogPanel } from '@headlessui/react';

interface NavigationProps {
  logo: string;
  navigation: { name: string; href: string }[];
  title: string;
}

export default function Navbar({
  logo,
  navigation,
  title,
}: NavigationProps): JSX.Element {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const currentPath = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="" className="-m-1.5 p-1.5">
            <span className="sr-only">{title}</span>
            <Image
              alt={title}
              src={logo}
              width={32}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-indigo-600"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={`dark:hover-text-indigo-200 text-sm/6 font-semibold text-gray-900 hover:text-indigo-700 dark:text-white ${currentPath === item.href ? 'text-indigo-600 dark:text-indigo-400' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="ml-2 rounded-full p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Toggle Theme</span>
            {isDarkMode ? (
              <SunIcon className="size-6" aria-hidden="true" />
            ) : (
              <MoonIcon className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 dark:bg-zinc-800 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">{title}</span>
              <Image
                alt={title}
                src={logo}
                width={32}
                height={32}
                priority
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-600"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
              <div className="space-y-2 py-6">
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 hover:text-indigo-500 dark:text-white dark:hover:bg-zinc-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <button
                  type="button"
                  onClick={toggleDarkMode}
                  className="ml-2 rounded-full p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Toggle Theme</span>
                  {isDarkMode ? (
                    <SunIcon className="size-6 text-yellow-500 bg-yellow-50" aria-hidden="true" />
                  ) : (
                    <MoonIcon className="size-6 text-blue-500 bg-blue-50" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
