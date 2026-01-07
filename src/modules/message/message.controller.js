import {
    sendMessage,
    getMessages
  } from "./message.service.js";
  
  export const sendMessageController = async (req, res) => {
    const message = await sendMessage(req.body);
    res.json(message);
  };
  
  export const getMessagesController = async (req, res) => {
    const { chatId } = req.params;
    const page = Number(req.query.page || 1);
    const limit = 20;
  
    const messages = await getMessages(
      chatId,
      limit,
      (page - 1) * limit
    );
  
    res.json(messages);
  };
  