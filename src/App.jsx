import React from "react";
import SideBar from "./assets/SideBar";
import { Route, Routes } from "react-router";
import router from "./router";

function App() {
	return (
		<div className="">
			<SideBar />
			<Routes>
				{router.map((item, index) => (
					<Route
						element={item.Element}
						path={item.path}
						key={index}
					/>
				))}
			</Routes>
		</div>
	);
}

export default App;
