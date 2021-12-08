import styles from "styles/layouts/SkillsSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

export const SkillsSection = ({ skills }) => {
  return (
    <section className={styles.section} id="skills">
      <h2>Technical Skills</h2>
      <div className={styles.skills}>
        {skills?.map((skill) => (
          <Link href={skill.link} key={skill._id}>
            <a className={styles.skill}>
              <div className={styles.icon}>
                <div className={styles.container}>
                  <Image
                    src={skill.image}
                    layout="fill"
                    objectFit="contain"
                    alt={skill.label}
                  />
                </div>
              </div>
              <div className={styles.label}>{skill.label}</div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

SkillsSection.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        _id: PropTypes.string,
        position: PropTypes.string,
        image: PropTypes.string,
        label: PropTypes.string,
        link: PropTypes.string,
      })
    )
  ),
};
