/* src/app/page.tsx */

'use client';

import { useState, useEffect } from 'react';
import { Item, columns } from './data';
import PeriodicTable from '@/components/periodic-table';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';
import { Categories } from './constants';
import useFullScreen from '@/custom-hooks/use-full-screen';
import Header from '@/components/header';
import { Icons } from '@/components/ui/icons';
import { Label } from '@/components/ui/label';
import useMobile from '@/custom-hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config';

export default function Page() {
  const [activeElement, setActiveElement] = useState<Item | null>(null);
  const [open, setOpen] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Categories | null>(null);
  const { toggleFullScreen, isFullScreen } = useFullScreen();
  const isMobile = useMobile();

  // when there's one result left after user searches for an element, set that element as active element only if they hit enter
  // to listen for keystroke it needs to be a usEffect
  useEffect(() => {
    function handleSearchEnter(e: any) {
      if (e.key === 'Enter') {
        // filter elements by text search
        const filteredElements = columns
          .map((group) =>
            group.items.filter(
              (item) =>
                item.name.toLowerCase().includes(textSearch.toLowerCase()) ||
                item.slug.toLowerCase().includes(textSearch.toLowerCase())
            )
          )
          .flat();

        if (filteredElements.length === 1) {
          setActiveElement(filteredElements[0]);
          setOpen(true);
        }
      }
    }
    window.addEventListener('keydown', handleSearchEnter);
    return () => {
      window.removeEventListener('keydown', handleSearchEnter);
    };
  }, [textSearch]);

  return (
    <main className="relative flex-col min-h-screen items-center justify-center p-8 ">
      <div className="static lg:relative top-0 left-0 w-full lg:flex flex-col items-center justify-center">
        {isFullScreen ? null : (
          <>
            <Header />
            <div className="flex flex-col justify-start w-full md:items-start items-start my-8 ">
              {/* Wrapper div to house Azure icon, main title, and subtitle */}
              <div className="flex items-center justify-start w-full ">
                <Icons.Azure className="h-28 w-28 self-center mr-4 hidden sm:block" />
                <div className="flex flex-col">
                  <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] mb-1">
                    The Azure Periodic Table
                  </h1>
                  <span className="max-w-[650px] text-lg text-muted-foreground sm:text-xl mb-1">
                    Bringing together core Azure content to supercharge your
                    productivity. Open source. Built for the community ❤️
                  </span>
                </div>
              </div>
              <div className="flex my-4">
                <Button className="mr-4">View Demo</Button>
                <Button variant={'outline'}>
                  <a
                    className="flex justify-center items-center"
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.GitHub className="w-4 h-4 mr-2" />
                    Github
                  </a>
                </Button>
              </div>
            </div>
          </>
        )}

        <main
          className={
            isFullScreen
              ? 'flex flex-col justify-center items-center'
              : 'border-border border rounded-md w-full'
          }
        >
          <Sidebar
            activeElement={activeElement}
            open={open}
            setOpen={setOpen}
          />
          <Topbar
            activeCategory={activeCategory}
            isFullScreen={isFullScreen}
            open={open}
            setActiveCategory={setActiveCategory}
            setOpen={setOpen}
            setTextSearch={setTextSearch}
            toggleFullScreen={toggleFullScreen}
          />

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
