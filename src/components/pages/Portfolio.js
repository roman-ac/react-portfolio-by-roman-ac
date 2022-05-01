import React from 'react';
import ARK from '../assets/ARK.png'


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
      image: ARK,
      siteLink: 'https://act-of-random-kindness.herokuapp.com/',
      repoLink: 'https://github.com/jcarait/act-of-random-kindness'
    },
  ]
  const Project = ({ projectName, image, siteLink, repoLink }) => {
    
    return (
        <div className="project-card">
          <h3>{projectName}</h3>
            <img className="project-examples" src={image} alt=''/>
            <a className="button" href={siteLink}>Site</a>
            <a className="button" href={repoLink}>Repo</a>
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
