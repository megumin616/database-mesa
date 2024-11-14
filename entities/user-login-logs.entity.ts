import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UsersEntity } from "./users.entity";

export enum Status {
    SUCCESS = "success",
    FAILURE = "failure",
}
@Entity("user-login-logs")
export class UserLoginLogsEntity {
    @PrimaryGeneratedColumn("increment", {type: "bigint"})
    id: number;

    @Column({
        type: "varchar",
        length: 200,
        nullable: true,
    })
    email: string;

    @Column({
        name: "ip_address",
        type: "varchar",
        length: 45,
        nullable: true,
    })
    ipAddress: string;

    @Column({
        name: "device_info",
        type: "varchar",
        length: 255,
        nullable: true,
    })
    deviceInfo: string;

    @Column({
        type: "enum",
        enum: Status,
        nullable: true,
    })
    status: Status;

    @Column({
        name: "failure_reason",
        length: 255,
        nullable: true,
    })
    failureReason: string;

    @CreateDateColumn({
        name: "created_at",
    })
    createdAt: Date;

    @DeleteDateColumn({
        name: "deleted_at",
    })
    deletedAt: Date;

    //Relation
    @ManyToOne(() => UsersEntity, (user) => user.userLoginLogs)
    @JoinColumn({ name: "email", referencedColumnName: "email" })
    user: UsersEntity;
}