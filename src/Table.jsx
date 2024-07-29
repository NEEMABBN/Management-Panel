import React, { useEffect, useState } from "react";
import TableRowComponent from "./TableRowComponent";
import axiosBaseURL from "./ConfigAPI";
import { useParams } from "react-router";

export default function Table() {
	const [categorList, setCategoryList] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = () => {
		axiosBaseURL
			.get("/category")
			.then((res) => {
				if (res.status === 200) {
					setCategoryList(res.data);
				} else if (res.status === 204) {
					alert("no any data");
				}
			})
			.catch((res) => {
				if (res.status === 404) {
					console.error("mosi darde sar");
				}
			});
	};

	return (
		<div className="w-[83%] mr-3 px-3">
			<table className="w-full">
				<thead>
					<tr className="w-full flex flex-row items-center justify-between mt-4 mb-7">
						<th className="text-blue-600">Id</th>
						<th className="text-blue-600">Name</th>
						<th className="text-blue-600">Description</th>
						<th className="text-blue-600">Date</th>
						<th className="text-blue-600">Avatar</th>
						<th className="text-blue-600">Actions</th>
					</tr>
				</thead>
				<tbody>
					{categorList
						.filter(
							(p) =>
								p.parrentId ===
								(id == undefined ? null : parseInt(id))
						)
						.map((item, index) => (
							<TableRowComponent
								key={index}
								setCategoryList={setCategoryList}
								categorList={categorList}
								category={item}
							/>
						))}
				</tbody>
			</table>
		</div>
	);
}
