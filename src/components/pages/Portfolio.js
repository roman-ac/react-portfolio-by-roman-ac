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
      repoLink: 'https://github.com/jcarait/act-of-random-kindness',
      description:'We believe the need to provide users with a platform to connect to their community and offer to help out, and share their skills. We also believe that users with difficult financial situations should still be able to seek help.'
    },
    {
      projectName: 'Cooped up Cooking',
      image: CUC,
      siteLink: 'https://oliverlkelly.github.io/cooped-up-cooking/',
      repoLink: 'https://github.com/oliverlkelly/cooped-up-cooking',
      description:'This project can be used as a website. There are other components of the site that can be used for reference, such as the methods and logic used to obtain and present the recipes to the user and the way recipes are stored and manipulated.'
    },
    {
      projectName: 'Weather Dashboard',
      image: WDB,
      siteLink: 'https://roman-ac.github.io/weather-dashboard-by-roman-ac/',
      repoLink: 'https://github.com/roman-ac/weather-dashboard-by-roman-ac',
      description:'A weather dashboard so that user can see the weather outlook for diferent cities and plan the travel accordingly'
    },
    {
      projectName: 'Work Day Scheduler',
      image: WDS,
      siteLink: 'https://roman-ac.github.io/work-day-scheduler-by-roman-ac/',
      repoLink: 'https://github.com/roman-ac/work-day-scheduler-by-roman-ac',
      description:'A work day scheduler to incorporate and list busy schedule of working day'
    },
  ]
  const Project = ({ projectName, image, siteLink, repoLink,description }) => {
    
    return (
        <div className="project-card">
            <div className="project-head">
                <h3><button className="button"><a className='project-name btn btn-warning' target="blank" 
                  href={siteLink}>{projectName}</a></button></h3>
                <button className="button"><a className='btn btn-dark' href={repoLink} target="blank">GitHub</a></button>
                </div>
            <img className="project-image" src={image} alt='screenshot'/>
            <p className='description'>{description}</p>
        </div> 
      )
};

  return (
    <div className="project-container">      
      <h1 style={{textAlign: "center"}}>My Projects</h1>
      <div className="projects" >
        {projectData.map(({ projectName, image, siteLink, repoLink, description }) => (
          <Project projectName={projectName} image={image} siteLink={siteLink} repoLink={repoLink} description={description} />
        ))}
      </div>
    </div>
  );
}
