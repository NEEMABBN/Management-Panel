import React from "react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
	return (
		<div className="bg-blue-600 w-[15%] h-[695px] rounded-r-[32px] px-8 flex fixed top-0 left-0 flex-col items-center gap-5">
			<h2 className="text-[25px] font-bold text-white mt-4">Menu</h2>
			<div className="flex flex-col items-center gap-3">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive
							? "text-white font-bold rounded-Pro py-3 w-full text-center bg-blue-200"
							: "text-white font-bold py-4 px-11"
					}
				>
					Category
				</NavLink>
				<NavLink
					to="/Blog"
					className={({ isActive }) =>
						isActive
							? "text-white font-bold rounded-Pro py-3 w-full text-center bg-blue-200"
							: "text-white font-bold py-4 px-11"
					}
				>
					Blog
				</NavLink>
			</div>
		</div>
	);
}
