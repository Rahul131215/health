import { Router } from 'express';
import { getUsers, registerUser } from '../controller/userController.js';

const router = Router();

router.get('/', getUsers);
router.post('/register', registerUser);

export default router;
