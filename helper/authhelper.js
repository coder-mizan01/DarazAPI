import bcrypt from 'bcrypt';
const saltRounds = 10;
import util from 'util';


 const hashPassword =  async (password) =>{
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return hashedPassword;
 }

 const comparePassword = (password,hashedPassword) =>{
   return bcrypt.compare(password, hashedPassword);
 }

export {
    hashPassword,
    comparePassword
 }