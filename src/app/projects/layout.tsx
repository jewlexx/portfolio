import { IconBrandGit, IconLink as LinkIcon } from "@tabler/icons-react";
import Header from "$/components/Header";
import Footer from "$/components/Footer";
import Shield from "$/components/Shield";
import PubDate from "$/components/PubDate";
import IconLink from "$/components/IconLink";

import styles from "./layout.module.scss";
import "./projects.scss";

export default function ProjectLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
