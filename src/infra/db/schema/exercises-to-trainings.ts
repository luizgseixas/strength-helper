import { primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { exercises } from './exercise';
import { trainings } from './training';
import { relations } from 'drizzle-orm';

export const exercisesToTrainings = sqliteTable(
  'exercises_to_trainings',
  {
    exerciseId: text('exercise_id')
      .notNull()
      .references(() => exercises.id),
    trainingId: text('training_id')
      .notNull()
      .references(() => trainings.id)
  },
  (t) => ({
    pk: primaryKey({ columns: [t.exerciseId, t.trainingId] })
  })
);

export const exercisesToTrainingsRelations = relations(exercisesToTrainings, ({ one }) => ({
  training: one(trainings, {
    fields: [exercisesToTrainings.trainingId],
    references: [trainings.id]
  }),
  exercise: one(exercises, {
    fields: [exercisesToTrainings.exerciseId],
    references: [exercises.id]
  })
}));
