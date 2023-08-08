/* src/app/page.tsx */

'use client';

import { useState } from 'react';
import { Item } from './data';
import PeriodicTable, { categoryData } from '@/components/periodic-table';
import Search from '@/components/search';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Categories } from './constants';
import { Download, Expand, FilterIcon, Shrink } from 'lucide-react';
import { Share } from '@/components/share';
import useFullScreen from '@/custom-hooks/use-full-screen';
import useMobile from '@/custom-hooks/use-mobile';
import { prefix } from '@/prefix';

export default function Page() {
  const [activeElement, setActiveElement] = useState<Item | null>(null);
  const [open, setOpen] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Categories | null>(null);
  const isMobile = useMobile();
  const { toggleFullScreen, isFullScreen } = useFullScreen();

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
    <main className="relative flex-col min-h-screen items-center justify-center p-8 ">
      <div className="static lg:relative top-0 left-0 w-full lg:flex flex-col items-center justify-center">
        {isFullScreen ? null : (
          <>
            <Topbar />
            <div className="flex flex-col gap-2 justify-center sm:justify-center w-full md:items-center items-start my-8">
              {/* <Link
                href="/docs/changelog"
                className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
              >
                🎉 <Separator className="mx-2 h-4" orientation="vertical" />{' '}
                <span className="sm:hidden">Style, a new CLI and more.</span>
                <span className="hidden sm:inline">
                  Introducing Style, a new CLI and more.
                </span>
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link> */}
              <span className="md:text-3xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-2xl md:block">
                Azure Periodic Table
              </span>
            </div>
          </>
        )}

        <main
          className={
            isFullScreen
              ? 'flex flex-col justify-center items-center'
              : 'border border-border rounded-md w-full'
          }
        >
          <Sidebar
            activeElement={activeElement}
            open={open}
            setOpen={setOpen}
          />

          <div className="flex justify-center  items-center w-full border-b border-border p-4">
            <div className="hidden lg:flex flex-1 mr-auto w-full xl:w-auto">
              <Share />
              <Button
                variant={'secondary'}
                onClick={() => {
                  downloadFile();
                }}
                className="mx-2 flex"
              >
                <Download />
                <span className="ml-2">Download</span>
              </Button>
            </div>

            <div className="flex justify-center items-center w-full xl:w-auto">
              <Search className="mx-2 flex-2" setTextSearch={setTextSearch} />
              <div className="flex xl:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      onClick={() => setOpen((prev) => !prev)}
                      variant={'secondary'}
                    >
                      <FilterIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className=" justify-center items-center flex-col max-h-52 overflow-scroll">
                    {categoryData.map((item, i) => {
                      const isActive =
                        activeCategory === null || activeCategory === item.name;
                      return (
                        <DropdownMenuItem
                          key={i}
                          className="justify-center items-center"
                        >
                          <Button
                            onClick={() => {
                              setActiveCategory((prev: any) =>
                                prev === item.name ? null : item.name
                              );
                              setOpen(false);
                            }}
                            variant={'ghost'}
                            className={`flex justify-start items-center w-full ${
                              isActive ? 'brightness-100' : 'brightness-75'
                            }  hover:brightness-90`}
                          >
                            <div
                              className={`px-1 lg:mx-0 w-6 h-6 rounded my-1 ${item.color}`}
                            ></div>
                            <span className="text-sm px-2">{item.name}</span>
                          </Button>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className=" hidden lg:flex flex-1 justify-end items-center ml-auto">
              <Button
                variant={'secondary'}
                onClick={() => {
                  toggleFullScreen();
                }}
                className=""
              >
                {isFullScreen ? <Shrink /> : <Expand />}
              </Button>
            </div>
          </div>
          <PeriodicTable
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            textSearch={textSearch}
            setActiveElement={setActiveElement}
            setOpen={setOpen}
            zoomLevel={isFullScreen ? 1 : 0}
          />
        </main>
      </div>
    </main>
  );
}
