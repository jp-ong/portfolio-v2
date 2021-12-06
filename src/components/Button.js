import Link from "next/link";
import styles from "styles/Button.module.scss";

export const Button = ({ icon, label, href, download, variant }) => {
  return (
    <Link href={href}>
      <a
        className={`${styles.btn} ${styles[variant]}`}
        download={download}
        rel="noopener noreferrer"
        target="_blank"
      >
        {icon}
        <span>{label}</span>
      </a>
    </Link>
  );
};
