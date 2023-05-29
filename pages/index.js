import React, { useState } from "react";

import HomeContent from "@/components/HomeContent/HomeContent";
import NavBar from "@/components/NavBar/NavBar";
import ProjectContent from "@/components/ProjectContent/ProjectContent";

export default function HomePage({ baseUrl, introduction, project }) {
  const [navH, setNavH] = useState(0);

  return (
    <React.Fragment>
      <NavBar baseUrl={baseUrl} navH={navH} setNavH={setNavH} />
      <HomeContent
        baseUrl={baseUrl}
        navH={navH}
        introduction={introduction.data.attributes}
      />
      <ProjectContent baseUrl={baseUrl} project={project.data.attributes} />
    </React.Fragment>
  );
}

export async function getServerSideProps() {
  const baseUrl = "https://api-mlta.tech";

  // Fetch data from external API
  const introductionData = await fetch(
    `${baseUrl}/api/introduction?populate[0]=image&populate[1]=socialMedia&populate[2]=socialMedia.icon&populate[3]=techStacks&populate[4]=techStacks.icon`
  );

  const introduction = await introductionData.json();

  // Fetch data from external API
  const projectData = await fetch(
    `${baseUrl}/api/project?populate[0]=projectInfo&populate[1]=projectInfo.backgroundImage&populate[2]=projectInfo.projectPhoto&populate[3]=projectInfo.projectPhoto.coverImage`
  );

  const project = await projectData.json();

  // Pass data to the page via props
  return { props: { baseUrl, introduction, project } };
}
