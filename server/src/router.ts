import express from "express";
const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";
import sayActions from "./modules/item/say/sayActions";
import programAction from "./modules/program/programAction";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */
// Déclaration des routes
router.get("/", sayActions.sayHello);
router.get("/api/programs", programAction.browse);
export default router;
