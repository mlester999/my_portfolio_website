import React, { useState } from "react";

import HomeContent from "@/components/HomeContent/HomeContent";
import NavBar from "@/components/NavBar/NavBar";
import ProjectContent from "@/components/ProjectContent/ProjectContent";
import SkillsContent from "@/components/SkillsContent/SkillsContent";
import ContactContent from "@/components/ContactContent/ContactContent";
import CopyrightContent from "@/components/CopyrightContent/CopyrightContent";

export default function HomePage({
  baseUrl,
  introduction,
  project,
  skills,
  tools,
}) {
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
      <SkillsContent
        baseUrl={baseUrl}
        skills={skills.data.attributes}
        introduction={introduction.data.attributes}
        tools={tools.data}
      />
      <ContactContent />
      <CopyrightContent
        baseUrl={baseUrl}
        introduction={introduction.data.attributes}
      />
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
    `${baseUrl}/api/project?populate[0]=portfolios&populate[1]=portfolios.backgroundImage&populate[2]=portfolios.projectPhoto&populate[3]=portfolios.projectPhoto.coverImage`
  );

  const project = await projectData.json();

  // Fetch data from external API
  const skillsData = await fetch(`${baseUrl}/api/skill`);

  const skills = await skillsData.json();

  // Fetch data from external API
  const toolsData = await fetch(`${baseUrl}/api/tools?populate[0]=icon`);

  const tools = await toolsData.json();

  // Pass data to the page via props
  return { props: { baseUrl, introduction, project, skills, tools } };
}
