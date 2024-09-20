import express from "express"
import { contactUs } from "../controller/contact.controller.js"

const router = express.Router();

router.post("/contact", contactUs)

export default router;