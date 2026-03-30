// Server entry point for recipe-service
import express from 'express';
import recipeRoutes from './routes/recipeRoutes.js';
const app = express();
app.use(express.json());
app.use('/', recipeRoutes);
app.listen(3003, '0.0.0.0', () => console.log('Recipe service running on 3003'));
export default app;
