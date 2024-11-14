import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsersEntity } from "./users.entity";
import { Exclude } from "class-transformer";
export enum token_type {
    Success = "reset_password",
    Failure = "verification"
}

@Entity("user_login_logs")
export class UserAuthTokensEntity {
    @PrimaryGeneratedColumn("increment", { name: "gender_id", type: "bigint" })
    genderId: number;

    @Column({
        name: "user_id",
        type: "bigint",
        nullable: true,
    })
    userId: number;

    @Exclude({ toPlainOnly: true })
    @Column({
        name: "token",
        type: "varchar",
        length: 45,
    })
    token: string;

    @UpdateDateColumn({
        name: "expires_at",
    })
    expiresAt: Date;

    @Column({
        type: "enum",
        enum: token_type,
        default: token_type.Failure,
        nullable: false
    })
    tokenType: token_type;

    @Column({
        name: "is_used",
        type: "tinyint",
        default: 0,
    })
    isUsed: string;

    @UpdateDateColumn({
        name: "is_used_at"
    })
    isUsedAt: Date;

    @Column({
        name: "revoked",
        type: "tinyint",
        default: 0,
    })
    revoked: Date

    @UpdateDateColumn({
        name: "revoked_at"
    })
    revokedAt: Date;

    @Column({
        name: "deleted_by",
        default: 0
    })
    deletedBy: number;

    @DeleteDateColumn({
        name: "daleted_at",
        default: null,
    })
    daletedAt: Date;

    @Column({
        name: "created_by",
        type: "bigint",
        default: 0,
    })
    createdBy: number;

    @UpdateDateColumn({
        name: "created_at",
        default: 0,
    })
    createdAt: Date;

    //Relation
    @ManyToOne(() => UsersEntity, (users) => users.userAuthTokens)
    @JoinColumn({ name: "user_id", referencedColumnName: "user_id"})
    user: UsersEntity;
}