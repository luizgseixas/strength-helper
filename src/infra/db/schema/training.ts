import { randomUUID } from 'crypto';
import { relations } from 'drizzle-orm';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { exercisesToTrainings } from './exercises-to-trainings';
import { users } from './user';

export const trainings = sqliteTable('tb_training', {
  id: text('id')
    .$defaultFn(() => randomUUID())
    .primaryKey(),
  userId: text('user_id').notNull(),
  weekday: text('weekday', { enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] }).notNull()
});

export const trainingsRelations = relations(trainings, ({ many, one }) => ({
  exercisesToTrainings: many(exercisesToTrainings),
  user: one(users, {
    fields: [trainings.userId],
    references: [users.id]
  })
}));
