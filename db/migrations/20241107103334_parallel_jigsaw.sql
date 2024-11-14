CREATE TABLE IF NOT EXISTS `user_genders` (
	`gender_id` bigint AUTO_INCREMENT NOT NULL,
	`gender_name_th` varchar(200) NOT NULL,
	`gender_name_en` varchar(200) NOT NULL,
	`created_by` bigint NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_by` bigint NOT NULL DEFAULT 0,
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	`deleted_by` bigint NOT NULL DEFAULT 0,
	`deleted_at` datetime,
	CONSTRAINT `user_genders_gender_id` PRIMARY KEY(`gender_id`),
	CONSTRAINT `user_genders_gender_id_unique` UNIQUE(`gender_id`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `user_login_logs` (
	`id` bigint NOT NULL,
	`email` varchar(200) NOT NULL,
	`ip_address` varchar(45) NOT NULL,
	`device_info` varchar(255) NOT NULL,
	`status` enum('success','failure') NOT NULL,
	`failure_reason` varchar(255) DEFAULT null,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`deleted_at` datetime,
	CONSTRAINT `user_login_logs_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_login_logs_id_unique` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `user_ref_roles` (
	`user_id` bigint NOT NULL,
	`role_id` bigint NOT NULL,
	`created_by` bigint NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `user_ref_roles_user_id` PRIMARY KEY(`user_id`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `user_roles` (
	`role_id` bigint AUTO_INCREMENT NOT NULL,
	`role_name_th` varchar(200) NOT NULL,
	`role_name_en` varchar(200) NOT NULL,
	`active` tinyint NOT NULL DEFAULT 1,
	`deleted_by` bigint NOT NULL DEFAULT 0,
	`deleted_at` datetime,
	`created_by` bigint NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_by` bigint NOT NULL DEFAULT 0,
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `user_roles_role_id` PRIMARY KEY(`role_id`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `users` (
	`user_id` bigint AUTO_INCREMENT NOT NULL,
	`prefix` varchar(100),
	`name` varchar(200) NOT NULL,
	`email` varchar(200),
	`password_hash` varchar(255) NOT NULL,
	`checker` tinyint DEFAULT 0,
	`gender_id` bigint NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`created_by` bigint NOT NULL DEFAULT 0,
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	`updated_by` bigint NOT NULL DEFAULT 0,
	`deleted_at` datetime,
	`deleted_by` bigint NOT NULL DEFAULT 0,
	CONSTRAINT `users_user_id` PRIMARY KEY(`user_id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
