import React from 'react';
import ARK from '../assets/ARK.png';
import CUC from '../assets/coopedupcooking.png';
import WDB from '../assets/weatherdash.png';
import WDS from '../assets/workdaysch.png';


export default function Portfolio() {

  const projectData = [
    {
      projectName: 'Act of Random Kindness',
      image: ARK,
      siteLink: 'https://act-of-random-kindness.herokuapp.com/',
      repoLink: 'https://github.com/jcarait/act-of-random-kindness'
    },
    {
      projectName: 'Cooped up Cooking',
      image: CUC,
      siteLink: 'https://oliverlkelly.github.io/cooped-up-cooking/',
      repoLink: 'https://github.com/oliverlkelly/cooped-up-cooking'
    },
    {
      projectName: 'Weather Dashboard',
      image: WDB,
      siteLink: 'https://roman-ac.github.io/weather-dashboard-by-roman-ac/',
      repoLink: 'https://github.com/roman-ac/weather-dashboard-by-roman-ac'
    },
    {
      projectName: 'Work Day Scheduler',
      image: WDS,
      siteLink: 'https://roman-ac.github.io/work-day-scheduler-by-roman-ac/',
      repoLink: 'https://github.com/roman-ac/work-day-scheduler-by-roman-ac'
    },
  ]
  const Project = ({ projectName, image, siteLink, repoLink }) => {
    
    return (
        <div className="project-card">
          <h3><a className="project-name" href={siteLink}>{projectName}</a></h3>
            <img className="project-image" src={image} alt=''/>
            <a className="button" href={repoLink}>GitHub</a>
        </div>
      )
};

  return (
    <div className="project-container">      
      <h1>Projects</h1>
      <div className="projects" >
        {projectData.map(({ projectName, image, siteLink, repoLink }) => (
          <Project projectName={projectName} image={image} siteLink={siteLink} repoLink={repoLink} />
        ))}
      </div>
    </div>
  );
}
