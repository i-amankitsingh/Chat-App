import Message from "./message.model.js";

export const sendMessage = (data) => {
  return Message.create(data);
};

export const getMessages = (chatId, limit, skip) => {
  return Message.find({ chatId })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);
};
