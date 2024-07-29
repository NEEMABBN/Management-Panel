import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axiosBaseURL from "./ConfigAPI";

export default function EditComponent() {
	const { id } = useParams();
	const [inputValue, setInputValue] = useState({
		name: "",
		description: "",
		createdAt: "",
		avatar: "",
	});

	useEffect(() => {
		getCategoryDetails();
	}, []);

	const getCategoryDetails = async () => {
		await axiosBaseURL.get(`/category/${id}`).then((res) => {
			setInputValue(res.data);
		});
	};

	const router = useNavigate();

	const update = async () => {
		axiosBaseURL.put(`/category/${id}`, inputValue).then((res) => {
			router("/");
			alert("Updated:)");
		});
	};

	return (
		<div className="w-full flex flex-row justify-end">
			<div className="w-[70%] flex flex-col items-center mt-14 gap-16 p-4 mr-28">
				<h2 className="text-blue-600 text-5xl font-bold text-center">
					Edit
				</h2>
				<div className="w-full grid grid-cols-4 gap-9 p-16 bg-blue-600 rounded-3xl">
					<div className="flex flex-col items-start col-span-2">
						<span className="text-white">Name :</span>
						<input
							value={inputValue.name}
							onChange={(e) => {
								setInputValue({
									...inputValue,
									name: e.target.value,
								});
							}}
							type="text"
							className="col-span-2 bg-[#FFFFFFE0] hover:bg-blue-200 transition-all backdrop-blur-[2.7px] outline-none text-[18px] rounded-2xl py-3 px-7"
						/>
					</div>
					<div className="flex flex-col items-start col-span-2">
						<span className="text-white">Description :</span>
						<input
							value={inputValue.description}
							onChange={(e) => {
								setInputValue({
									...inputValue,
									description: e.target.value,
								});
							}}
							type="text"
							className="col-span-2 bg-[#FFFFFFE0] hover:bg-blue-200 transition-all backdrop-blur-[2.7px] outline-none text-[18px] rounded-2xl py-3 px-7"
						/>
					</div>
					<div className="flex flex-col items-start col-span-2">
						<span className="text-white">Date :</span>
						<input
							value={inputValue.createdAt}
							onChange={(e) => {
								setInputValue({
									...inputValue,
									createdAt: e.target.value,
								});
							}}
							type="text"
							className="col-span-2 bg-[#FFFFFFE0] hover:bg-blue-200 transition-all backdrop-blur-[2.7px] outline-none text-[18px] rounded-2xl py-3 px-7"
						/>
					</div>
					<div className="flex flex-col items-start col-span-2">
						<span className="text-white">Avatar :</span>
						<input
							value={inputValue.avatar}
							onChange={(e) => {
								setInputValue({
									...inputValue,
									avatar: e.target.value,
								});
							}}
							type="text"
							className="col-span-2 bg-[#FFFFFFE0] hover:bg-blue-200 transition-all backdrop-blur-[2.7px] outline-none text-[18px] rounded-2xl py-3 px-7"
						/>
					</div>
				</div>
				<button
					onClick={update}
					className="bg-blue-600 hover:bg-blue-800 transition-all text-white font-bold rounded-Pro px-16 text-2xl py-4 text-center"
				>
					Update
				</button>
			</div>
		</div>
	);
}
