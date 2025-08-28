import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import compression from "compression";
import serveFavicon from "serve-favicon";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 2357;

app.use(compression());
app.use(express.json());
app.use(serveFavicon(join(__dirname, "/dist/favicon.ico")));
app.use(express.static("dist"));

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "/dist/index.html"));
});
app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});
