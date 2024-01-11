# Singleton Explanation

Singleton is a creational design pattern, which ensures that only one instance of a class exists and provides a single point of access to it for any other code.

## Implementation

All implementations of the Singleton have these two steps in common:

• Make the default constructor private, to prevent other objects from using the new operator with the Singleton class.    
• Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object.

## Example

```ts
// The Logger class defines the `getInstance` method that lets
// access to the same instance of a Logger and uniquely identify
// logs throughout the program
export class Logger {
  // The field for storing the singleton instance should be
  // declared static.
  private static instance: Logger;

  // The field to uniquely identify logs
  private logId: number;

  // The singleton's constructor should always be private to
  // prevent direct construction calls with the `new`
  // operator.
  private constructor() {
    // Some initialization code, such configuration
    this.logId = 0
  }

  // The static method that controls access to the singleton
  // instance.
  public static getInstance() {
    // Ensure that the instance hasn't yet been
    // initialized by another thread while this one
    // has been waiting for the lock's release.
    if (!this.instance) {
      this.instance = new Logger();
    }
    return this.instance;
  }

  // Finally, any singleton should define some business logic
  // which can be executed on its instance.
  private log(type: string, text: string) {
    console.log(`[${this.logId}] ${type} ${text}`);
    // Increment the logId as we want it to be unique for each log.
    this.logId++;
  }

  public info(text: string) {
    this.log(LogTypes.INFO, text);
  }

  public error(text: string) {
    this.log(LogTypes.ERROR, text);
  }
}
```

Then import Logger into ```users.service``` and get an instance of it to log findAll's behavior:

```ts
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
```

Make the same for ```posts.service```

You are now ready to test the Logger used in UsersService and PostsService and ensure that each log has a unique ID

```ts
import { PostsService } from "./services/posts.service";
import { UsersService } from "./services/users.service";

const usersService = new UsersService();
const postsService = new PostsService();

usersService.findAll(); // [0] INFO Find all users
postsService.findAll(); // [1] INFO Find all posts
postsService.findAll(); // [2] INFO Find all posts
usersService.findAll(); // [3] INFO Find all users
```
