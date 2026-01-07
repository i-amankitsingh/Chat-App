import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.ORIGIN,
    credential: true
}));


app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser())

// Secure routes
import chatRoutes from "./modules/chat/chat.routes.js";
import messageRoutes from "./modules/message/message.routes.js";

app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);


export { app };