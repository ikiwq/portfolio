declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PUBLIC_API_URL: string;
            PUBLIC_BASE_URL: string;
            PUBLIC_STORAGE_URL: string;
        }
    }
}

export {};