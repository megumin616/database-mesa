import { relations } from "drizzle-orm";
import {
  bigint,
  datetime,
  mysqlTable,
  timestamp,
  tinyint,
  varchar,
} from "drizzle-orm/mysql-core";
import { userRefRolesTable } from "./user-ref-roles.schema";

export const userRolesTable = mysqlTable("user_roles", {
  role_id: bigint({ mode: "bigint" }).primaryKey().autoincrement(),
  role_name_th: varchar({ length: 200 }).notNull(),
  role_name_en: varchar({ length: 200 }).notNull(),
  active: tinyint().default(1).notNull(),
  deleted_by: bigint({ mode: "number" }).default(0).notNull(),
  deleted_at: datetime(),
  created_by: bigint({ mode: "number" }).default(0).notNull(),
  created_at: timestamp().defaultNow().notNull(),
  updated_by: bigint({ mode: "number" }).default(0).notNull(),
  updated_at: timestamp()
    .$onUpdate(() => new Date())
    .defaultNow()
    .notNull(),
});

export const userRolesRelations = relations(userRolesTable, ({ many }) => ({
  userRefRoles: many(userRefRolesTable),
}));
