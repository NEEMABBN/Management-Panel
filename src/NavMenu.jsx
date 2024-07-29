import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavMenu() {
	return (
		<div className="w-[83%] flex flex-row items-center justify-between py-2 mx-3 border-b-2 relative">
			<h1 className="text-[30px] font-bold text-blue-600">Admin Panel</h1>
			<input
				type="search"
				name=""
				id=""
				className="bg-gray-300 px-6 py-2 rounded-3xl"
				placeholder="Search Event ..."
			/>
			<div className="flex flex-row items-center">
				<span className="font-semibold text-blue-600">
					Select Time :{" "}
				</span>
				<input type="date" name="" id="" className="" />
			</div>
			<Link
				to="/createEvent"
				className="flex flex-row items-center text-[18px] font-bold border-2 border-blue-600 hover:bg-blue-600 py-3 px-5 rounded-Pro text-blue-600 transition-all hover:text-white"
			>
				<FaPlus className="mr-2" /> Create Event
			</Link>
		</div>
	);
}
