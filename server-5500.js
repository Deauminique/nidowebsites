import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Serve static files from the dist directory
app.use(express.static(join(__dirname, "dist")));

// Send all requests to index.html
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

// Start server on port 5500
app.listen(5500, () => {
  console.log("Server running on http://localhost:5500");
});
