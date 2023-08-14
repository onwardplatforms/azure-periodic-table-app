import { Item, columns } from '@/app/data';
import Sidebar from '@/components/sidebar';
import fs from 'fs';
import path from 'path';

// get url param
export default function Page({ params }: { params: { id: string } }) {
  const filePath = path.join(
    process.cwd(),
    'public',
    'code',
    `${params.id}.tf`
  );
  let codeSnippet = '';

  try {
    // this file may or may not be here, so we need to handle the error

    codeSnippet = fs.readFileSync(filePath, 'utf8');
    console.log(codeSnippet);
  } catch (err) {
    console.log('nope');
    // Handle the error appropriately, e.g., return an error component or message.
  }

  const paramsId = params.id;

  const activeElement = columns
    .flatMap((column) => column.items)
    .find((item) => item.id === paramsId);

  if (!activeElement) {
    return null;
  }

  const elementWithCodeSnippet: Item = {
    ...activeElement,
    code: codeSnippet,
  };

  return <Sidebar activeElement={elementWithCodeSnippet} open={true} />;
}
