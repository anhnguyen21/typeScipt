import { UserController } from './UserController'
import { CreateUser } from '../service/user';

const createUser = new CreateUser();

const useController = new UserController(createUser)

export { useController }