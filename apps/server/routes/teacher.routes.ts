import { Router } from "express";
import teacherController from "../controller/teacher.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authMiddleware, teacherController.createTeacher);
router.get("/", authMiddleware, teacherController.getAllTeachers);
router.get("/:id", authMiddleware, teacherController.getTeacherById);
router.put("/:id", authMiddleware, teacherController.updateTeacher);
router.delete("/:id", authMiddleware, teacherController.deleteTeacher);

export default router;
