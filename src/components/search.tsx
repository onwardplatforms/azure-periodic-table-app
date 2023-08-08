import { cn } from '@/lib/utils';
import { Command, CommandInput } from './ui/command';

interface props extends React.HTMLAttributes<HTMLDivElement> {
  setTextSearch: Function;
}

export default function Search({ setTextSearch, className }: props) {
  return (
    <Command
      className={cn(
        'rounded-lg border w-96 flex h-12 border-input bg-background ',
        className
      )}
    >
      <CommandInput
        onValueChange={(value) => setTextSearch(value)}
        className={`bg-transparent w-96 dark:text-white text-black`}
        placeholder="Search Azure resources..."
      />
    </Command>
  );
}
