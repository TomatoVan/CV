import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import AboutMe from "../pages/p1-AboutMe/AboutMe";
import Portfolio from "../pages/p2-Portfolio/Portfolio";
import Contacts from "../pages/p3-Contacts/Contacts";
import Error404 from "../pages/p4- Error404/Error404";

export const PATH = {
	ABOUT: '/about',
	PORTFOLIO: '/portfolio',
	CONTACTS: '/contacts',

}

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route  path={PATH.ABOUT}  element={<AboutMe/>}/>
				<Route path={PATH.PORTFOLIO}  element={<Portfolio/>}/>
				<Route path={PATH.CONTACTS}  element={<Contacts/>}/>
				{/*<Route path="/*" element={<Error404/>}/>*/}
			</Routes>
		</div>
	);
};

export default AllRoutes;
