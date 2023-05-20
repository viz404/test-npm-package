import User from "./modules/User";
import { sdkConfig } from "./types/common";

export default class Meta {
  user: User;

  constructor(config: sdkConfig) {
    this.user = new User(config);
  }
}
