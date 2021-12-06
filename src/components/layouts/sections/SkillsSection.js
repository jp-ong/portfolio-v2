import styles from "styles/layouts/SkillsSection.module.scss";
import Image from "next/image";
import Link from "next/link";

export const SkillsSection = () => {
  const skills = [
    { icon: "html-5", label: "HTML5", href: "http://www.w3.org/TR/html5/" },
    { icon: "css-3", label: "CSS3", href: "http://www.w3.org/TR/CSS/" },
    {
      icon: "javascript",
      label: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { icon: "sass", label: "Sass", href: "http://sass-lang.com/" },
    { icon: "nodejs", label: "NodeJS", href: "https://nodejs.org/" },
    { icon: "express", label: "ExpressJS", href: "http://expressjs.com/" },
    {
      icon: "react",
      label: "ReactJS",
      href: "https://facebook.github.io/react/",
    },
    { icon: "nextjs", label: "NextJS", href: "https://zeit.co/next" },
    { icon: "redux", label: "ReduxJS", href: "http://redux.js.org/" },
    { icon: "mongodb", label: "MongoDB", href: "https://www.mongodb.org/" },
    {
      icon: "postgresql",
      label: "PostgreSQL",
      href: "http://www.postgresql.org/",
    },
    { icon: "git", label: "Git", href: "https://git-scm.com/" },
    { icon: "github", label: "GitHub", href: "https://github.com/" },
    { icon: "figma", label: "Figma", href: "https://www.figma.com/" },
    { icon: "php", label: "PHP", href: "http://php.net/" },
    { icon: "java", label: "Java", href: "https://www.java.com/" },
    { icon: "python", label: "Python", href: "https://www.python.org/" },
  ];
  return (
    <section className={styles.section} id="skills">
      <h2>Technical Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <Link href={skill.href} key={index}>
            <a className={styles.skill}>
              <div className={styles.icon} key={index}>
                <div className={styles.container}>
                  <Image
                    src={`/assets/skills/${skill.icon}.svg`}
                    layout="fill"
                    objectFit="contain"
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
