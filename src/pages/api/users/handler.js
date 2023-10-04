import dbConnect from "@/utils/mongoDB";
import { hash } from 'bcryptjs';
import { createTransport } from "nodemailer";
import Security from "@/models/security";
import User from "@/models/user";


  async function handler(req, res) {
    await dbConnect();
    if (req.method === "POST") {
      const { email } = req.body;
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(!email.match(validRegex)) return res.status(404).json({ 'message': 'Incorrect Email format' });
      let existingUser;
      try {
          existingUser = await User.findOne({ email: email });
      } catch (err) {
          return res.status(500).json({ 'message': 'Internal server Error' });
      }
      if(existingUser) return res.status(404).json({ 'message': 'User already exists' });
      const otp = Math.floor(Math.random()*1000000);




      // await send(email, otp.toString());
      let mailTransporter = createTransport({
        service: "gmail",
        auth: {
          user: "techinfo.pantheon@gmail.com",
          pass: "peylrwxxkphhyytq",
        },
      });
    
      let mailDetails = {
        from: "techinfo.pantheon@gmail.com",
        to: email,
        subject: "Pantheon OTP",
        text: `Your OTP is ${otp.toString()}. It is valid for the next 5 minutes only.`,
      };
    
      try{
        await mailTransporter.sendMail(mailDetails);
      } catch (err) {
        return res.status(404).json({ 'message': 'Internal Server Error' });
      }
      
      
      
      const security = new Security({
        email: email,
        otp: otp.toString()
      });
      let existingSecurity;
      try {
        existingSecurity = await Security.findOne({ email: email });
      } catch (err) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
      }
      if(existingSecurity) {
        try {
          existingSecurity.otp = otp.toString();
          await existingSecurity.save();
        } catch (err) {
          return res.status(500).json({ 'message': 'Internal Server Error' });
        }
        return res.status(201).json({ 'message': 'Success' });
      }
      try {
        await security.save();
      } catch(err) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
      }
      res.status(200).json({ status: 'Success' });
    }
  }
  export default handler;

// export default async function otp(req, res) {
//     await dbConnect();
//     const { mail } = req.body;

//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if(!mail.match(validRegex)) return res.status(404).json({ 'message': 'Incorrect Email format' });
//     let existingUser;
//     try {
//         existingUser = await User.findOne({ email: mail });
//     } catch (err) {
//         return res.status(500).json({ 'message': 'Internal Server Error' });
//     }
//     if(existingUser) {
//         return res.status(404).json({ 'message': 'User already exists' });
//     }
//     const otp = Math.floor(Math.random()*1000000);
//     let mailOptions = {
//         from: "techinfo.pantheon@gmail.com",
//         to: mail,
//         subject: 'Pantheon OTP',
//         text: otp.toString()
//     };
//     try {
//         await transporter.sendMail(mailOptions);
//     } catch (err) {
//         return res.status(404).json({ 'message': 'Error in sending otp' });
//     }
//     let sending;
//     try{ 
//         sending = await hash(otp.toString(), 5);
//     } catch (err) {
//         return res.status(404).json({ 'message': 'error' });
//     }
//     const security = new Security({
//         email: mail,
//         otp: sending
//     });

//     try {
//         await security.save();
//     } catch(err) {
//         return res.status(500).json({ 'message': 'Internal Server Error' });
//     }
//     return res.status(201).json({ 'message': 'Sent!' });
// }