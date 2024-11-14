import { relations } from "drizzle-orm";
import {
    timestamp,
    mysqlTable,
    bigint,
    int,
} from "drizzle-orm/mysql-core";
import { usersTable } from "./users.schema";
import { permissionMasterTable } from "./permissions-master.schema";

export const permissionRefTable = mysqlTable("permission_ref", {
    user_id: bigint({ mode: "bigint" }).notNull().primaryKey().references(() => usersTable.user_id),
    permission_id: bigint({ mode: "bigint" }).notNull().primaryKey().references(() => permissionMasterTable.permission_id),
    created_by: int().notNull(),
    created_at: timestamp().defaultNow().notNull(),
})

export const permissionRefRelations = relations(permissionRefTable, ({ one }) => ({
    user: one(usersTable, {
        fields: [permissionRefTable.user_id],
        references: [usersTable.user_id],
    }),
    permissionMaster: one(permissionMasterTable, {
        fields: [permissionRefTable.permission_id],
        references: [permissionMasterTable.permission_id],
    }),
}))