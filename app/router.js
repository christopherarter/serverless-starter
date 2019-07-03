import authMiddleware from "./middleware/authMiddleware";
import express from "express";
import * as controllers from "./controllers/index";

let router = express.Router();
/**
 * Global middleware
 */
// router.all("/posts/", authMiddleware);


/**
 * Register controllers.
 */
router.get('/', (req, res) => {
    res.send('helloooo world');
});
router.get("/posts", authMiddleware, controllers.postsController.index);
export default router;