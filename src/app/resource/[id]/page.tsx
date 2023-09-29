import { Item, columns } from '@/app/data/azure';
import Sidebar from '@/components/sidebar';
import fs from 'fs';
import path from 'path';

// get url param
export default function Page({ params }: { params: { id: string } }) {
  const cloud = 'azure'
  const terraformFilePath = path.join(process.cwd(), 'public', cloud, 'code', 'terraform', `${params.id}.tf`);
  const bicepFilePath = path.join(process.cwd(), 'public', cloud, 'code', 'bicep', `${params.id}.bicep`);
  const armFilePath = path.join(process.cwd(), 'public', cloud, 'code', 'arm', `${params.id}.json`);

  let terraformCodeSnippet = '';
  let bicepCodeSnippet = '';
  let armCodeSnippet = '';

  // Read Terraform file
  try {
    terraformCodeSnippet = fs.readFileSync(terraformFilePath, 'utf8');
  } catch (err) {
    console.log(err);
  }

  // Read Bicep file
  try {
    bicepCodeSnippet = fs.readFileSync(bicepFilePath, 'utf8');
  } catch (err) {
    console.log(err);
  }

  // Read ARM file
  try {
    armCodeSnippet = fs.readFileSync(armFilePath, 'utf8');
  } catch (err) {
    console.log(err);
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
    terraformCode: terraformCodeSnippet,
    bicepCode: bicepCodeSnippet,
    armCode: armCodeSnippet,
  };

  return <Sidebar activeElement={elementWithCodeSnippet} open={true} />;
}
