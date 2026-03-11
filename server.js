import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from root, src, and public
// This ensures that /src/assets/... and /images/... are reachable
app.use(express.static(__dirname));
app.use('/public', express.static(join(__dirname, 'public')));
app.use('/src', express.static(join(__dirname, 'src')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`⚡ Prosper Electric Server is running at http://localhost:${PORT}`);
    console.log(`🚀 Ready for deployment!`);
});
