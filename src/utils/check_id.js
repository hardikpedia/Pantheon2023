import User from "../models/user";
import dbConnect from "./mongoDB";

export default async function check_id() {
    dbConnect();
    while(true) {
        const id = Math.random()*1000000;
        let user;
        try {
            user = await User.findOne({ pantheonid: "pantheon-" + toString(id) });
        } catch(err) { return -1; }
        if(!user) return id;
    }
}