import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { createProxyMiddleware } from 'http-proxy-middleware';

import gatewayRoutes from './routes/gatewayRoutes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Gateway Routes (parse JSON only here to avoid breaking proxy)
  app.use('/api/gateway', express.json(), gatewayRoutes);
  
  // Proxy to actual Microservices running on different ports
  app.use('/api/users', createProxyMiddleware({ target: 'http://127.0.0.1:3002', changeOrigin: true }));
  app.use('/api/recipes', createProxyMiddleware({ target: 'http://127.0.0.1:3003', changeOrigin: true }));
  app.use('/api/orders', createProxyMiddleware({ target: 'http://127.0.0.1:3004', changeOrigin: true }));
  app.use('/api/notifications', createProxyMiddleware({ target: 'http://127.0.0.1:3005', changeOrigin: true }));

  // Vite middleware for frontend
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      root: path.join(rootDir, 'frontend'),
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(rootDir, 'frontend/dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`HEALTH_AI API Gateway running on http://localhost:${PORT}`);
  });
}

startServer();
