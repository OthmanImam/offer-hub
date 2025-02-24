import { Router, type Router as ExpressRouter } from "express";
import portfolioItemsController from "./controllers/portfolio-items.controller";
import achievementsController from "./controllers/achievements.controller";
import notificationsController from "./controllers/notifications.controller";
import authLogsController from "./controllers/auth-logs.controller";
import SkillsController from './controllers/skills.controller';
import certificationsController from "./controllers/certifications.controller";

const router: ExpressRouter = Router(); // Explicit type annotation fixes the error

router.use("/portfolio-items", portfolioItemsController);
router.use("/achievements", achievementsController);
router.use("/notifications", notificationsController);
router.use("/auth-logs", authLogsController);
router.use('/skills', SkillsController);
router.use('/certifications', certificationsController)

export default router;
