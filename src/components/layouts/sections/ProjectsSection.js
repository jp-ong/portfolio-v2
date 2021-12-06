import styles from "styles/layouts/ProjectsSection.module.scss";
import Image from "next/image";
import Link from "next/link";

export const ProjectsSection = () => {
  const webapps = [
    {
      repo: "c19statistics",
      title: "COVID-19 Statistics Server-Side Rendering w/ Next.js",
      description:
        "Server-side rendering website powered by Next.js. This website utilizes Material UI for css and theming. Source of data is JHU COVID19 MongoDB Atlas and uses the library Mongoose.js for interacting with the database.",
    },
    {
      repo: "covid-stats-global",
      title: "COVID19 Statistics Client-Side Rendering w/ React.js",
      description:
        "Made with MERN stack - MongoDB, Express, React, Node. The website shows COVID19 statistics such as total confirmed number of cases, number of recoveries from each country, and etc. Front-end fetches the data from its back-end via REST API which is connected to JHU COVID19 MongoDB Atlas.",
    },
    {
      repo: "my-portfolio",
      title: "My Personal Portfolio v1",
      description: "My first personal portfolio powered powered by NextJS.",
    },
    {
      repo: "override-syntax",
      title: "Override - e-Commerce Storefront System using Syntax Subsystems",
      description:
        "An e-commerce system that utilizes the MERN stack. This subsystem serves as the storefront for an e-commerce system. Front-end is using React paired with Redux for state management, and back-end is connected to an external server, where other subsystems can connect to, which is then connected to my MongoDB Atlas.",
    },
    {
      repo: "syntax-api-server",
      title: "Syntax - External API Server for Override Subsystems",
      description:
        "The external API server where e-commerce subsystems are all connected to. It features token-based authentication, encryption of credentials, CRUD operations, proper HTTP codes, and is using a MongoDB Atlas as its database.",
    },
    {
      repo: "syntax-inventory",
      title: "Syntax - Inventory System for Override Storefront",
      description:
        "A simple inventory management system that uses plain HTML, CSS, and JavaScript. This system serves exclusively as a subsystem to the e-commerce system. Data is fetch from an external server, where other subsytems are connected to, which is then connected to my MongoDB Atlas.",
    },
  ];
  return (
    <section className={styles.section} id="projects">
      <h2>Projects</h2>
      <div className={styles.projects}>
        <h3>Web Applications</h3>
        {webapps.map((webapp, index) => (
          <div className={styles.project} key={index}>
            <Link href={`https://github.com/jp-ong/${webapp.repo}`}>
              <a target="_blank" rel="noopener noreferrer">
                <div className={styles.image}>
                  <Image
                    src={`/assets/projects/webapps/${webapp.repo}.jpg`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    alt={webapp.title}
                  />
                </div>
              </a>
            </Link>
            <div className={styles.info}>
              <h4>
                <Link href={`https://github.com/jp-ong/${webapp.repo}`}>
                  <a target="_blank" rel="noopener noreferrer">
                    {webapp.title}
                  </a>
                </Link>
              </h4>
              <p>{webapp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
