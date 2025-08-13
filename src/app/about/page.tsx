import Image from 'next/image';
import Link from 'next/link';
import { AppConfig } from '@/config/AppConfig';

const AboutPage = () => {
  const { about } = AppConfig;
  const { title, subtitle, paragraphs, list, socialMedia, pictures, action } =
    about;

  return (
    <main className="overflow-hidden bg-white py-32 dark:bg-zinc-800">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-indigo-700 sm:text-5xl">
              {title}
            </h2>
            <p className="mt-6 text-xl/8 text-gray-700 dark:text-indigo-300">
              {subtitle}
            </p>
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-small mt-6 text-gray-600 dark:text-gray-200"
              >
                {paragraph}
              </p>
            ))}
            <ul className="text-small mt-6 list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-200">
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="mt-10 flex">
              <Link
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                title={action.name}
                className="shadow-xs rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {action.name}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                width={1152}
                height={864}
                alt={pictures[0].alt}
                src={pictures[0].src}
                className="aspect-7/5 w-148 max-sm:w-120 max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="lg:w-148 contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto">
                <Image
                  width={768}
                  height={604}
                  alt={pictures[1].alt}
                  src={pictures[1].src}
                  className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  width={1152}
                  height={842}
                  alt={pictures[2].alt}
                  src={pictures[2].src}
                  className="aspect-7/5 w-148 max-sm:w-120 max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  width={768}
                  height={604}
                  alt={pictures[3].alt}
                  src={pictures[3].src}
                  className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
