import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/infra/db/schema/index.ts',
  out: './drizzle',
  driver: 'better-sqlite',
  verbose: true,
  strict: true,
});
