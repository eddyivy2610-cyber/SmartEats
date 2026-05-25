import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import connectDB from "#utils/database/connect";
import { Menus, type TMenu } from "#utils/database/models/menu";
import { authOptions } from "#utils/helper/authHelper";
import { CatchNextResponse } from "#utils/helper/common";

export async function POST(req: Request) {
	try {
		await connectDB();
		const session = await getServerSession(authOptions);
		const data = await req.json();

		if (!session) throw { status: 401, message: "Authentication Required" };
		if (session.role !== "admin") throw { status: 403, message: "Only admins can perform this action" };

		const restaurantID = session.username;

		const newMenuItem = new Menus({
			...data,
			restaurantID,
		});

		await newMenuItem.save();

		return NextResponse.json({ status: 200, message: "Menu item created successfully", item: newMenuItem });
	} catch (err) {
		console.log(err);
		return CatchNextResponse(err);
	}
}

export async function PUT(req: Request) {
	try {
		await connectDB();
		const session = await getServerSession(authOptions);
		const data = await req.json();

		if (!session) throw { status: 401, message: "Authentication Required" };
		if (session.role !== "admin") throw { status: 403, message: "Only admins can perform this action" };
		if (!data._id) throw { status: 400, message: "Menu item id is required" };

		const restaurantID = session.username;

		const menuItem = await Menus.findOne({ _id: data._id, restaurantID });

		if (!menuItem) throw { status: 404, message: `Menu item with id: ${data._id}, not found or unauthorized` };

		Object.assign(menuItem, data);

		await menuItem.save();

		return NextResponse.json({ status: 200, message: "Menu item updated successfully", item: menuItem });
	} catch (err) {
		console.log(err);
		return CatchNextResponse(err);
	}
}

export const dynamic = "force-dynamic";
