import { relations } from "drizzle-orm";
import {
    timestamp,
    mysqlTable,
    varchar,
    bigint,
    tinyint,
    datetime,
} from "drizzle-orm/mysql-core";
import { permissionMasterTable } from "./permissions-master.schema";

export const menusMasterTable = mysqlTable("menus_master", {
    menu_id: bigint({ mode: "bigint" }).primaryKey().autoincrement().notNull(),
    menu_name_th: varchar({ length: 200 }).notNull(),
    menu_name_en: varchar({ length: 200 }).notNull(),
    active: tinyint().default(1).notNull(),
    created_by: bigint({ mode: "number" }).default(0).notNull(),
    created_at: timestamp().defaultNow().notNull(),
    updated_by: bigint({ mode: "number" }).default(0).notNull(),
    updated_at: timestamp().$onUpdate(() => new Date()).defaultNow().notNull(),
    deleted_by: bigint({ mode: "number" }).default(0).notNull(),
    deleted_at: datetime(),
})

export const menusMasterRelations = relations(menusMasterTable, ({ many }) => ({
    permissionMaster: many(permissionMasterTable),
}))