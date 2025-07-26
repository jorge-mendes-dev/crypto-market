interface SkeletonProps {
  type?: 'grid' | 'card';
  items?: number;
}

const Grid = ({ items }: SkeletonProps) => (
  <div className={`grid w-full grid-cols-1 gap-6 p-6 md:grid-cols-3`}>
    {Array.from({ length: typeof items === 'number' ? items : 3 }).map(
      (_, idx) => (
        <Card key={idx} />
      )
    )}
  </div>
);

const Card = () => (
  <div className="animate-pulse divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm dark:bg-zinc-800">
    <div className="px-4 py-5 sm:px-6">
      <div className="size-40 h-4 rounded bg-gray-200 dark:bg-zinc-500"></div>
    </div>
    <div className="flex flex-col gap-2 px-4 py-5 sm:p-6">
      <div className="flex flex-row items-start gap-4">
        <div className="flex flex-1 flex-col gap-1">
          <div className="col-span-2 h-2 rounded bg-gray-200 dark:bg-zinc-500"></div>
          <div className="col-span-2 mt-1 h-2 rounded bg-gray-200 dark:bg-zinc-500"></div>
          <div className="col-span-2 mt-1 h-2 rounded bg-gray-200 dark:bg-zinc-500"></div>
          <div className="col-span-2 mt-1 h-2 rounded bg-gray-200 dark:bg-zinc-500"></div>
          <div className="mt-1 size-40 h-2 rounded bg-gray-200 dark:bg-zinc-500"></div>
          <div className="mt-1 size-10 h-2 rounded bg-gray-200 dark:bg-zinc-500"></div>
        </div>
        <div className="size-20 h-20 flex-shrink-0 rounded bg-gray-200 dark:bg-zinc-500"></div>
      </div>
    </div>
    <div className="px-4 py-4 sm:px-6">
      <div className="size-20 h-2 rounded bg-gray-200 dark:bg-zinc-500"></div>
      <div className="mt-1 size-20 h-2 rounded bg-gray-200 dark:bg-zinc-500"></div>
    </div>
  </div>
);

export default function Skeleton({
  type,
  items,
}: SkeletonProps): React.JSX.Element {
  const renderSkeleton = () => {
    switch (type) {
      case 'grid':
        return <Grid items={items} />;
      case 'card':
        return <Card />;
      default:
        return <Card />;
    }
  };

  return <>{renderSkeleton()}</>;
}
