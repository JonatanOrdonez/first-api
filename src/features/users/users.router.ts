import {Router} from 'express';
import { createUserController, deleteUserController, getUserByIdController, getUsersController, updateUserController } from './users.controller';

const router = Router();


router.get('/', getUsersController);
router.get('/:id', getUserByIdController);
router.patch('/:id', updateUserController);
router.delete('/:id', deleteUserController);
router.post('/', createUserController);

export default router;