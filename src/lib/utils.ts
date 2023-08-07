/* src/lib/utils.ts */

import { type Item } from '@/app/data';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const themes = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const size = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};
