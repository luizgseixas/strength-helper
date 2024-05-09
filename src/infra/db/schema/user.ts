import { randomUUID } from 'crypto'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('tb_user', {
  id: text('id')
    .$defaultFn(() => randomUUID())
    .primaryKey(),
  name: text('name').notNull(),
  document: text('document').unique(),
  email: text('email').notNull().unique(),
  phone: text('phone'),
  createdAt: text('created_at').default(new Date().toISOString()),
  updatedAt: text('updated_at').default(new Date().toISOString()),
})