import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export const POST = async (request) => {
  // assume kortse ei name a request a variable gula asbe
  const { fname, lname, email, password } = await request.json();

  // database connect
  await dbConnect();
  // ekhnae db connect ta r ekbar kortse karon amra vbtse j Ui charao jode keu functiona a perameter pass kore db te connect korar try kore...

  // password ta hash korbo..
  const hashedPassword = await bcrypt.hash(password, 10);

  // ekhn user er ekta object banabo jeta amra model a inser korbo

  const newUser = {
    name: `${fname} ${lname}`,
    email,
    password: hashedPassword,
  };

  try {
    await userModel.create(newUser);
    return new NextResponse("User created successfully", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
