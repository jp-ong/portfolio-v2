import Link from "next/link";
import styles from "styles/Navbar.module.scss";
import { AddressCardIcon } from "./icons/AddressCardIcon";
import { CodeBranchIcon } from "./icons/CodeBranchIcon";
import { PencilRulerIcon } from "./icons/PencilRulerIcon";
import { UserIcon } from "./icons/UserIcon";

export const Navbar = () => {
  const navlinks = [
    { icon: <AddressCardIcon />, href: "#", label: "Info" },
    { icon: <UserIcon />, href: "#about", label: "About" },
    { icon: <PencilRulerIcon />, href: "#skills", label: "Skills" },
    { icon: <CodeBranchIcon />, href: "#projects", label: "Projects" },
  ];
  return (
    <nav className={styles.nav}>
      {navlinks.map((link, index) => (
        <Link href={link.href} key={index}>
          <a className={styles.link}>
            <div className={styles.icon}>{link.icon}</div>
            <div className={styles.label}>{link.label}</div>
          </a>
        </Link>
      ))}
    </nav>
  );
};
