import React, { useState } from "react";

import HomeContent from "@/components/HomeContent/HomeContent";
import NavBar from "@/components/NavBar/NavBar";
import ProjectContent from "@/components/ProjectContent/ProjectContent";

export default function HomePage({ introduction, project }) {
  const [navH, setNavH] = useState(0);

  return (
    <React.Fragment>
      <NavBar navH={navH} setNavH={setNavH} />
      <HomeContent navH={navH} introduction={introduction.data.attributes} />
      <ProjectContent project={project.data.attributes} />
    </React.Fragment>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const introductionData = await fetch(
    `http://localhost:1337/api/introduction?populate[0]=image&populate[1]=socialMedia&populate[2]=socialMedia.icon&populate[3]=techStacks&populate[4]=techStacks.icon`
  );

  const introduction = await introductionData.json();

  // Fetch data from external API
  const projectData = await fetch(
    `http://localhost:1337/api/project?populate[0]=projectInfo&populate[1]=projectInfo.backgroundImage&populate[2]=projectInfo.projectPhoto&populate[3]=projectInfo.projectPhoto.coverImage`
  );

  const project = await projectData.json();

  // Pass data to the page via props
  return { props: { introduction, project } };
}
