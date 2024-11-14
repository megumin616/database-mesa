import { Column, Entity,JoinColumn,ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { UsersEntity } from "./users.entity";
import { PermissionMasterEntity } from "./permission-master.entity";

@Entity("permission_ref")
export class PermissionRefEntity {
    @PrimaryColumn({ name: "user_id", type: "bigint" })
    userId: number;

    @PrimaryColumn({ name: "permission_id", type: "bigint" })
    permissionId: number;

    @Column({
        name: "created_by",
        type: "int",
    })
    createdBy: number;
    
    @UpdateDateColumn({
        name: "updated_at",
    })
    updatedAt: Date;

    //Relation
    @ManyToOne(() => UsersEntity, (user) => user.permissionRefs)
    @JoinColumn({name: "user_id"})
    user: UsersEntity;

    @ManyToOne(() => PermissionMasterEntity, (permissionMaster) => permissionMaster.permissionRefs)
    @JoinColumn({name: "permission_id"})
    permissionMasters: PermissionMasterEntity;
}