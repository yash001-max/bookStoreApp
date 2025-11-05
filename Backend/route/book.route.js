import express from "express";
import { getBook } from "../controller/book.controller.js"; // 👈 add .js extension

const router = express.Router();

router.get("/", getBook);

export default router;
