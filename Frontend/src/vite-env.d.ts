/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_USER_API: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
