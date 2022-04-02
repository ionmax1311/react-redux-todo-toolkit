import React, { useEffect, useState } from "react";
import "../alert/alert.css";

export const Alert = ({ show, setShowAlert, alerts }) => {
	//   const alerts = useSelector((state) => state.alert.alerts);
	const [alert, setAlert] = useState({ type: "", message: "" });
	//   const [show, setShow] = useState(false);
	// console.log("alerts", alerts);
	// console.log("show", show);
	useEffect(() => {
		if (alerts.length > 0) {
			setAlert(alerts[alerts.length - 1]);
			//   setShow(true);
			// setTimeout(() => {
			//   setShow(false);
			// }, 3000);
		}
	}, [alerts]);

	const onClose = () => {
		setShowAlert(false);
	};

	const color = alert.type === "success" ? "teal" : "darkred";

	return show ? (
		<div className='alert'>
			{/* <div className={`${alert.type || "error"}`}> */}
			<div className={`${alert.type}`}>
				<div>
					<div className='alert-message'>{alert.message || ""}</div>
				</div>

				<i onClick={onClose} className='material-icons close-alert'>
					close
				</i>
			</div>
		</div>
	) : null;
};
