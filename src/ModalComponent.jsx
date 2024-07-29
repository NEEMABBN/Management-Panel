import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosBaseURL from "./ConfigAPI";

export default function ModalComponent() {
	const { id } = useParams();
	const router = useNavigate();

	const [inputValue, setInputValue] = useState({
		name: "",
		description: "",
		createdAt: "",
		avatar: "",
		parrentId: parseInt(id),
	});

	const postCategory = () => {
		axiosBaseURL.post("/category", inputValue).then((res) => {
			router("/");
			alert("created:)");
		});
	};

	return (
		<div className="w-full flex flex-row items-center justify-end py-28">
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
				<input
					onChange={(e) =>
						setInputValue({ ...inputValue, avatar: e.target.value })
					}
					type="text"
					name=""
					id="avatar"
					placeholder="Avatar"
					className="col-end-5 col-span-2 bg-[#FFFFFFE0] hover:bg-blue-200 transition-all backdrop-blur-[2.7px] outline-none text-[18px] rounded-2xl py-3 px-7"
				/>
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
