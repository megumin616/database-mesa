import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsersEntity } from "./users.entity";

@Entity("user_genders")
export class UserGendersEntity {
    @PrimaryGeneratedColumn("increment", { name: "gender_id",type: "bigint" })
    genderId: number;

    @Column({
        name: "gender_name_th",
        type: "varchar",
        length: 200,
        nullable: true,
    })
    genderNameTh: string;

    @Column({
        name: "gender_name_en",
        type: "varchar",
        length: 200,
        nullable: true,
    })
    genderNameEn: string;

    @Column({
        name: "created_by",
        type: "bigint",
        nullable: true,
        default: 0,
    })
    createdBy: number;

    @CreateDateColumn({
        name: "created_at",
        nullable: true,
    })
    createdAt: Date;

    @Column({
        name: "updated_by",
        type: "bigint",
    })
    updatedBy: number;

    @UpdateDateColumn({
        name: "updated_at",
        nullable: true,
    })
    updatedAt: Date;

    @Column({
        name: "deleted_by",
        type: "bigint",
    })
    deletedBy: number;

    @DeleteDateColumn({
        name: "deleted_at",
        nullable: true,
    })
    deletedAt: Date;

    //Relation
    @OneToMany(() => UsersEntity, (user) => user.gender)
    user: UsersEntity[]

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