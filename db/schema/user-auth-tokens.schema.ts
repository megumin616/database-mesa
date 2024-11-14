import {
  timestamp,
  mysqlTable,
  varchar,
  bigint,
  tinyint,
  datetime,
  mysqlEnum,
} from "drizzle-orm/mysql-core";
import { usersTable } from "./users.schema";
import { relations } from "drizzle-orm";

export const userAuthTokensTable = mysqlTable("user_auth_tokens", {
  gender_id: bigint({ mode: "bigint" }).primaryKey().autoincrement().notNull(),
  user_id: bigint({ mode: "bigint" }).notNull().references(() => usersTable.user_id),
  token: varchar({ length: 45 }).notNull(),
  expires_at: datetime().notNull(),
  token_type: mysqlEnum("token_type", ["reset_password", "verification"]).notNull(),
  is_used: tinyint().default(0).notNull(),
  is_used_at: timestamp().defaultNow().notNull(),
  revoked: tinyint().default(0).notNull(),
  revoked_at: datetime().default(null),
  created_by: bigint({ mode: "number" }).default(0).notNull(),
  created_at: timestamp().defaultNow().notNull(),
  deleted_by: bigint({ mode: "number" }).default(0).notNull(),
  deleted_at: datetime(),
})

export const userAuthTokensRelations = relations(userAuthTokensTable, ({ one, many }) => ({
  user: one(usersTable, {
    fields: [userAuthTokensTable.user_id],
    references: [usersTable.user_id],
  })
}))