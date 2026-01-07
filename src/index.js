import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import http from "http";
import { initSocket } from "./socket/index.js";

dotenv.config({
    path: "./.env"
});


// connectDB().then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log("Server is listening: ", process.env.PORT);
//     })
// })
// .catch((err) => {
//     console.log("Server connection error: ", err);
// })



const server = http.createServer(app);

initSocket(server);

connectDB().then(() => {
    server.listen(process.env.PORT || 8000, () => {
        console.log("Server + Socket running on port ", process.env.PORT);
      });
})
.catch((err) => {
    console.log("Server connection error: ", err);
})

