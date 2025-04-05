/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEST: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
