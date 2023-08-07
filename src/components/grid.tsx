/* src/components/grid.tsx */

import type { Categories } from '@/app/constants';
import type { CategoryData } from './category-selector';
import Image from 'next/image';
import type { Item } from '@/app/data';
import { useLayoutEffect, useRef } from 'react';
import useMobile from '@/custom-hooks/use-mobile';
import { prefix } from '@/prefix';

interface CellProps {
  item: Item;
  zoomLevel?: 0 | 1 | 2;
  activeCategory: Categories | null;
  setActiveCategory: (category: Categories | null) => void;
  select: () => void;
  setActiveElement: (element: any) => void;
  categoryData: CategoryData;
  textSearch: string;
}

const Cell: React.FC<CellProps> = ({
  item,
  zoomLevel = 0,
  activeCategory,
  select,
  setActiveElement,
  categoryData,
  textSearch,
}) => {
  const ref = useRef<HTMLDivElement>(null); // Create a ref

  const color = categoryData.find((c) => c.name === item.category)?.color;

  const height =
    zoomLevel === 0 ? 'h-16' : zoomLevel === 1 ? 'h-[68px]' : 'h-28';
  const width =
    zoomLevel === 0 ? 'w-16' : zoomLevel === 1 ? 'w-[68px]' : 'w-28';

  const isActiveCategory =
    activeCategory === null || activeCategory === item.category;

  const isActiveSearch =
    textSearch === '' ||
    item.name.toLowerCase().includes(textSearch.toLowerCase()) ||
    item.slug.toLowerCase().includes(textSearch.toLowerCase());

  // disable if there is a search and the item is not in the search
  // or if there is a category and the item is not in the category

  const isDisabled = !isActiveCategory || !isActiveSearch;

  const colorOption = isDisabled ? 'bg-gray-400' : color;

  const transparent = isDisabled ? 'opacity-50' : 'opacity-100';

  const hoverScale = isDisabled ? '' : 'hover:scale-150';

  const isMobile = useMobile();

  // Detect when the cell becomes the active category and scroll into view
  useLayoutEffect(() => {
    if (activeCategory === item.category && isMobile) {
      if (!ref.current) return;

      console.log(ref.current, ' is scrolling into view');

      ref.current.scrollIntoView({
        behavior: 'auto',
      });
    }
  }, [activeCategory, item.category, ref, isMobile]);

  function handleGoogleTag(item: Item) {
    if (process.env.NODE_ENV !== 'production') return;
    // check if window is valid
    if (typeof window === 'undefined') return;

    // Check if the gtag function is defined
    if (window.gtag) {
      window.gtag('event', 'element_selected', {
        event_category: item.category,
        event_label: item.name,
        event_value: 1,
      });
    }
  }

  return (
    <article
      ref={ref} // Pass the ref to the div
      onClick={() => {
        if (isDisabled) return;
        handleGoogleTag(item);
        setActiveElement(item);
        select();
      }}
      className={`${height} ${width}  dark:border-white border-black border m-0.5 p-1 ${colorOption} ${transparent} justify-center items-center cursor-pointer transition-all ${hoverScale} z-0 hover:z-10 `}
      aria-describedby={`${item.slug}-desc`}
    >
      <div className="flex flex-col  relative h-full w-full">
        <div className="flex w-full justify-between items-center">
          {item.icon ? (
            <figure>
              <Image
                alt={`icon for ${item.name}`}
                width={10}
                height={10}
                className=""
                src={`${prefix}${item.icon}`}
              />
              <figcaption className="hidden">{`Icon for ${item.name}`}</figcaption>
            </figure>
          ) : null}
          <span className="text-[0.5rem]">{item.length ?? '1-100'}</span>
        </div>
        <h2 className="justify-start w-full font-bold text-xs">
          {item.slug}
        </h2>
        <p className="justify-center items-center w-full text-[0.4rem] h-full  overflow-hidden">
          <span>{item.name}</span>
        </p>
      </div>
      <div id={`${item.slug}`} className="hidden">{item.description}</div>
    </article>
  );
};

interface ColumnProps {
  items: Item[];
  activeCategory: Categories | null;
  setActiveCategory: (category: Categories | null) => void;
  select: () => void;
  setActiveElement: (element: any) => void;
  categoryData: CategoryData;
  textSearch: string;
  zoomLevel: 0 | 1 | 2;
}

export const Column: React.FC<ColumnProps> = ({
  items,
  activeCategory,
  setActiveCategory,
  select,
  setActiveElement,
  categoryData,
  textSearch,
  zoomLevel,
}) => {
  return (
    <div className={`flex flex-col w-fit h-full relative`}>
      {items.map((item, i) => (
        <Cell
          textSearch={textSearch}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          key={i}
          item={item}
          select={select}
          setActiveElement={setActiveElement}
          categoryData={categoryData}
          zoomLevel={zoomLevel}
        />
      ))}
    </div>
  );
};
