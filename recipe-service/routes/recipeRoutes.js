import { Router } from 'express';
import { getRecipes, addRecipe } from '../controller/recipeController.js';

const router = Router();

router.get('/', getRecipes);
router.post('/', addRecipe);

export default router;
