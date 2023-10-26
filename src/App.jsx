import React, { useEffect, useState } from "react";
import Jobinfo from "./Jobinfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [currentTab, setCurrentTab] = useState(0);

	const fetchJobs = async () => {
		const response = await fetch(url);
		const newJobs = await response.json();
		// console.log(newJobs);
		setJobs(newJobs);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	if (isLoading) {
		return (
			<section className='jobs-center'>
				<div className='loading'></div>
			</section>
		);
	}
	return (
		<section className='jobs-center'>
			<BtnContainer
				jobs={jobs}
				currentTab={currentTab}
				setCurrentTab={setCurrentTab}
			/>
			<Jobinfo jobs={jobs} currentTab={currentTab} />
		</section>
	);
};

export default App;
