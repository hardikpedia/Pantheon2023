import dbConnect from "@/utils/mongoDB";
import User from "@/models/user.js";
import { compare } from "bcryptjs";

export default async function signin(req, res) {
    await dbConnect();
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
    if(!existingUser) return res.status(201).json({ 'message': 'User not found' });
    if(await compare(password, existingUser.password)) return res.status(201).json({ 'ID': existingUser.pantheonid, 'name': existingUser.name, 'code': existingUser.team });
    return res.status(201).json({ 'message': 'Incorrect Credentials' });
}