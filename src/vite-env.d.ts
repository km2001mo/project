/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_METALS_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}