import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axiosBaseURL from "./ConfigAPI";
import { Link } from "react-router-dom";

export default function BlogPage() {
	const [blog, setBlog] = useState([]);
	useEffect(() => {
		getBlogList();
	}, []);

	const getBlogList = () => {
		axiosBaseURL
			.get("/blog")
			.then((res) => setBlog(res.data))
			.catch(console.error("mosiiiiii"));
	};

	return (
		<div className="w-full flex flex-col items-end">
			<div className="w-[85%] flex flex-col items-center">
				<div className="w-full flex flex-row items-center px-10">
					<h1 className="text-[40px] w-full text-center font-bold my-6 text-blue-600">
						Blog Page
					</h1>
					<Link
						to="/CreateBlog"
						className="text-nowrap cursor-pointer text-lg font-bold border-2 border-blue-600 rounded-Pro p-3 text-blue-600"
					>
						Create Blog
					</Link>
				</div>
				<div className="w-full grid grid-cols-4 gap-7 px-10">
					{blog.map((item, index) => (
						<BlogItem
							key={index}
							item={item}
							blog={blog}
							setBlog={setBlog}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
