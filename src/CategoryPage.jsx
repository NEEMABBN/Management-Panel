import React from "react";
import NavMenu from "./NavMenu";
import Table from "./Table";

export default function CategoryPage() {
	return (
		<div className="w-full flex flex-col items-end">
			<NavMenu />
			<Table />
		</div>
	);
}
