import React from "react";
import axiosBaseURL from "./ConfigAPI";
import { Link } from "react-router-dom";

export default function BlogItem({ item, blog, setBlog }) {
	const deleteBlog = async () => {
		await axiosBaseURL.delete(`/blog/${item.id}`).then((res) => {
			setBlog(blog.filter((p) => p.id != item.id));
		});
	};

	return (
		<div className="flex flex-col items-center bg-blue-200 rounded-3xl overflow-hidden">
			<div className="p-6 flex flex-col items-center gap-3">
				<img src="" alt="" className="" />
				<h2 className="text-xl font-bold text-blue-700">{item.name}</h2>
				<span className="text-gray-500">
					CategoryName : {item.categoryId}
				</span>
				<p className="text-gray-500 text-center">{item.description}</p>
				<span className="text-gray-500">
					CreatedAt : {item.createdAt}
				</span>
			</div>
			<div className="w-full border-t-2 border-gray-400 flex flex-row items-center justify-between">
				<button
					onClick={deleteBlog}
					className="py-2 text-xl font-semibold bg-red-200 hover:bg-red-300 hover:text-red-800 text-red-600 transition-all text-center w-[50%]"
				>
					Delete
				</button>
				<Link
					to={`/EditBlog/${item.id}`}
					className="py-2 text-xl font-semibold bg-green-200 hover:bg-green-300 hover:text-green-800 text-green-600 transition-all text-center w-[50%] border-l-2 border-gray-500"
				>
					Edit
				</Link>
			</div>
		</div>
	);
}
