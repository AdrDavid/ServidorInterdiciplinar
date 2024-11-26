import express from 'express';
import {userController} from '../src/Controller/UserController.js';
import auth from '../middleware/auth.js'

const UserRouter = express.Router();

const UserController = new userController();

UserRouter.get('/', auth, UserController.getAll);
UserRouter.post('/login', UserController.login);
UserRouter.post('/cadastro', UserController.cadastro);
UserRouter.get('/perfil', UserController.perfil);

export { UserRouter };