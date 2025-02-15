import path from 'path';
import { fileURLToPath } from 'url';

// Define __filename e __dirname corretamente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from 'express';

const app = express();

// Use __dirname corretamente
app.use(express.static(path.join(__dirname, "../front-end/dist")));

console.log("Servidor rodando...");
