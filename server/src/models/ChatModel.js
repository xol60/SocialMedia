import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
    {
        members: {
            type: Array,
        },
        name: {
            type: String,
            default: 'default name'
        }
    },
    {
        timestamps: true,
    }
);

const ChatModel = mongoose.model("Chat", ChatSchema);
export default ChatModel;