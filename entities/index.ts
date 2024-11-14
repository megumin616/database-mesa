import { UserGendersEntity } from "./user-genders.entity";
import { UserLoginLogsEntity } from "./user-login-logs.entity";
import { UserRefRolesEntity } from "./user-ref-roles.entity";
import { UserRolesEntity } from "./user-roles.entity";
import { MenusMaster } from "./menus-master.entity";
import { PermissionMasterEntity } from "./permission-master.entity";
import { PermissionRefEntity } from "./permission-ref.entity";
import { UserAuthTokensEntity } from "./user-auth-tokens.entity";
import { UsersEntity } from "./users.entity";


const entities = {
  UsersEntity,
  UserGendersEntity,
  UserLoginLogsEntity,
  UserRefRolesEntity,
  UserRolesEntity,
  UserAuthTokensEntity,
  PermissionRefEntity,
  PermissionMasterEntity,
  MenusMaster,
};

export { entities, UsersEntity };
