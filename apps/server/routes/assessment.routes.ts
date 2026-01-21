import { Router } from "express";
import AssessmentController from "../controller/assessment.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/create-assessment", authMiddleware, AssessmentController.createAssessment);
router.get("/get-all-assessment", authMiddleware, AssessmentController.getAllAssessment);
router.get(
    "/get-assessment-by-id/:id",
    authMiddleware,
    AssessmentController.getAssessmentById
);
router.put(
    "/update-assessment-by-id/:id",
    authMiddleware,
    AssessmentController.updateAssessment
);
router.delete(
    "/delete-assessment-by-id/:id",
    authMiddleware,
    AssessmentController.deleteAssessment
);
export default router;
