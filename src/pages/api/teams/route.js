import dbConnect from "../../../utils/mongoDB";
import Team from "../../../models/team.js";

export default async function handler(req, res) {
    if(req.method == 'GET'){
        await dbConnect();
        const teams = await Team.find({});
        res.status(200).json(teams)
    }
    if(req.method == 'POST'){
        await dbConnect();
        const team = await Team.create(req.body);
        res.status(200).json(team)
    }

    res.status(404).json({message: 'NO API ROUTE FOUND'})
}
