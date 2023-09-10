import dbConnect from "@/utils/mongoDB";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try {
        const body = req.json();
        console.log(body);
        await dbConnect();
        await User.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }

}

export async function GET(req, res){
    const users = [{
        name: "John Doe",
        email: "j@email.com"
    },{
        name: "John Doe",
        email: "j@email.com"
    },{
        name: "John Doe",
        email: "j@email.com"
    }]
    return NextResponse.json(users)
}
