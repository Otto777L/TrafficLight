import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");	

	const changeColor = () => {
		if (color == "") {
			setColor("red");
		} else if (color == "red") {
			setColor("yellow");
		} else if (color == "yellow") {
			setColor("green");
		} else if (color == "green") {
			setColor("red");
		}
	};

	return (
		<div className="d-flex flex-column align-items-center">
			<div className="base ">
				
			</div>
			<div className="box d-flex flex-column align-items-center" >
					<div onClick={()=>{setColor("red")}} className={`light m-3 red ${color=="red" ? "selected" : ""}`}></div>
					<div onClick={()=>{setColor("yellow")}} className={`light m-3 yellow ${color=="yellow" ? "selected" : ""}`}></div>
					<div onClick={()=>{setColor("green")}} className={`light m-3 green ${color=="green" ? "selected" : ""}`}></div>
					<div onClick={()=>{setColor("purple")}} className={`light m-3 purple ${color=="purple" ? "selected" : ""}`}></div>
			</div>
			<div className="mt-3">
				<button className="btn btn-primary" onClick={()=>{changeColor()}}>Change Color</button>
				<button className="btn btn-secondary ms-3" onClick={()=>{showPurple()}}>Add purple Color</button>
			</div>
		</div>
	);
};

export default Home;
