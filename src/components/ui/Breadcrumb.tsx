import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="bg-surface border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-3 flex items-center gap-2">
        <Link
          href="/"
          className="font-body text-xs tracking-wider uppercase text-on-surface-variant hover:text-primary transition-colors"
        >
          Home
        </Link>
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <ChevronRight size={12} className="text-outline" />
            {item.href ? (
              <Link
                href={item.href}
                className="font-body text-xs tracking-wider uppercase text-on-surface-variant hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-body text-xs tracking-wider uppercase text-primary font-semibold">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}