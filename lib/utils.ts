import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type Question = {
  choices: string[];
  question: string;
  answer: string;
  explanation: string;
  hasCodeSyntax: boolean;
  code: string;
};

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
