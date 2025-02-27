import { cookies } from "next/headers";
import Image from "next/image";

import WomanTechnologist from "$/assets/images/emojis/woman-technologist.svg";
import HeaderLink from "$/components/HeaderLink";
import IconLink from "$/components/IconLink";
import { ProgressBarLink } from "$/components/ProgressBar";
import Shrunk from "$/components/Shrunk";
import { linksAbridged } from "$/links";

import ThemeToggle from "$/components/ThemeToggle";
import { knownTheme } from "$/theme";
import styles from "./index.module.scss";

export default async function Header() {
  const cookieStore = await cookies();

  return (
    <nav className={styles.nav} role="navigation">
      <span className={styles.titleImage}>
        <ProgressBarLink className={styles.logolink} href="/" rel="prefetch">
          <Image src={WomanTechnologist} alt="Juliette Cordor" />
        </ProgressBarLink>
      </span>
      {/* TODO: Add headerlinks on mobile screens */}
      <Shrunk hide="portrait">
        <HeaderLink className={styles.link} href="/projects">
          <h3>Projects</h3>
        </HeaderLink>
        <HeaderLink className={styles.link} href="/blog">
          <h3>Blog</h3>
        </HeaderLink>
      </Shrunk>
      <span className={styles.linksContainer}>
        {linksAbridged.map((linkProps) => (
          <IconLink key={linkProps.title} {...linkProps} />
        ))}
        <ThemeToggle
          defaultTheme={cookieStore.get("theme")?.value ?? knownTheme.light}
        />
      </span>
    </nav>
  );
}
