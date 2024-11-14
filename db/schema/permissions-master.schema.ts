import { relations } from "drizzle-orm";
import {
  timestamp,
  mysqlTable,
  varchar,
  bigint,
  tinyint,
  datetime,
} from "drizzle-orm/mysql-core";
import { permissionRefTable } from "./permission-ref.schema";
import { menusMasterTable } from "./menus-master.schema";

export const permissionMasterTable = mysqlTable("pemission_master", {
  permission_id: bigint({ mode: "bigint" }).primaryKey().autoincrement().notNull(),
  menu_id: bigint({ mode: "bigint" }).notNull().references(() => menusMasterTable.menu_id),
  permission_order: tinyint().default(1).notNull(),
  permission_master_th: varchar({ length: 150 }).notNull(),
  permission_master_en: varchar({ length: 150 }).notNull(),
  created_by: bigint({ mode: "number" }).default(0).notNull(),
  created_at: timestamp().defaultNow().notNull(),
  updated_by: bigint({ mode: "number" }).default(0).notNull(),
  updated_at: timestamp().$onUpdate(() => new Date()).defaultNow().notNull(),
  deleted_by: bigint({ mode: "number" }).default(0).notNull(),
  deleted_at: datetime(),
})

export const permissionMasterRelation = relations(permissionMasterTable, ({ many }) => ({
  permissionRef: many(permissionRefTable),
}))