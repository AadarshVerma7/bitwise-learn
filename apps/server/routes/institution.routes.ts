import { Router } from "express";
import institutionController from "../controller/institution.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authMiddleware, institutionController.createInstitution);
router.get("/", authMiddleware, institutionController.getAllInstitutions);
router.get("/:id", authMiddleware, institutionController.getInstitutionById);
router.put("/:id", authMiddleware, institutionController.updateInstitution);
router.delete("/:id", authMiddleware, institutionController.deleteInstitution);

export default router;
