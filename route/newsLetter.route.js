import express from "express"
import { newsLetter } from "../controller/newsLetter.controller.js"

const router = express.Router();

router.post("/subscribe", newsLetter)

export default router;