import { Router } from 'express';

const router = Router();

router.get('/status', (req, res) => {
  res.json({
    service: 'HEALTH_AI API Gateway',
    status: 'online',
    timestamp: new Date().toISOString()
  });
});

export default router;
