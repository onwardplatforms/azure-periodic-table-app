import Link from 'next/link';
import { Button } from './ui/button';
import { Icons } from './ui/icons';
import { siteConfig } from '@/config';
import { useTheme } from 'next-themes';
import { themes } from '@/lib/utils';
import { useState } from 'react';
import { Sheet, SheetContent } from './ui/sheet';

export default function Topbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex w-full">
      <Sheet open={open} onOpenChange={() => setOpen((prev) => !prev)}>
        <SheetContent className="bg-bg">
          <div className="flex flex-col w-full justify-center items-center">
            <Link
              className="flex w-full my-2 justify-start items-center"
              href={siteConfig.github}
              target="_blank"
            >
              <Button className="" variant={'ghost'}>
                <Icons.GitHub className="h-6 w-6 fill-current" />
                <span className="px-4 font-bold text-lg">GitHub</span>
              </Button>
            </Link>
            <Link
              className="flex my-2 w-full justify-start items-center"
              href={siteConfig.twitter}
            >
              <Button variant={'ghost'}>
                <Icons.Twitter className="h-6 w-6 fill-current" />
                <span className="px-4 font-bold text-lg">Twitter</span>
              </Button>
            </Link>
            <Link
              className="flex w-full my-2 justify-start items-center"
              href={siteConfig.linkedin}
            >
              <Button variant={'ghost'}>
                <Icons.Linkedin className="h-6 w-6 fill-current" />
                <span className="px-4 font-bold text-lg">LinkedIn</span>
              </Button>
            </Link>

            <Button
              onClick={() =>
                theme === themes.DARK
                  ? setTheme(themes.LIGHT)
                  : setTheme(themes.DARK)
              }
              variant={'ghost'}
              className="w-full flex justify-start items-center"
            >
              {theme === themes.DARK ? (
                <div className="flex my-2 justify-start items-center">
                  <Icons.Moon className="h-6 w-6 fill-current" />
                  <span className="px-4 font-bold text-lg">Dark Mode</span>
                </div>
              ) : (
                <div className="flex my-2 justify-start items-center">
                  <Icons.Sun className="h-6 w-6 fill-current" />
                  <span className="px-4 font-bold text-lg">Light Mode</span>
                </div>
              )}
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex justify-start items-center">
        <Icons.Logo className="h-5 w-5 text-black dark:text-white mr-2" />
        <span className="font-bold text-xl text-black dark:text-white">
          {siteConfig.title}
        </span>
      </div>
      <div className="flex ml-auto md:hidden">
        <Button onClick={() => setOpen((prev) => !prev)} variant={'ghost'}>
          <Icons.Menu className="h-5 w-5 fill-current" />
        </Button>
      </div>

      <div className="ml-auto hidden md:flex">
        <a href={siteConfig.github} target="_blank">
          <Button className="" variant={'ghost'}>
            <Icons.GitHub className="h-5 w-5 fill-current" />
          </Button>
        </a>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Button variant={'ghost'}>
            <Icons.Linkedin className="h-5 w-5 fill-current" />
          </Button>
        </a>
        <a
          href={siteConfig.twitter}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Button variant={'ghost'}>
            <Icons.Twitter className="h-5 w-5 fill-current" />
          </Button>
        </a>
        <Button
          onClick={() =>
            theme === themes.DARK
              ? setTheme(themes.LIGHT)
              : setTheme(themes.DARK)
          }
          variant={'ghost'}
        >
          {theme === themes.DARK ? (
            <Icons.Moon className="h-5 w-5 fill-current" />
          ) : (
            <Icons.Sun className="h-5 w-5 fill-current" />
          )}
        </Button>
      </div>
    </nav>
  );
}
