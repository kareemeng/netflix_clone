/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from "tailwind-scrollbar-hide";

export const content = ["./src/**/*.{ts,tsx,js,jsx,html}"];
export const theme = {
  extend: {},
};
export const plugins = [tailwindScrollbarHide];
