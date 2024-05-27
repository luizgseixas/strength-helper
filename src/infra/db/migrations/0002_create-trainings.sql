CREATE TABLE `tb_training` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`weekday` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `exercises_to_trainings` (
	`exercise_id` text NOT NULL,
	`training_id` text NOT NULL,
	PRIMARY KEY(`exercise_id`, `training_id`),
	FOREIGN KEY (`exercise_id`) REFERENCES `tb_exercise`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`training_id`) REFERENCES `tb_training`(`id`) ON UPDATE no action ON DELETE no action
);
