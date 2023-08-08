import { cn } from '@/lib/utils';
import { CopyButton } from './copy-button';
import { Label } from './ui/label';

export function InputWithCopy({
  label,
  copyValue,
  inputValue,
  copyButtonClassName,
  ...props
}: {
  label: string;
  copyValue: string;
  inputValue: string;
  copyButtonClassName?: string;
}) {
  return (
    <div className="flex flex-col justify-center items-start">
      <Label className="py-2">{label}</Label>
      <div
        {...props}
        className="flex items-center py-4 px-6 border border-secondary bg-gradient-to-b from-muted/20 to-muted/25 rounded-lg relative w-full"
      >
        <span>{inputValue}</span>
        <CopyButton
          value={copyValue}
          className={cn(
            copyButtonClassName,
            'absolute w-10 h-10 right-2 top-1/2 transform -translate-y-1/2 hover:bg-muted'
          )}
        />
      </div>
    </div>
  );
}
