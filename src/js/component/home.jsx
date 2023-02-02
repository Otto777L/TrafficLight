import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	return (
		<div className="d-flex flex-column align-items-center">
			<div className="base ">
				
			</div>
			<div className="box d-flex flex-column align-items-center" >
					<div onClick={()=>{setColor("red")}} className={`light m-3 red ${color=="red" ? "selected" : ""}`}></div>
					<div onClick={()=>{setColor("yellow")}} className={`light m-3 yellow ${color=="yellow" ? "selected" : ""}`}></div>
					<div onClick={()=>{setColor("green")}} className={`light m-3 green ${color=="green" ? "selected" : ""}`}></div>
			</div>
		</div>
	);
};

export default Home;
