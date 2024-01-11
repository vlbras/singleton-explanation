import { Logger } from "../logger.signleton";

export class UsersService {
  private logger: Logger;

  public constructor() {
    this.logger = Logger.getInstance();
  }

  public findAll() {
    try {
      // ...
      this.logger.info("Find all users");
    } catch (error) {
      // ...
      this.logger.error(error);
    }
  }
}
