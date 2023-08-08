// src/components/ui/copy-box.tsx

'use client';

import * as React from 'react';
import { Check, CopyIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export interface CopyBoxProps {
  text: string;
  className?: string;
}

const CopyBox: React.FC<CopyBoxProps> = ({ text, className }) => {
  const [showCopy, setShowCopy] = useState(false);
  const [copied, setCopied] = useState(false);

  const boxClasses = cn(
    'relative font-light justify-start items-center text-sm flex break-all border mr-2 mt-2 py-2 px-4 pr-8 cursor-pointer rounded-lg border-border dark:hover:border-gray-200 hover:border-gray-500 transition-all',
    className
  );

  return (
    <div className="flex justify-start items-center">
      <div
        onMouseEnter={() => setShowCopy(true)}
        onMouseLeave={() => setShowCopy(false)}
        onClick={() => {
          navigator.clipboard.writeText(text);
          setCopied(true);
        }}
        className={boxClasses}
      >
        {showCopy && (
          <div className="absolute justify-center right-2">
            {copied ? <Check width={16} /> : <CopyIcon width={16} />}
          </div>
        )}
        <span className="flex-1">{text}</span> {/* This will make the text container take the available space, pushing the icon to the right */}
      </div>
    </div>
  );
};

CopyBox.displayName = 'CopyBox';

export { CopyBox };
