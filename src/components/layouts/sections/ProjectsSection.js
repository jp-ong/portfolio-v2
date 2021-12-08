import styles from "styles/layouts/ProjectsSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

export const ProjectsSection = ({ applications }) => {
  return (
    <section className={styles.section} id="projects">
      <h2>Projects</h2>
      <div className={styles.projects}>
        <h3>Web Applications</h3>
        {applications?.map((app) => (
          <div className={styles.project} key={app._id}>
            <Link href={app.link}>
              <a target="_blank" rel="noopener noreferrer">
                <div className={styles.image}>
                  <Image
                    src={app.image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    alt={app.title}
                  />
                </div>
              </a>
            </Link>
            <div className={styles.info}>
              <h4>
                <Link href={app.link}>
                  <a target="_blank" rel="noopener noreferrer">
                    {app.title}
                  </a>
                </Link>
              </h4>
              <p>{app.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

ProjectsSection.propTypes = {
  applications: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        _id: PropTypes.string,
        position: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string,
        image: PropTypes.string,
      })
    )
  ),
};
