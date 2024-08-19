import Footer from "$/components/Footer";

import "$/styles/project.layout.scss";

import styles from "./layout.module.scss";

export default function ProjectLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return children;
}
