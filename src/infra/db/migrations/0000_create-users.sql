CREATE TABLE `tb_user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`document` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`password` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `tb_user_document_unique` ON `tb_user` (`document`);--> statement-breakpoint
CREATE UNIQUE INDEX `tb_user_email_unique` ON `tb_user` (`email`);