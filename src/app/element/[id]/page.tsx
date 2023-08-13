import { columns } from '@/app/data';
import Sidebar from '@/components/sidebar';
import fs from 'fs';
import path from 'path';

// get url param
export default function Test({ params }: { params: { id: string } }) {
  const filePath = path.join(
    __dirname,
    `../../../../../public/code/${params.id}.tf`
  );
  let codeSnippet = '';

  try {
    // this file may or may not be here, so we need to handle the error

    codeSnippet = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    console.log(err);
    // Handle the error appropriately, e.g., return an error component or message.
  }

  const paramsId = params.id;

  // find the item in the columns array that matches the url param
  const activeElement = columns
    .map((group) =>
      group.items.filter((item) =>
        item.id.toLowerCase().includes(paramsId.toLowerCase())
      )
    )
    .flat()[0];

  const elementWithCodeSnippet = {
    ...activeElement,
    code: codeSnippet ? codeSnippet : '',
  };
  console.log(elementWithCodeSnippet);

  if (!activeElement) {
    console.log('no active element found');
    return null;
  }

  return <Sidebar activeElement={elementWithCodeSnippet} open={true} />;
}
