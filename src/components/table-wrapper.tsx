/* src/app/page.tsx */

'use client';

import { useState, useEffect } from 'react';
import { Item, columns } from '../app/data/azure';
import PeriodicTable from '@/components/periodic-table';
import Topbar from '@/components/topbar';
import { Categories } from '../app/constants';
import useFullScreen from '@/custom-hooks/use-full-screen';
import Header from '@/components/header';
import { Icons } from '@/components/ui/icons';
import { Label } from '@/components/ui/label';
import useMobile from '@/custom-hooks/use-mobile';
import { useRouter } from 'next/navigation';

export default function TableWrapper({ children }: { children: JSX.Element }) {
  const [activeElement, setActiveElement] = useState<Item | null>(null);
  const [open, setOpen] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Categories | null>(null);
  const { toggleFullScreen, isFullScreen } = useFullScreen();
  const isMobile = useMobile();

  const navigate = useRouter();

  // when there's one result left after user searches for an element, set that element as active element only if they hit enter
  // to listen for keystroke it needs to be a usEffect
  useEffect(() => {
    function handleSearchEnter(e: KeyboardEvent) {
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
          // go to that element in the url
          navigate.push(`/resource/${filteredElements[0].id}`);
        }
      }
    }
    window.addEventListener('keydown', handleSearchEnter);
    return () => {
      window.removeEventListener('keydown', handleSearchEnter);
    };
  }, [textSearch, navigate]);

  return (
    <main
      className={`relative flex-col min-h-screen items-center justify-center ${
        isFullScreen ? 'p-0' : 'p-8'
      }`}
    >
      <div className="static lg:relative top-0 left-0 w-full lg:flex flex-col items-center justify-center">
        {isFullScreen ? null : (
          <>
            <Header />
            <div className="flex flex-col gap-2 justify-center w-full md:items-center items-center mt-2 mb-8">
              {/* Wrapper div to house Azure icon, main title, and subtitle */}
              <div className="flex items-center justify-center">
                <Icons.Azure className="h-12 w-12 md:h-16 md:w-16 self-center mr-4" />
                <div className="flex flex-col">
                  <h1 className="md:text-4xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-2xl">
                    The Azure Periodic Table
                  </h1>
                  <Label className="mt-2">
                    {isMobile
                      ? 'Supercharge your productivity in Azure.'
                      : 'Bringing together core Azure content to supercharge your productivity.'}
                  </Label>
                </div>
              </div>
            </div>
          </>
        )}

        <main
          className={
            isFullScreen
              ? 'flex flex-col justify-center items-center w-full'
              : 'border-border rounded-md w-full'
          }
        >
          {children}

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
            zoomLevel={isFullScreen ? 2 : 0}
          />
        </main>
      </div>
    </main>
  );
}
