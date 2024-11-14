import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";

// transformer
import { Exclude } from "class-transformer";
import { UserRefRolesEntity } from "./user-ref-roles.entity";
import { UserGendersEntity } from "./user-genders.entity";
import { UserLoginLogsEntity } from "./user-login-logs.entity";
import { UserAuthTokensEntity } from "./user-auth-tokens.entity";
import { PermissionRefEntity } from "./permission-ref.entity";

@Entity("users")
export class UsersEntity {
  @PrimaryGeneratedColumn({ name:"user_id" ,type: "bigint" })
  user_id: number;
  
  @Column({
    type: "varchar",
    length: 100,
    nullable: true,
  })
  prefix: string;

  @Column({
    name: "name",
    type: "varchar",
    length: 200,
  })
  name: string;

  @Column({
    type: "varchar",
    length: 200,
    unique: true,
    nullable: true,
  })
  email: string;

  @Exclude({ toPlainOnly: true })
  @Column({
    name: "password_hash",
    type: "varchar",
    length: 255,
  })
  passwordHash: string;

  @Column({
    name: "checker",
    type: "tinyint",
    default: 0,
  })
  checker: number;

  @Column({
    name: "gender_id",
    type: "bigint",
    nullable: true,
  })
  genderId: number;

  @CreateDateColumn({
    name: "created_at",
  })
  createdAt: Date;

  @Column({
    name: "created_by",
    type: "bigint",
    nullable: true,
  })
  createdBy: number;

  @UpdateDateColumn({
    name: "updated_at",
  })
  updatedAt: Date;

  @Column({
    name: "updated_by",
    type: "bigint",
    nullable: true,
  })
  updatedBy: number;

  @DeleteDateColumn({
    name: "deleted_at",
  })
  deletedAt: Date;

  @Column({
    name: "deleted_by",
    type: "bigint",
  })
  deletedBy: number;

  //Relation
  @OneToMany(() => UserRefRolesEntity, (userRefRoles) => userRefRoles.userId)
  userRefRolesId: UserRefRolesEntity[];

  @OneToMany(() => UserLoginLogsEntity, (userLoginLogs) => userLoginLogs.user)
  userLoginLogs: UserLoginLogsEntity[];

  @OneToMany(() => UserAuthTokensEntity, (userAuthTokens) => userAuthTokens.user)
  userAuthTokens: UserAuthTokensEntity[];

  @OneToMany(() => PermissionRefEntity, (permissionRef) => permissionRef.user)
  permissionRefs: PermissionRefEntity[];

  @ManyToOne(() => UserGendersEntity, (userGender) => userGender.user)
  @JoinColumn({ name: "gender_id"})
  gender: UserGendersEntity;

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
