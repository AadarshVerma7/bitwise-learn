import { Router } from "express";

import adminRoutes from "./admin.routes";
import institutionRoutes from "./institution.routes";
import teacherRoutes from "./teacher.routes";
// import batchRoutes from "./batch.routes";
import authRoutes from "./auth.routes";

const router = Router();
router.get("/ping", (req, res) => {
    res.status(200).send("pong");
});


router.use("/auth", authRoutes);

router.use("/admins", adminRoutes);
router.use("/institutions", institutionRoutes);


router.use("/teachers", teacherRoutes);
// router.use("/batches", batchRoutes);

export default router;
