import express from "express";

import { routerApi } from "./routes/index.routes.js";

const app = express();
const port = 9222;

app.use(express.json())

app.get("/", (req, res) => {
    res.send(`<h1> Hola mi server en express papus </h1>`);
});

routerApi(app);

app.listen(port, () => {
    console.log(`I'm currently working master chief :D http://localhost:${port}`);
})