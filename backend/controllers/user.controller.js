import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const signup = async(req, res) =>{
    try{
        const {username, email, password} = req.body;
        const user = await User.findOne({email});
        if(user) return res.status(400).json({message: "User already exists"});
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({username, email, password: hashedPassword});
        await newUser.save();
        res.status(201).json(newUser);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}