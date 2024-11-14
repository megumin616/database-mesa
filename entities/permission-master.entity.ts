import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany,PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MenusMaster } from "./menus-master.entity";
import { PermissionRefEntity } from "./permission-ref.entity";

@Entity("permission_master")
export class PermissionMasterEntity {
    @PrimaryGeneratedColumn("increment", { name: "permission_id", type: "bigint" })
    permissionId: number;

    @Column({
        name: "permission_order",
        type: "tinyint",
        width: 10,
        default: 1,
    })
    permissionOrder: string;

    @Column({
        name: "permission_name_th",
        type: "varchar",
        length: 150,
    })
    permissionNameTh: string;

    @Column({
        name: "permission_name_en",
        type: "varchar",
        length: 150,
    })
    permissionNameEn: string;

    @DeleteDateColumn({
        name: "deleted_by",
        default:0,
    })
    deledtedBy: number;

    @DeleteDateColumn({
        name: "deleted_at",
        default: null,
    })
    deletedAt: Date;

    @Column({
        name: "created_by",
        type: "bigint",
        default: 0,
    })
    createdBy: number;

    @CreateDateColumn({
        name: "created_at",
    })
    createdAt: Date;

    @Column({
        name: "updated_by",
        type: "bigint",
        default: 0,
    })
    updatedBy: number;

    @UpdateDateColumn({
        name: "updated_at",
    })
    updatedAt: Date;

    //Relation
    @OneToMany(() => PermissionRefEntity, (permissionRef) => permissionRef.permissionMasters)
    permissionRefs: PermissionRefEntity[];

    @OneToMany(() => MenusMaster, (menu) => menu.permissions)
    menu: MenusMaster;
}