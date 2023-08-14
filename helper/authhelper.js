const bcrypt = require('bcrypt');
const saltRounds = 10;
const util = require('util');

 const hashPassword =  async (password) =>{
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return hashedPassword;
 }

 const comparePassword = (password,hashedPassword) =>{
   return bcrypt.compare(password, hashedPassword);
 }

 module.exports = {
    hashPassword,
    comparePassword
 }