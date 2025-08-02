
import { Suspense } from 'react';
import AuthPageContent from './AuthPageContent';
import { Skeleton } from '@/components/ui/skeleton';

function AuthPageLoader() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <Skeleton className="h-[60px] w-[250px] mx-auto" />
        <Skeleton className="h-[500px] w-full rounded-2xl" />
      </div>
    </div>
  )
}


export default function AuthPage() {
  return (
    <Suspense fallback={<AuthPageLoader />}>
      <AuthPageContent />
    </Suspense>
  );
}
