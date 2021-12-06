import Image from "next/image";
import styles from "styles/layouts/AboutSection.module.scss";

export const AboutSection = () => {
  const lines = [
    "I'm a developer from Metro Manila, Philippines. I enjoy taking on complex designs and visualized concepts and implementing them into simple and beautiful systems for production. I love challenging the obstacles I face, while doing it in the most elegant and efficient way I am capable of.",
    "I am most confident in my ability to work with JavaScript and its ecosystem, but I am also capable of quickly learning new languages, frameworks, and libraries if necessary.",
    "When I'm not programming, I'll usually be gaming, or occassionally be working out in the gym.",
  ];
  return (
    <section className={styles.section} id="about">
      <h2>About Me</h2>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src="/assets/selfie/mebutsmiling.jpg"
            layout="fill"
            objectFit="cover"
            alt="John Paul Ong smiling image"
          />
        </div>
        <div className={styles.lines}>
          {lines.map((line, index) => (
            <p className={styles.line} key={index}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
