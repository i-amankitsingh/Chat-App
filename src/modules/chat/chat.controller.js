import {
    createPrivateChat,
    createGroupChat
  } from "./chat.service.js";
  
  export const createPrivateChatController = async (req, res) => {
    const userA = req.body.myId;   // from auth later
    const userB = req.body.userId;
  
    const chat = await createPrivateChat(userA, userB);
    res.json(chat);
  };
  
  export const createGroupChatController = async (req, res) => {
    const creatorId = req.body.myId;
    const { name, memberIds } = req.body;
  
    const chat = await createGroupChat(
      creatorId,
      name,
      memberIds
    );
  
    res.json(chat);
  };
  