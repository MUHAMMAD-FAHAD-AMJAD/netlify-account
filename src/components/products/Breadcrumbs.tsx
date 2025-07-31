import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbsProps {
  path: string[];
}

export default function Breadcrumbs({ path }: BreadcrumbsProps) {
  const segments = [{ name: 'Home', href: '/' }];
  let currentPath = '/products';

  path.forEach(segment => {
    currentPath += `/${segment}`;
    segments.push({
      name: segment.replace(/-/g, ' '),
      href: currentPath,
    });
  });

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm">
        {segments.map((segment, index) => (
          <li key={segment.name} className="flex items-center">
            <Link
              href={segment.href}
              className={cn(
                "capitalize hover:text-primary transition-colors",
                index === segments.length - 1 ? 'text-foreground font-medium' : 'text-muted-foreground'
              )}
            >
              {segment.name}
            </Link>
            {index < segments.length - 1 && (
              <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
