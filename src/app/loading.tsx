import Skeleton from '@/components/Skeleton';

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Skeleton type="grid" />
    </div>
  );
}
