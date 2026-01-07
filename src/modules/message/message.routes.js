import { Router } from "express";
import {
  sendMessageController,
  getMessagesController
} from "./message.controller.js";

const router = Router();

router.post("/", sendMessageController);
router.get("/:chatId", getMessagesController);

export default router;
