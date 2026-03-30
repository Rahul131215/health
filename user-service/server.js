// Server entry point for user-service
import express from 'express';
import userRoutes from './routes/userRoutes.js';
const app = express();
app.use(express.json());
app.use('/', userRoutes);
app.listen(3002, '0.0.0.0', () => console.log('User service running on 3002'));
export default app;
