import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FitFood } from "./pages/FitFood";
import { Pya } from "./pages/Pya";
import { Antojitos } from "./pages/Antojitos";
import { Especialidades } from "./pages/Especialidades";

import {Home} from './pages/Home'

export const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pya" element={<Pya />} />
				<Route path="/antojitos" element={<Antojitos />} />
				<Route path="/especialidades" element={<Especialidades />} />
				<Route path="/fitnes" element={<FitFood />} />
			</Routes>
		</BrowserRouter>
	)
}