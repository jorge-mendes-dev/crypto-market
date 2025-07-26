interface FooterProps {
  title: string;
}

export default function Footer({ title }: FooterProps): React.JSX.Element {
  return (
    <footer className="mx-auto min-w-full bg-black px-6 dark:border-t-black dark:bg-indigo-800">
      <div className="mx-auto max-w-7xl py-12">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-white">{title}</div>
          <div className="text-sm text-gray-100">
            &copy; {new Date().getFullYear()} {title}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
