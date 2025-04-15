import React from 'react';

// Función para mapear la tecnología al ícono de Devicon
const getDeviconClass = (tech) => {
  // Convertir a minúsculas para facilitar comparaciones
  const techLower = tech.toLowerCase();
  switch (techLower) {
    case "react":
      return "devicon-react-original colored";
    case "bootstrap":
      return "devicon-bootstrap-plain colored";
    case "html":
      return "devicon-html5-plain colored";
    case "css":
      return "devicon-css3-plain colored";
    case "javascript":
      return "devicon-javascript-plain colored";
    case "node.js":
    case "nodejs":
      return "devicon-nodejs-plain colored";
    case "express":
      return "devicon-express-original";
    case "mongodb":
      return "devicon-mongodb-plain colored";
    case "python":
      return "devicon-python-plain colored";
    case "flask":
      return "devicon-flask-original colored";
    case "sqlalchemy":
      return "devicon-sqlalchemy-plain colored";
    case "tailwind css":
      return "devicon-tailwindcss-plain colored";
    case "sqlite":
      return "devicon-sqlite-plain colored";
    case "google authentication":
      return "devicon-google-plain colored";
    case "vite":
      return "devicon-vitejs-plain colored"; 
    case "json":
      return "devicon-json-plain colored"; 
    case "devicon":
      return "devicon-devicon-plain colored";
    case "git":
      return "devicon-git-plain colored";
    default:
      return "devicon-devicon-plain";
  }
  
};

function Projects({ projectsData }) {
  return (
    <section className="container">
      <h2>{projectsData.title}</h2>
      <div className="projects-list">
        {projectsData.list.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              {/* Pills para las tecnologías */}
              <div className="tech-pills">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-pill">
                    {/* Ícono de Devicon para la tecnología */}
                    <i className={getDeviconClass(tech)} style={{ marginRight: "0.3rem" }}></i>
                    {tech}
                  </span>
                ))}
              </div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
