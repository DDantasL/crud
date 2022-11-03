import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";
import { CreateVideoController } from "./controllers/CreateVideoCoontroller";
import { GetAllVideosController } from "./controllers/GetAllVideosController";


const routes = Router();

/**
 * [X] C - CREATE
 * [X] R - READ
 * [X] U - UPDATE
 * [X] D - DELETE
 */


routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoriesController().handle)
routes.delete("/categories/:id", new DeleteCategoryController().handle)
routes.put("/categories/:id", new UpdateCategoryController().handle)



routes.post("/videos", new CreateVideoController().handle)
routes.get("/videos", new GetAllVideosController().handle)


export { routes };