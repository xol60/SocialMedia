const io = require("socket.io")(8080, {
    cors: {
        origin: "http://localhost:3006",
    },
});
let activeUsers = [];
io.on("connection", (socket) => {
    socket.on("new-user-add", (newUserId) => {

        if (!activeUsers.some((user) => user.userId === newUserId)) {
            activeUsers.push({ userId: newUserId, socketId: socket.id });
            console.log("New User Connected", activeUsers);
        }

        io.emit("get-users", activeUsers);
    });
    socket.on("disconnect", () => {

        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
        console.log("User Disconnected", activeUsers);
        // send all active users to all users
        io.emit("get-users", activeUsers);
    });
    socket.on("send-message", (data) => {
        const { receiverId } = data;
        const user = activeUsers.find((user) => user.userId === receiverId);
        console.log(receiverId, '-----', data)
        if (user) {
            io.to(user.socketId).emit("recieve-message", data);
        }
    });
})