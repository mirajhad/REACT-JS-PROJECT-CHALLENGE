const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");



// REGISTER ROUTE BY USING ASYNC

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  //VALIDATION:
  if (!name || !email || !password) {
    return res.status(422).json({ error: "not filled" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "already exist" });
    }
    const user = new User({ name, email, password });

    //hjjh

    await user.save();

    res.status(201).json({ message: " user register success" });
  } catch (err) {
    console.log(err);
  }
});

//LOGIN ROUTE

router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "please enter data" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      //JSONWEBTOKEN
      const token = await userLogin.generateAuthToken();
      console.log(token);

      //STORING TOKENS
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "invalid credentials pass" });
      } else {
        res.json({ message: "user login successfully" });
      }
    } else {
      res.status(400).json({ error: "invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

//get data for contact us and homepage
router.get('/getdata',authenticate,(req,res)=>{
  res.send(req.rootUser)
})


//about us ka page


module.exports = router;
