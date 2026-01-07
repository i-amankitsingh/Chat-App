import Chat from "./chat.model.js";

export const createPrivateChat = async (userA, userB) => {
  const chat = await Chat.findOne({
    type: "private",
    members: { $all: [userA, userB] }
  });

  if (chat) return chat;

  return Chat.create({
    type: "private",
    members: [userA, userB]
  });
};

export const createGroupChat = async (creatorId, name, members) => {
  return Chat.create({
    type: "group",
    name,
    members: [creatorId, ...members],
    adminIds: [creatorId]
  });
};
