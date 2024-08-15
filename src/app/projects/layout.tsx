import Footer from "$/components/Footer";

import "$/styles/project.layout.scss";

export default function ProjectLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main>{children}</main>
    </section>
  );
}
