/// <reference types="vite/client" />

// Allow importing PNGs as modules
declare module '*.png' {
  const src: string;
  export default src;
}
