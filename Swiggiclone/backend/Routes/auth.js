const express = require("express")
const router = express.Router();

router.post('/signup',(req,res)=>{
    const {name, email, phonenumber, password} = req.body;
    console.log("Name",name,"email",email)

    res.status(200).json({
        message : "user created successfully",
        user:{name, email}
    })
})

router.post('/login',(req,res)=>{
    const {email, password} = req.body;
    console.log("email",email,"pasword",password)

    res.status(200).json({
        message : "user created successfully",
        user:{email}
    })
})


module.exports = router;