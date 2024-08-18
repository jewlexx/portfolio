import Image from "next/image";
import {
  IconBrandTwitter,
  IconBrandTwitch,
  IconBrandGithub,
  IconBrandLinktree,
} from "@tabler/icons-react";

import Shrunk from "$/components/Shrunk";
import HeaderLink from "$/components/HeaderLink";
import IconLink from "$/components/IconLink";
import WomanTechnologist from "$/assets/images/emojis/woman-technologist.svg";

import styles from "./index.module.scss";
import { ProgressBarLink } from "../ProgressBar";

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
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
          <HeaderLink className={styles.link} href="/about">
            <h3>About</h3>
          </HeaderLink>
          <HeaderLink className={styles.link} href="/projects">
            <h3>Projects</h3>
          </HeaderLink>
        </Shrunk>
        <span className={styles.linksContainer}>
          <IconLink
            title="GitHub"
            url="github.com/jewelexx"
            icon={IconBrandGithub}
          />
          <IconLink
            title="Twitch"
            url="twitch.tv/digifem"
            icon={IconBrandTwitch}
          />
          <IconLink
            title="Twitter"
            url="twitter.com/jewelexx"
            icon={IconBrandTwitter}
          />
          <IconLink
            title="Linktree"
            url="linktr.ee/jewelexx"
            icon={IconBrandLinktree}
          />
        </span>
      </nav>
    </header>
  );
}
