interface FooterProps {
  title: string;
}

export default function Footer({ title }: FooterProps): React.JSX.Element {
  return (
    <footer className="bg-background dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl border-t border-gray-100 px-6 py-6 dark:border-zinc-800 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 dark:text-gray-200 md:order-2">
          &copy; {new Date().getFullYear()} {title}. All rights reserved.
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center leading-5 text-indigo-700 dark:text-white">
            {title}
          </p>
        </div>
      </div>
    </footer>
  );
}
