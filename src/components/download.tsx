import { Download as DownloadIcon } from 'lucide-react';
import { Button } from './ui/button';
import { prefix } from '@/prefix';

export function Download() {
  const downloadFile = () => {
    // Provide the path to your local file here.
    // This could be a URL pointing to a file stored locally in your public directory.
    const url = `${prefix}/periodic-table.png`;

    // Create new 'a' element
    const a = document.createElement('a');
    a.href = url;

    // This part will prompt the user to save the image as a download
    a.download = 'azure-periodic-table.png'; // or you could give it a custom name here
    a.click();
  };
  return (
    <Button
      variant={'secondary'}
      onClick={() => {
        downloadFile();
      }}
      className="mx-2 flex"
    >
      <DownloadIcon className="w-4 h-4" />
      <span className="ml-2">Download</span>
    </Button>
  );
}
