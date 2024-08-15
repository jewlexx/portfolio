import Footer from "$/components/Footer";

import "./layout.styles.scss";

export default function ProjectLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main>{children}</main>
      <Footer />
    </section>
  );
}
