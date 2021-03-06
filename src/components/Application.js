import React, { Fragment } from "react";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import Status from "./Appointment/Status";
import { getAppointmentsForDay, getInterviewersForDay, getInterview } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";

export default function Application(props) {

	const {
		state,
		setDay,
		bookInterview,
		deleteInterview
	} = useApplicationData();

	const dailyAppointments = getAppointmentsForDay(state, state.day);
	const dailyInterviewers = getInterviewersForDay(state, state.day);

	const parsedAppointments = dailyAppointments.map((appointment) => {
		const interview = getInterview(state, appointment.interview);
    
		return (
			<Appointment 
				key={appointment.id}
				{...appointment} 
				interview={interview}
				interviewers={dailyInterviewers}
				bookInterview={bookInterview}
				cancelInterview={deleteInterview}
			/>
		); 
	});

	return (
		<main className="layout">
			<section className="sidebar">      
				<img
					className="sidebar--centered"
					src="images/logo.png"
					alt="Interview Scheduler"
				/>
				<hr className="sidebar__separator sidebar--centered" />
				<nav className="sidebar__menu">
					<DayList
						days = { state.days }
						day = { state.day }
						onChange = {setDay}
					/>
				</nav>
			</section>
			<section className="schedule">
				{ state.apiResponse === "waiting" && <Status/> }

				{ state.apiResponse === "received" && 
					<Fragment> 
						{parsedAppointments}
						<Appointment time="5pm"/> 
					</Fragment> 
				}
			</section>
		</main>
	);
}
