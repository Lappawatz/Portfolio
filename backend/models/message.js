import mongoose from "mongoose";

let messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

let Message = mongoose.model("Message", messageSchema);
export default Message;
