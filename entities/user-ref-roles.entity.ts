import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UsersEntity } from "./users.entity";
import { UserRolesEntity } from "./user-roles.entity";

@Entity("user_ref_roles")
export class UserRefRolesEntity {
    @PrimaryColumn({ name: "user_id", type: "bigint" })
    userId: number;

    @PrimaryColumn({ name: "role_id", type: "bigint" })
    roleId: number;

    @Column({
        name: "created_by",
        type: "bigint",
        nullable: true,
        default: 0,
    })
    createdBy: number;

    @CreateDateColumn({
        name: "cerated_at",
        nullable: true,
    })
    createdAt: Date;

    //relation
    @ManyToOne(() => UsersEntity, (users) => users.userRefRolesId)
    @JoinColumn({name: "user_id"})
    userIdRelation: UsersEntity;

    @ManyToOne(() => UserRolesEntity, (userRoles) => userRoles.userRefRoles)
    @JoinColumn({ name: "role_id"})
    roleIdRelation: UserRolesEntity;

    @ManyToOne(() => UsersEntity)
    @JoinColumn({ name: "created_by" })
    createdByUser: UsersEntity;
}