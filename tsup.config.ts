import { defineConfig } from 'tsup';

export default defineConfig({
    name: 'ofa',
    entry: ['./src/**/*.ts'],

    bundle: false,
    splitting: false,
    tsconfig: 'tsconfig.json'
});