import React, { useEffect, useState } from "react";
import axiosBaseURL from "./ConfigAPI";
import { useNavigate, useParams } from "react-router";

export default function EditBlogComponent() {
	const { id } = useParams();
	const [blogItem, setBlogItem] = useState({
		name: "",
		description: "",
		createdAt: "",
		categoryId: "",
	});

	useEffect(() => {
		getBlogDetail();
	}, []);

	const getBlogDetail = () => {
		axiosBaseURL.get(`/blog/${id}`).then((res) => {
			setBlogItem(res.data);
		});
	};

	const router = useNavigate();

	const update = async () => {
		axiosBaseURL.put(`/blog/${id}`, blogItem).then((res) => {
			router("/blog");
			alert("Updated:)");
		});
	};

	return (
		<div className="w-full flex flex-col items-end py-20 gap-16">
			<h1 className="text-3xl font-bold text-blue-600 w-[50%]">
				Edit Blog
			</h1>
			<div className="bg-blue-600 w-[70%] mr-28 rounded-Pro p-24 grid grid-cols-4 gap-9">
				<input
					value={blogItem.name}
					onChange={(e) => {
						setBlogItem({ ...blogItem, name: e.target.value });
					}}
					type="text"
					name=""
					id="name"
					placeholder="name"
					className="col-start-1 col-span-2 bg-[#FFFFFFE0] hover:bg-blue-200 transition-all backdrop-blur-[2.7px] outline-none text-[18px] rounded-2xl py-3 px-7"
				/>
				<input
					value={blogItem.description}
					onChange={(e) => {
						setBlogItem({
							...blogItem,
							description: e.target.value,
						});
					}}
					type="text"
					name=""
					id="description"
					placeholder="Description"
					className="col-end-5 col-span-2 bg-[#FFFFFFE0] hover:bg-blue-200 transition-all backdrop-blur-[2.7px] outline-none text-[18px] rounded-2xl py-3 px-7"
				/>
				<input
					value={blogItem.createdAt}
					onChange={(e) => {
						setBlogItem({ ...blogItem, createdAt: e.target.value });
					}}
					type="datetime"
					name=""
					id="date"
					placeholder="Date"
					className="col-start-1 col-span-2 bg-[#FFFFFFE0] hover:bg-blue-200 transition-all backdrop-blur-[2.7px] outline-none text-[18px] rounded-2xl py-3 px-7"
				/>
				<select
					name=""
					id=""
					className="col-end-5 col-span-2 bg-[#FFFFFFE0] text-gray-500 hover:bg-blue-200 transition-all backdrop-blur-[2.7px] outline-none text-[18px] rounded-2xl py-3 px-7"
				>
					<option value={blogItem.id}>{blogItem.name}</option>
				</select>
				<button
					onClick={update}
					className="bg-blue-800 hover:bg-blue-950 transition-all text-white font-bold rounded-Pro text-center py-5 col-start-2 col-end-4"
				>
					Done
				</button>
			</div>
		</div>
	);
}
