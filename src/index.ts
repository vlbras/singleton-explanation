import { PostsService } from "./services/posts.service";
import { UsersService } from "./services/users.service";

const usersService = new UsersService();
const postsService = new PostsService();

usersService.findAll(); // [0] INFO Find all users
postsService.findAll(); // [1] INFO Find all posts
postsService.findAll(); // [2] INFO Find all posts
usersService.findAll(); // [3] INFO Find all users
