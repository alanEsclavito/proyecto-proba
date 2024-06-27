import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Paginator from "./paginator";
import Formulario from "./form";
import Info from "./information";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Paginator />,
		children: [
			{
				path: "",
				element: <Info />,
			},
			{
				path: "test",
				element: <Formulario />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
