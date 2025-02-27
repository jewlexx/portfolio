import { cookies } from "next/headers";
import Image from "next/image";

import WomanTechnologist from "$/assets/images/emojis/woman-technologist.svg";
import HeaderLink from "$/components/HeaderLink";
import IconLink from "$/components/IconLink";
import { ProgressBarLink } from "$/components/ProgressBar";
import Shrunk from "$/components/Shrunk";
import ThemeToggle from "$/components/ThemeToggle";
import { linksAbridged } from "$/links";
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
        <HeaderLink href="/projects" className="link link-hover">
          <h3 className="text-xl font-bold">Projects</h3>
        </HeaderLink>
        <HeaderLink href="/blog" className="link link-hover">
          <h3 className="text-xl font-bold">Blog</h3>
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
