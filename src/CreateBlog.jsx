import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axiosBaseURL from "./ConfigAPI";

export default function CreateBlog() {
	const router = useNavigate();

	const [inputValue, setInputValue] = useState({
		name: "",
		description: "",
		createdAt: "",
	});
	const [blog, setBlog] = useState([]);

	useEffect(() => {
		getBlogList();
	}, []);

	const getBlogList = () => {
		axiosBaseURL
			.get("/category")
			.then((res) => setBlog(res.data))
			.catch(console.error("mosiiiiii"));
	};
	const postCategory = () => {
		axiosBaseURL.post("/blog", inputValue).then((res) => {
			router("/blog");
			alert("created:)");
		});
	};

	return (
		<div className="w-full flex flex-col items-end py-20 gap-16">
			<h1 className="text-3xl font-bold text-blue-600 w-[50%]">
				Create Blog
			</h1>
			<div className="bg-blue-600 w-[70%] mr-28 rounded-Pro p-24 grid grid-cols-4 gap-9">
				<input
					onChange={(e) =>
						setInputValue({ ...inputValue, name: e.target.value })
					}
					type="text"
					name=""
					id="name"
					placeholder="name"
					className="col-start-1 col-span-2 bg-[#FFFFFFE0] hover:bg-blue-200 transition-all backdrop-blur-[2.7px] outline-none text-[18px] rounded-2xl py-3 px-7"
				/>
				<input
					onChange={(e) =>
						setInputValue({
							...inputValue,
							description: e.target.value,
						})
					}
					type="text"
					name=""
					id="description"
					placeholder="Description"
					className="col-end-5 col-span-2 bg-[#FFFFFFE0] hover:bg-blue-200 transition-all backdrop-blur-[2.7px] outline-none text-[18px] rounded-2xl py-3 px-7"
				/>
				<input
					onChange={(e) =>
						setInputValue({
							...inputValue,
							createdAt: e.target.value,
						})
					}
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
					{blog
						.filter((p) => p.parrentId == null)
						.map((item, index) => (
							<option value={item.id} key={index}>
								{item.name}
							</option>
						))}
				</select>
				<button
					onClick={postCategory}
					className="bg-blue-800 hover:bg-blue-950 transition-all text-white font-bold rounded-Pro text-center py-5 col-start-2 col-end-4"
				>
					Done
				</button>
			</div>
		</div>
	);
}
