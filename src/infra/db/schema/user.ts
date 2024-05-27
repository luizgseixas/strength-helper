import { randomUUID } from 'crypto';
import { relations, sql } from 'drizzle-orm';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { trainings } from './training';

export const users = sqliteTable('tb_user', {
  id: text('id')
    .$defaultFn(() => randomUUID())
    .primaryKey(),
  name: text('name').notNull(),
  document: text('document').notNull().unique(),
  email: text('email').notNull().unique(),
  phone: text('phone'),
  password: text('password').notNull(),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: text('updated_at').default(sql`(CURRENT_TIMESTAMP)`)
});

export const usersRelations = relations(users, ({ many }) => ({
  trainings: many(trainings)
}));
