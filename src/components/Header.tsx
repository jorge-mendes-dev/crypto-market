'use client';

import { JSX } from 'react';
import Lottie from 'lottie-react';
import cryptocurrency from '@/assets/cryptocurrency.json';

interface HeaderProps {
  title: string;
  description: string;
  badge?: string;
}

export default function Header({
  title,
  description,
  badge,
}: HeaderProps): JSX.Element {
  return (
    <div className="relative isolate pt-14">
      <svg
        aria-hidden="true"
        className="mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] absolute inset-0 -z-10 size-full stroke-gray-200 dark:stroke-gray-800"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg
          x="50%"
          y={-1}
          className="overflow-visible fill-gray-50 dark:fill-gray-900"
        >
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <div className="flex">
            <div className="relative flex items-center gap-x-4 rounded-full bg-indigo-50 px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:bg-indigo-900">
              <span className="font-semibold text-indigo-600 dark:text-indigo-100">
                {badge}
              </span>
            </div>
          </div>
          <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-indigo-700 sm:text-7xl">
            {title}
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-900 dark:text-white sm:text-xl/8">
            {description}
          </p>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
          <Lottie
            data-testid="lottie-animation"
            animationData={cryptocurrency}
            loop={true}
            className="h-40 w-40 rounded-full border-2 border-indigo-700 shadow-lg sm:h-auto sm:w-full"
          />
        </div>
      </div>
    </div>
  );
}
