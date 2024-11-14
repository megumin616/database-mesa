import { relations } from "drizzle-orm";
import { bigint, mysqlTable, timestamp } from "drizzle-orm/mysql-core";
import { usersTable } from "./users.schema";
import { userRolesTable } from "./user-roles.schema";

export const userRefRolesTable = mysqlTable("user_ref_roles", {
  user_id: bigint({ mode: "bigint" }).notNull().primaryKey().references(() => usersTable.user_id),
  role_id: bigint({ mode: "bigint" }).notNull().primaryKey().references(() => userRolesTable.role_id),
  created_by: bigint({ mode: "number" }).default(0).notNull(),
  created_at: timestamp().defaultNow().notNull(),
});

export const userRefRolesRelations = relations(userRefRolesTable,({ one }) => ({
    users: one(usersTable, {
      fields: [userRefRolesTable.user_id],
      references: [usersTable.user_id],
    }),
    userRoles: one(userRolesTable, {
      fields: [userRefRolesTable.role_id],
      references: [userRolesTable.role_id],
    }),
  }),
);
