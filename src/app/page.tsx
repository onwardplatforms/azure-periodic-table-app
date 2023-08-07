/* src/app/page.tsx */

'use client';

import { useState } from 'react';
import { Item } from './data';
import PeriodicTable, { categoryData } from '@/components/periodic-table';
import Search from '@/components/search';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';
import { Icons } from '@/components/ui/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Categories } from './constants';
import { Download, Expand, PlusSquare, Shrink } from 'lucide-react';
import { Share } from '@/components/share';
import useFullScreen from '@/custom-hooks/use-full-screen';
import useMobile from '@/custom-hooks/use-mobile';
import { prefix } from '@/prefix';
import { Analytics } from '@vercel/analytics/react';

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
    <main className="relative flex-col min-h-screen items-center justify-center p-8 bg-white dark:bg-slate-950">
      <div className="static lg:relative top-0 left-0 w-full md:flex flex-col items-center justify-center">
        {isFullScreen ? null : (
          <>
            <Topbar />
            <div className="flex justify-start sm:justify-center items-center my-4">
              <div className="mr-2 md:mr-6  md:my-0">
                <Icons.Azure className="w-8 h-8 md:w-32 md:h-32" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-md lg:text-4xl dark:text-white text-slate-800">
                  Azure Resource
                </span>
                <span className="font-semibold text-md lg:text-2xl text-accent">
                  Naming Convention Periodic Table
                </span>
              </div>
            </div>
          </>
        )}

        <main
          className={
            isFullScreen ? 'flex flex-col justify-center items-center' : ''
          }
        >
          <Sidebar
            activeElement={activeElement}
            open={open}
            setOpen={setOpen}
          />

          <div className="flex justify-center xl:justify-between items-center w-full">
            <div className="hidden xl:flex flex-1">
              <Share />
              {!isMobile ? (
                <Button
                  variant={'outline'}
                  onClick={() => {
                    downloadFile();
                  }}
                  className="mx-2 hidden xl:flex"
                >
                  <Download />
                  <span className="ml-2">Download</span>
                </Button>
              ) : null}
            </div>

            <Search className="mx-2 flex-2" setTextSearch={setTextSearch} />
            <div className=" hidden xl:flex flex-1 justify-end items-center ml-auto">
              {!isMobile ? (
                <Button
                  variant={'outline'}
                  onClick={() => {
                    toggleFullScreen();
                  }}
                  className=""
                >
                  {isFullScreen ? <Shrink /> : <Expand />}
                </Button>
              ) : null}
            </div>

            <div className="flex xl:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    onClick={() => setOpen((prev) => !prev)}
                    variant={'ghost'}
                  >
                    <PlusSquare className="h-8 w-8" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-bg justify-center items-center flex-col max-h-52 overflow-scroll">
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
          <PeriodicTable
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            textSearch={textSearch}
            setActiveElement={setActiveElement}
            setOpen={setOpen}
            zoomLevel={isFullScreen ? 1 : 0}
          />
          <Analytics />
        </main>
      </div>
    </main>
  );
}
