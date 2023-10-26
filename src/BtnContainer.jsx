import React from "react";

const BtnContainer = ({ jobs, currentTab, setCurrentTab }) => {
	return (
		<div className='btn-container'>
			{jobs.map((item, index) => {
				return (
					<button
						key={item.id}
						onClick={() => setCurrentTab(index)}
						className={
							currentTab === item.id ? "job-btn active-btn" : "job-btn"
						}>
						{item.company}
					</button>
				);
			})}
		</div>
	);
};

export default BtnContainer;
