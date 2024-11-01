import Image from "next/image";

import Shrunk from "$/components/Shrunk";
import HeaderLink from "$/components/HeaderLink";
import IconLink from "$/components/IconLink";
import { ProgressBarLink } from "$/components/ProgressBar";
import WomanTechnologist from "$/assets/images/emojis/woman-technologist.svg";
import { linksAbridged } from "$/links";

import styles from "./index.module.scss";

interface Props {
  title: string;
}

interface ButtonStyle extends React.CSSProperties {
  "--button-color": string;
}

export default function Header({ title }: Props) {
  return (
    <nav className={styles.nav} role="navigation">
      <span className={styles.titleImage}>
        <ProgressBarLink className={styles.logolink} href="/" rel="prefetch">
          <Image src={WomanTechnologist} alt="Juliette Cordor" />
        </ProgressBarLink>
        <h2>
          <Shrunk long={title} />
        </h2>
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
          <IconLink
            key={linkProps.title}
            {...linkProps}
            style={{ "--button-color": linkProps.color } as ButtonStyle}
          />
        ))}
      </span>
    </nav>
  );
}
