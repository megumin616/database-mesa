import { relations } from "drizzle-orm";
import {
  bigint,
  datetime,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { usersTable } from "./users.schema";

export const userGendersTable = mysqlTable("user_genders", {
  gender_id: bigint({ mode: "bigint" })
    .primaryKey()
    .autoincrement()
    .notNull()
    .unique(),
  gender_name_th: varchar({ length: 200 }).notNull(),
  gender_name_en: varchar({ length: 200 }).notNull(),
  created_by: bigint({ mode: "number" }).default(0).notNull(),
  created_at: timestamp().defaultNow().notNull(),
  updated_by: bigint({ mode: "number" }).default(0).notNull(),
  updated_at: timestamp()
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
  deleted_by: bigint({ mode: "number" }).default(0).notNull(),
  deleted_at: datetime(),
});

export const userGendersRelations = relations(userGendersTable, ({ one, many }) => ({
  users: many(usersTable),
}));