import User from "../model/user.model.js"
import bcryptjs from "bcryptjs"

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await User.findOne({ email });
        if(user){
            res.status(400).json({message: "User Already Exists !"});
        }
        const hashPass = await bcryptjs.hash(password, 10);
        const createUser = new User({
            name: name,
            email: email,
            password: hashPass,
        });

        await createUser.save()
        res.status(201).json({message: "User Created Successfully !", user: {
            _id: createUser.id,
            name: createUser.name,
            email: createUser.email,
        }})
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({message: "Server Error"});
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!user || !isMatch){
            res.status(400).json({message: "Invalid Creds !"})
        }else{
            res.status(201).json({message: "Login Successful !", user:{
                _id: user.id,
                name: user.name,
                email: user.email
            }});
        }
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({message: "Server Error"});
    }
}