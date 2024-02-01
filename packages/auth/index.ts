import { User } from "../user";
export class Auth {
  authenticate(user: User): boolean {
    return user.roles.some((role) => role === "admin");
  }
}
