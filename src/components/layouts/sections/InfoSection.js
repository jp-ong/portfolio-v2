import styles from "styles/layouts/InfoSection.module.scss";
import Image from "next/image";
import { EnvelopeIcon } from "components/icons/EnvelopeIcon";
import { PhoneIcon } from "components/icons/PhoneIcon";
import { MapMarkerIcon } from "components/icons/MapMarkerIcon";
import { Button } from "components/Button";
import { GitHubIcon } from "components/icons/GitHubIcon";
import { FacebookIcon } from "components/icons/FacebookIcon";
import { LinkedInIcon } from "components/icons/LinkedInIcon";

export const InfoSection = () => {
  const contacts = [
    { icon: <EnvelopeIcon />, label: "jpong5202@gmail.com" },
    { icon: <EnvelopeIcon />, label: "201801383@iacademy.edu.ph" },
    { icon: <PhoneIcon />, label: "639173243289" },
    { icon: <MapMarkerIcon />, label: "Manila City, NCR, Philippines" },
  ];
  const links = [
    [
      {
        icon: <FacebookIcon />,
        label: "Facebook",
        href: "https://www.facebook.com/johnpaul5202/",
        download: false,
        variant: "secondary",
      },
      {
        icon: <GitHubIcon />,
        label: "GitHub",
        href: "https://github.com/jp-ong",
        download: false,
        variant: "secondary",
      },
      {
        icon: <LinkedInIcon />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/johnpaulong/",
        download: false,
        variant: "secondary",
      },
    ],
    [
      {
        label: "Download My Resume",
        href: "/assets/Ong_JohnPaul.pdf",
        download: true,
        variant: "primary",
      },
    ],
  ];
  return (
    <section className={styles.section} id="info">
      <div className={styles.intro}>
        <div className={styles.greeting}>
          <small>Hello, I&apos;m</small>
          <h1>JOHN PAUL ONG</h1>
        </div>
        <div className={styles.image}>
          <div className={styles.container}>
            <Image
              src="/assets/selfie/me.jpg"
              layout="fill"
              objectFit="cover"
              alt="John Paul Ong image"
            />
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <h2>Full Stack JavaScript Developer</h2>
        <div className={styles.contacts}>
          {contacts.map((contact, index) => (
            <div className={styles.contact} key={index}>
              {contact.icon}
              <span>{contact.label}</span>
            </div>
          ))}
        </div>
        <div className={styles.links}>
          {links.map((row, index) => (
            <div className={styles.row} key={index}>
              {row.map((link, index) => (
                <Button {...link} key={index} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
