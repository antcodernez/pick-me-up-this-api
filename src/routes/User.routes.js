import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
    res.json({
        msg: "Hi children of evil"
    })
})

export default router;