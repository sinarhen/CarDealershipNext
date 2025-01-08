import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getYearsRangingFrom(year: number){
  const currentYear = new Date().getFullYear();
  return Array.from({length: currentYear - year}, (_, i) => year + i);
}