// Server entry point for order-service
import express from 'express';
import orderRoutes from './routes/orderRoutes.js';
const app = express();
app.use(express.json());
app.use('/', orderRoutes);
app.listen(3004, '0.0.0.0', () => console.log('Order service running on 3004'));
export default app;
