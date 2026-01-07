import { Router } from "express";
import {
  createPrivateChatController,
  createGroupChatController
} from "./chat.controller.js";

const router = Router();

router.post("/private", createPrivateChatController);
router.post("/group", createGroupChatController);

export default router;
