import joi from "joi";
export const sendMessageSchema = {
    body:joi.object({
        message:joi.string().min(1).max(500).required(),
    }),
    params:joi.object({
        receiverId:joi.string().length(24)
    })
}