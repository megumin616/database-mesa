CREATE TABLE IF NOT EXISTS `menus_master` (
	`menu_id` bigint AUTO_INCREMENT NOT NULL,
	`menu_name_th` varchar(200) NOT NULL,
	`menu_name_en` varchar(200) NOT NULL,
	`active` tinyint NOT NULL DEFAULT 1,
	`created_by` bigint NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_by` bigint NOT NULL DEFAULT 0,
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	`deleted_by` bigint NOT NULL DEFAULT 0,
	`deleted_at` datetime,
	CONSTRAINT `menus_master_menu_id` PRIMARY KEY(`menu_id`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `permission_ref` (
	`user_id` bigint AUTO_INCREMENT NOT NULL,
	`permission_id` bigint,
	`created_by` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `permission_ref_user_id` PRIMARY KEY(`user_id`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `pemission_master` (
	`permission_id` bigint AUTO_INCREMENT NOT NULL,
	`menu_id` bigint NOT NULL,
	`permission_order` tinyint NOT NULL DEFAULT 1,
	`permission_master_th` varchar(150) NOT NULL,
	`permission_master_en` varchar(150) NOT NULL,
	`created_by` bigint NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_by` bigint NOT NULL DEFAULT 0,
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	`deleted_by` bigint NOT NULL DEFAULT 0,
	`deleted_at` datetime,
	CONSTRAINT `pemission_master_permission_id` PRIMARY KEY(`permission_id`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `user_login_logs` (
	`gender_id` bigint AUTO_INCREMENT NOT NULL,
	`user_id` varchar(200) NOT NULL,
	`token` varchar(45) NOT NULL,
	`expires_at` datetime NOT NULL,
	`token_type` enum('reset_password','verification') NOT NULL,
	`is_used` tinyint NOT NULL DEFAULT 0,
	`is_used_at` timestamp NOT NULL DEFAULT (now()),
	`revoked` tinyint NOT NULL DEFAULT 0,
	`revoked_at` datetime DEFAULT null,
	`created_by` bigint NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`deleted_by` bigint NOT NULL DEFAULT 0,
	`deleted_at` datetime,
	CONSTRAINT `user_login_logs_gender_id` PRIMARY KEY(`gender_id`)
);
