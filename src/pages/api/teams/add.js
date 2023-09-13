import mongoose from "mongoose";
import User from "@/models/user";
import Team from "@/models/team";
import dbConnect from "@/utils/mongoDB";

export default async function add(req, res, next) {
    await dbConnect();
    const { join_code, pantheonid } = req.body;
    let user, team;
    try {
        user = await User.findOne({ pantheonid: pantheonid });
        team = await Team.findOne({ join_code: join_code });
    } catch (err) {
        res.status(500).json({ 'messsage': 'Internal Server Error' });
    }
    if(!user || !team) res.status(404).json({ 'message': 'Not found' });
    if(team.team_members.length >= 8) res.status(400).json({ 'message': 'Team filled' });
    if(user.team != "null") res.status(201).json({ 'ID': -1 });
    user.team = join_code;
    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        team.team_members.push(user);
        await team.save({ session: sess });
        await user.save({ session: sess });
        await sess.commitTransaction();
    } catch (err) {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
    res.status(201).json({ 'join_code': join_code });
}