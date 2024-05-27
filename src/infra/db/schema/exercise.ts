import { randomUUID } from 'crypto';
import { relations } from 'drizzle-orm';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { exercisesToTrainings } from './exercises-to-trainings';

export const exercises = sqliteTable('tb_exercise', {
  id: text('id')
    .$defaultFn(() => randomUUID())
    .primaryKey(),
  name: text('name').notNull(),
  muscle: text('muscle').notNull()
});

export const exercisesRelations = relations(exercises, ({ many }) => ({
  exercisesToTrainings: many(exercisesToTrainings)
}));
