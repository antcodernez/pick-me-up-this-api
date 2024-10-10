import express from "express";

const app = express();
const port = 9222;

app.use(express.json())

app.get("/", (req, res) => {
    res.send(`<h1> Hola mi server en express papus </h1>`);
});


app.listen(port, () => {
    console.log("I'm alive baby ;)");
})