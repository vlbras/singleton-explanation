import { Logger } from "../logger.signleton";

export class PostsService {
  private logger: Logger;

  public constructor() {
    this.logger = Logger.getInstance();
  }

  public findAll() {
    try {
      // ...
      this.logger.info("Find all posts");
    } catch (error) {
      // ...
      this.logger.error(error);
    }
  }
}
