import React from "react";
import AboutMe from "./components/about-me";
import { aboutMe, skills, professionalData } from "../data/data";
import ProfessionalExperience from "./components/professional-experience";

const Page: React.FC = () => {
	return (
		<div>
			<AboutMe data={aboutMe} skills={skills} />
			{/* <ProfessionalExperience data={professionalData} /> */}
		</div>
	);
}; 

export default Page;