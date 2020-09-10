const User = require('../models/User');
const bcryptjs= require('bcryptjs');
const jwt= require('jsonwebtoken')

const userControllers={
    newUser: async (req, res) =>{
        
        const { name, surname, username, profilePic, password, country, email}= req.body
        const pwhasheado= bcryptjs.hashSync(password, 10)
        const userExist = await User.findOne({username})
        if(userExist){
            res.json({success: false, error: "That username has been taken. Please choose another."})
        }else{
            const userData = new User({
                name, surname, profilePic, password: pwhasheado, country, email, username  
            });

            userData.save()
                jwt.sign({...userData}, process.env.SECRETORKEY,{},(error, token)=>{
                    if(error){
                        res.json({success:false, error: "Error"})
                     }else{
                         res.json({ success:true, token, username: userData.username, profilePic: userData.profilePic })         
                     }   
            
                })
            
        } 
    },
    loginUser: async (req,res)=>{
        const {username, password}= req.body
        const userExist = await User.findOne({username})
        if(!userExist){
            res.json({success: false, message: "The username and password you entered did not match our records. Please double-check and try again."})
        }else{
            const pwmatch = bcryptjs.compareSync(password, userExist.password)
            if(!pwmatch){
                res.json({success: false, message: "The username and password you entered did not match our records. Please double-check and try again."})
            }else{
                jwt.sign({...userExist}, process.env.SECRETORKEY,{},(error, token)=>{
                   if(error){
                    res.json({success:false, error: "Error"})
                   }else{
                    res.json({success:true, token, username: userExist.username, profilePic: userExist.profilePic})
                   }
                }) 
            }
        }
    }
}
module.exports= userControllers