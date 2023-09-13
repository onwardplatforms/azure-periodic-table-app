import { cn } from "@/lib/utils"
import { Skeleton } from '@/components/ui/skeleton'

function LoadingSkeleton({
    className
  }: React.HTMLAttributes<HTMLDivElement>) {
    return (
      <div className={cn("flex flex-col items-start space-y-2", className)}>
        <Skeleton className="h-4 w-[100%]" />
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[90%]" />
      </div>
    )
  }

export { LoadingSkeleton }