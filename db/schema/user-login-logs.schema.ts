import { relations } from "drizzle-orm";
import { bigint, datetime, mysqlEnum, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { usersTable } from "./users.schema";

export const userLoginLogsTable = mysqlTable("user_login_logs", {
    id: bigint({ mode: "bigint" }).primaryKey().notNull().unique(),
    email: varchar({ length: 200 }).unique().notNull(),
    ip_address: varchar({ length: 45 }).notNull(),
    device_info: varchar({ length: 255 }).notNull(),
    status: mysqlEnum("status", ["success", "failure"]).notNull(),
    failure_reason: varchar({ length: 255 }).default(null),
    created_at: timestamp().defaultNow().notNull(),
    deleted_at: datetime(),
})

export const userLoginLogsRelations = relations(userLoginLogsTable, ({ one, many }) => ({
    user: one(usersTable, {
        fields: [userLoginLogsTable.email],
        references: [usersTable.email],
    })
}))