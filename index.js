const { createServer } = require("http");
const app = require("./app");
// const { Server } = require("socket.io");
const httpServer = createServer(app);
// const io = new Server(httpServer);

httpServer.listen(3000, () => {
    console.log("Server is running on port 3000");
});
