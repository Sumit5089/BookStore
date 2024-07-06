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
        res.status(201).json({message:"User created successfully",
            user :{ _id: newUser._id, username: newUser.username, email: newUser.email}
        });
    } catch(error){
        if(error.response){
            console.log(err);
            alert("Error: " + err.response.data.message);
    }
};
}

export const login = async(req, res) =>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message: "User does not exist"});
        const isPasswordCorrect = await bcrypt.compare(password, user.password);    
        if(!isPasswordCorrect) { 
            return res.status(400).json({message: "Invalid credentials"});
            res.status(200).json(user);
        }else{
            res.status(200).json({message: "Login successful", user:{
                id: user._id,
                username: user.username,
                email: user.email
            
        }});
        }
    } catch(error){
        res.status(404).json({message: error.message});
    }
}