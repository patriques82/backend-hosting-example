import http from "http";
import app from "./app.js";
import { PORT } from "./config.js";

const server = http.createServer(app);
server.listen(PORT, () => console.log("Listening on port: ", PORT));
