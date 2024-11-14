import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRefRolesEntity } from "./user-ref-roles.entity";
import { UsersEntity } from "./users.entity";

@Entity("user_roles")
export class UserRolesEntity {
    @PrimaryGeneratedColumn("increment", { name: "role_id", type: "bigint"})
    roleId: number;

    @Column({
        name: "role_name_th",
        type: "varchar",
        length: 200,
        nullable: true,
    })
    roleNameTh: string;

    @Column({
        name: "role_name_en",
        type: "varchar",
        length: 200,
        nullable: true,
    })
    roleNameEn: string;

    @Column({
        type: "tinyint",
        default: 1,
        nullable: true,
    })
    active: number;

    @Column({
        name: "deleted_by",
        type: "bigint",
        default: 0,
    })
    deletedBy: number;

    @DeleteDateColumn({
        name: "deleted_at",
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

    @OneToMany(() => UserRefRolesEntity, (userRoles) => userRoles.roleId)
    userRefRoles: UserRefRolesEntity[];

    @ManyToOne(() => UsersEntity)
    @JoinColumn({ name: "created_by" })
    createdByUser: UsersEntity;

    @ManyToOne(() => UsersEntity)
    @JoinColumn({ name: "updated_by" })
    updatedByUser: UsersEntity;

    @ManyToOne(() => UsersEntity)
    @JoinColumn({ name: "deleted_by" })
    deletedByUser: UsersEntity;
}