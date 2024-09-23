import userModel from "../../../DB/models/User.model.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../../Utils/SendEmail.js";

export const register = async (req,res)=>{
    try{
        const {userName,email,password} = req.body;
        const user = await userModel.findOne({email});
        if(user){
            return res.status(409).json({message:"email exists"});
        }
        const hashedPassword  = bcrypt.hashSync(password,parseInt(process.env.SALROUND));
        const html =`
            <div>
                <p>Dear : ${userName}</p>
                <h1 style='backgorund-color:teal;width:50%'>Welcome th HISTA website</h1>
            </div>
        `
        sendEmail(email,'Welcome',html);
        await userModel.create({userName,email,password:hashedPassword});
        return res.status(201).json({message:"success"});
    }catch(err){
        return res.status(500).json({message:"catch error",error:err.stack});
    }
}

export const Login = async(req,res)=>{
    try{
        const {email,password}= req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).json({message:"email not found"});
        }
        const check = await bcrypt.compareSync(password,user.password);
        if(!check){
            return res.status(400).json({message:"invalid password"});
        }
        const token = jwt.sign({id:user._id},process.env.LOGINSIGNATURE,{expiresIn:'1h'});
        return res.status(200).json({Message:"success",token});
    }catch(error){
        return res.status(500).json({message:'catch error',error});
    }
}