import mongoose, {Schema,Types} from "mongoose";

const messageSchema = new Schema({
    message :{
        type:String,
        required:true,
    },
    receiverId :{
        type:Types.ObjectId,
        required:true,
        ref:'User'
    },
},{
    timestamps:true,
});
const messageModel =mongoose.model('Message',messageSchema);
export default messageModel;