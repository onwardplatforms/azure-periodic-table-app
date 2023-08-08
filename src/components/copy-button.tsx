'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon, CopyIcon } from 'lucide-react';

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
  iconSize?: 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24;
  src?: string;
}

async function copyToClipboardWithMeta(value: string) {
  navigator.clipboard.writeText(value);
}

export function CopyButton({
  value,
  className,
  src,
  iconSize = 4,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-8 w-8 text-zinc-50 hover:bg-hover  absolute right-2.5 top-1/2 transform -translate-y-1/2 ',
        className
      )}
      onClick={(e) => {
        e.preventDefault();
        copyToClipboardWithMeta(value);
        setHasCopied(true);
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <CheckIcon className={`h-${iconSize} w-${iconSize}"`} />
      ) : (
        <CopyIcon className={`h-${iconSize} w-${iconSize}"`} />
      )}
    </button>
  );
}
