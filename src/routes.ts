import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListComplimentsReceiveController } from './controllers/ListComplimentsReceiveController';
import { ListComplimentsSendController } from './controllers/ListComplimentsSendController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

const listComplimentsSendController = new ListComplimentsSendController();
const listComplimentsReceiveController = new ListComplimentsReceiveController();


// nome do recurso deve ser plural de acordo com sla oq
router.post('/login', authenticateUserController.handle);
router.post('/users', createUserController.handle);
router.get('/users', ensureAuthenticated, listUsersController.handle);

router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get('/tags', listTagsController.handle);


router.post('/compliments', ensureAuthenticated, createComplimentController.handle);
router.get(
   '/users/compliments/send',
   ensureAuthenticated,
   listComplimentsSendController.handle
);

router.get(
   '/users/compliments/receive',
   ensureAuthenticated,
   listComplimentsReceiveController.handle
);


export { router }