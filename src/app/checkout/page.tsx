import { Suspense } from 'react';
import CheckoutPageContent from './CheckoutPageContent';
import { Skeleton } from "@/components/ui/skeleton";

function CheckoutLoader() {
    return (
        <div className="flex flex-col lg:flex-row bg-white text-black min-h-screen">
             <main className="w-full lg:w-[55%] lg:pl-32 xl:pl-48 py-8 sm:py-16 px-4 sm:px-8 order-2 lg:order-1">
                 <div className="max-w-lg mx-auto lg:mx-0">
                    <Skeleton className="h-[50px] w-[200px] mb-8" />
                    <Skeleton className="h-6 w-1/2 mb-8" />
                    <div className="space-y-6">
                         <Skeleton className="h-10 w-full" />
                         <Skeleton className="h-10 w-full" />
                         <Skeleton className="h-20 w-full" />
                    </div>
                </div>
            </main>
             <aside className="w-full lg:w-[45%] bg-gray-50 p-4 sm:p-8 lg:p-12 border-l order-1 lg:order-2">
                 <div className="max-w-md mx-auto lg:mx-0 lg:sticky lg:top-16">
                     <div className="space-y-4">
                         <Skeleton className="h-16 w-full" />
                         <Skeleton className="h-16 w-full" />
                     </div>
                     <Skeleton className="h-px w-full my-6" />
                     <Skeleton className="h-11 w-full" />
                     <Skeleton className="h-px w-full my-6" />
                     <Skeleton className="h-20 w-full" />
                 </div>
            </aside>
        </div>
    )
}

export default function CheckoutPage() {
    return (
        <Suspense fallback={<CheckoutLoader />}>
            <CheckoutPageContent />
        </Suspense>
    )
}
