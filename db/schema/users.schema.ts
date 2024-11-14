import { relations } from "drizzle-orm";
import {
  timestamp,
  mysqlTable,
  varchar,
  bigint,
  tinyint,
  datetime,
} from "drizzle-orm/mysql-core";
import { userRefRolesTable } from "./user-ref-roles.schema";
import { userGendersTable } from "./user-genders.schema";
import { permissionRefTable } from "./permission-ref.schema";
import { userLoginLogsTable } from "./user-login-logs.schema";

export const usersTable = mysqlTable("users", {
  user_id: bigint({ mode: "bigint" }).primaryKey().autoincrement(),
  prefix: varchar({ length: 100 }),
  name: varchar({ length: 200 }).notNull(),
  email: varchar({ length: 200 })
    .unique()
    .notNull(),
  password_hash: varchar({ length: 255 }).notNull(),
  checker: tinyint().default(0),
  gender_id: bigint({ mode: "bigint" })
    .notNull()
    .references(() => userGendersTable.gender_id),
  created_at: timestamp().defaultNow().notNull(),
  created_by: bigint({ mode: "number" }).default(0).notNull(),
  updated_at: timestamp()
    .$onUpdate(() => new Date())
    .defaultNow()
    .notNull(),
  updated_by: bigint({ mode: "number" }).default(0).notNull(),
  deleted_at: datetime(),
  deleted_by: bigint({ mode: "number" }).default(0).notNull(),
});

export const userRelations = relations(usersTable, ({ one, many }) => ({
  userRoles: many(userRefRolesTable),
  permissionRef: many(permissionRefTable),
  genders: one(userGendersTable, {
    fields: [usersTable.gender_id],
    references: [userGendersTable.gender_id],
  }),
  userLoginLogs: one(userLoginLogsTable, {
    fields: [usersTable.email],
    references: [userLoginLogsTable.email],
  }),
}));
