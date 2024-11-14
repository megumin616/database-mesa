import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PermissionMasterEntity } from "./permission-master.entity";

@Entity("menus_master")
export class MenusMaster {
    @PrimaryGeneratedColumn("increment", { name: "menu_id", type: "bigint" })
    menuId: number;

    @Column({
        name: "menu_name_th",
        type: "varchar",
        length: 200,
    })
    menuNameTh: string;

    @Column({
        name: "menu_name_en",
        type: "varchar",
        length: 200,
    })
    menuNameEn: string;

    @Column({
        name: "active",
        type: "tinyint",
        width: 1,
        default: 1,
    })
    active: string;

    @Column({
        name: "deleted_By",
        default: null,
    })
    deletedBy: number;

    @DeleteDateColumn({
        name: "deleted_at"
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
    @OneToMany(() => PermissionMasterEntity, (permission) => permission.menu)
    permissions: PermissionMasterEntity[];
}