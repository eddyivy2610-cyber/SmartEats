import mongoose from "mongoose";
import { ID_SUFFIX, REF_STARBUCKS, TYPE_ACCOUNT, TYPE_KITCHEN, TYPE_PROFILE, TYPE_TABLE } from "../constants";
import { menus } from "./smarteatsMenu";

const account = {
	_id: new mongoose.Types.ObjectId(`${REF_STARBUCKS}${TYPE_ACCOUNT}${ID_SUFFIX}000003`),
	email: "admin@smarteats.ng",
	username: "smarteats",
	password: "password123",
	verified: true,
};

const profile = {
	_id: new mongoose.Types.ObjectId(`${REF_STARBUCKS}${TYPE_PROFILE}${ID_SUFFIX}000003`),
	name: "SmartEats",
	restaurantID: "smarteats",
	description:
		"Authentic Nigerian cuisine right at your fingertips. Enjoy premium dishes like Jollof Rice, Pounded Yam, Suya, and more with our smart ordering system.",
	address: "Victoria Island, Lagos",
	themeColor: { h: 145, s: 80, l: 30 },
	avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Nigeria.svg/1200px-Flag_of_Nigeria.svg.png",
	cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Jollof_Rice_with_Stew.jpg/1200px-Jollof_Rice_with_Stew.jpg",
	photos: [
		"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Jollof_Rice_with_Stew.jpg/1200px-Jollof_Rice_with_Stew.jpg",
	],
	categories: ["Rice Dishes", "Soups & Swallows", "Grilled", "Snacks", "Drinks"],
};

const kitchens = [
	{
		_id: new mongoose.Types.ObjectId(`${REF_STARBUCKS}${TYPE_KITCHEN}${ID_SUFFIX}000003`),
		restaurantID: "smarteats",
		username: "smarteatsKitchen1",
		password: "123456",
	},
];

const tables = Array.from({ length: 5 }, (_, i) => ({
	_id: new mongoose.Types.ObjectId(`${REF_STARBUCKS}${TYPE_TABLE}${ID_SUFFIX}${(i + 100).toString().padStart(6, "0")}`),
	restaurantID: "smarteats",
	name: `Table ${i + 1}`,
	username: (i + 1).toString(),
}));

const smarteats = {
	account,
	profile,
	menus,
	kitchens,
	tables,
};

export default smarteats;
