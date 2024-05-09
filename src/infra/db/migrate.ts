import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { db } from './connection';
import chalk from 'chalk';

migrate(db, { migrationsFolder: 'drizzle' });

console.log(chalk.greenBright('Migrations applied successfully!'));

process.exit();