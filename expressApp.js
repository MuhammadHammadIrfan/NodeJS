import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});
app.get('/about', (req, res) => {
  res.send('<h2>This is About Page</h2>');
});

app.listen(port, () => {                                                    
  console.log(`Example app listening on port ${port}`);
});