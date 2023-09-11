import dbConnect from "../../../utils/mongoDB";
import User from "../../../models/user.js";
import { hash } from 'bcryptjs';
import check_id from "../../../utils/check_id";

export default async function signup(req, res) {
    if(req.method != 'POST') {
        res.status(404).json({ 'message': "Incorrect request" });
        return;
    }
    await dbConnect();
    const { name, email, phone, college, password } = req.body;

    // check if already present
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
    if(existingUser) {
        res.status(404).json({ 'message': 'User already exists' });
        return;
    }

    //generate hash
    let hashedPassword;
    try {
        hashedPassword = await hash(password, 5);
    } catch (err) {
        res.status(404).json({ 'message': 'Error occured while hashing' });
    }



    const pantheonid = "pantheon-" + toString(await check_id());

    const created = new User({
        name: name,
        email: email,
        phone: phone,
        password: hashedPassword,
        college: college,
        pantheonid: pantheonid
    });
    try {
        await created.save();
    } catch(err) {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
    res.status(201).json({ 'ID': pantheonid });
}