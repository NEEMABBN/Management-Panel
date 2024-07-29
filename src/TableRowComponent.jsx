import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import axiosBaseURL from "./ConfigAPI";
import { CgListTree } from "react-icons/cg";

export default function TableRowComponent({
	setCategoryList,
	categorList,
	category,
}) {
	const deleteCategory = async () => {
		await axiosBaseURL.delete(`/category/${category.id}`).then((res) => {
			setCategoryList(categorList.filter((p) => p.id != category.id));
		});
	};

	return (
		<tr className="w-full flex flex-row items-center justify-between border-y-2 py-2 my-6">
			<td className="flex flex-col items-center">{category.id}</td>
			<td className="text-center">{category.name}</td>
			<td className="text-center">{category.description}</td>
			<td className="text-center">{category.createdAt}</td>
			<td className="text-center">
				{category.avatar.indexOf("https") >= 0 ? (
					<img
						src={category.avatar}
						alt="User Profile :)"
						className="w-[50px] h-[50px] rounded-full overflow-hidden"
					/>
				) : (
					<span>{category.avatar}</span>
				)}
			</td>
			<td className="flex flex-row items-start justify-center gap-4 text-[19px]">
				<Link to={`/Edit/${category.id}`}>
					<MdEdit className="text-green-600 cursor-pointer" />{" "}
				</Link>
				<FaRegTrashCan
					onClick={deleteCategory}
					className="text-red-600 cursor-pointer"
				/>
				<Link to={`/createEvent/${category.id}`}>
					<IoMdAddCircleOutline className="text-blue-600 cursor-pointer" />
				</Link>
				<Link
					to={`/Category/${category.id}`}
					className="text-purple-600 cursor-pointer"
				>
					<CgListTree />
				</Link>
			</td>
		</tr>
	);
}
