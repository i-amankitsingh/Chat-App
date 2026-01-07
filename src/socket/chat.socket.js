import Message from "../modules/message/message.model.js";

export const registerChatHandlers = (socket) => {

  // Join a chat room
  socket.on("join_chat", (chatId) => {
    socket.join(chatId);
    console.log(`Socket ${socket.id} joined chat ${chatId}`);
  });

  // Send message
  socket.on("send_message", async (data) => {
    /**
     * data = {
     *   chatId,
     *   senderId,
     *   content
     * }
     */

    // 1️⃣ Save message to DB
    const message = await Message.create(data);

    // 2️⃣ Emit to all members in that chat
    socket.to(data.chatId).emit("receive_message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
};
