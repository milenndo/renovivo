import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface VisualBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const VisualBreadcrumb = ({ items, className = "" }: VisualBreadcrumbProps) => {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {/* Home link */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only">Начало</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {items.map((item, index) => (
          <span key={item.label} className="contents">
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              {index === items.length - 1 || !item.href ? (
                <BreadcrumbPage className="text-foreground font-medium">
                  {item.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default VisualBreadcrumb;
