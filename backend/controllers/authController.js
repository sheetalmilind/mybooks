const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//exports.registerUser = async (req, res) => {
  //try {
  //  const { username, email, password } = req.body;
   // const user = new User({ username, email, password });
   // await user.save();
   // res.status(201).json({ message: 'User registered successfully' });
  //} catch (err) {
   // res.status(500).json({ message: 'Error registering user', error: err });
  //}
//};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    //console.log(user.email);
    if (!user) return res.status(404).json({ message: 'User not found' });
    //let passwordHash = await bcrypt.hash(password, 10);
   //const booleanResult = await bcrypt.compare(userData.password, passwordHash);
    const isPasswordValid = await bcrypt.compare(password,user.password);
    

    //console.log(isPasswordValid);
    //console.log(user.password);
    if (!isPasswordValid) 
      return res.status(401).json({ message: 'Invalid password' });
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return res.json({
      message: 'Login successful',
      user: { id: user._id, username: user.email,name:user.name },
      token: token
    });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err });
  }
};
