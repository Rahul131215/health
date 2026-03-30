// Server entry point for notification-service
import express from 'express';
const app = express();
app.use(express.json());
app.listen(3005, '0.0.0.0', () => console.log('Notification service running on 3005'));
export default app;
