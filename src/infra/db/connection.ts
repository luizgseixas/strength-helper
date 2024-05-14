import { BetterSQLite3Database, drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema'

const sqlite = new Database('sqlite.db');

export type DrizzleDbConnection = BetterSQLite3Database<typeof schema>;

export const db = drizzle(sqlite, { schema });

