import authMiddleware from "./middleware/authMiddleware";
import express from "express";
import { postsController, authController } from "./controllers/index";

let router = express.Router();

/**
 * Register controllers.
 */
router.get("/", (req, res) => {
	res.send("Hello World!");
});

router.use("/auth", authController);
router.use("/posts", postsController);

export default router;
