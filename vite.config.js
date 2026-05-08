import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import { fileURLToPath } from 'url'
import fs from 'fs'
import 'dotenv/config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const vercelApiPlugin = () => ({
  name: 'vercel-api',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (!req.url.startsWith('/api')) return next();
      
      try {
        const url = new URL(req.url, `http://${req.headers.host}`);
        let route = url.pathname;
        let filePath = path.join(__dirname, route + '.js');
        
        if (!fs.existsSync(filePath)) {
          filePath = path.join(__dirname, route, 'index.js');
        }

        if (fs.existsSync(filePath)) {
          if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
            const chunks = [];
            for await (const chunk of req) chunks.push(chunk);
            const bodyStr = Buffer.concat(chunks).toString();
            if (bodyStr) {
               try { 
                 req.body = JSON.parse(bodyStr); 
               } catch(e) { 
                 console.error('Vite API Plugin JSON parse error:', e); 
                 req.body = {}; 
               }
            } else {
               req.body = {};
            }
          }
          
          req.query = Object.fromEntries(url.searchParams);
          
          // Use dynamic import to load the Vercel function
          const module = await import(`file://${filePath}?t=${Date.now()}`);
          
          // Add json() helper to res if not present
          if (!res.json) {
            res.json = function(obj) {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(obj));
            };
          }
          if (!res.status) {
            res.status = function(code) {
              res.statusCode = code;
              return res;
            };
          }

          await module.default(req, res);
          return;
        }
      } catch (err) {
        console.error('API Error:', err);
        res.statusCode = 500;
        res.end(JSON.stringify({ message: err.message }));
        return;
      }
      next();
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), vercelApiPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
