import { z } from 'zod';

export const registerExerciseSchema = z.object({
  name: z.string(),
  muscle: z.string()
});
