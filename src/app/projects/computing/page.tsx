import type { Metadata } from "next";
import GoNext from "./next";

export const metadata: Metadata = {
  title: "Juliette's Python Homework",
  description: "My Python homework... but in a website!",
};

export default function Index() {
  return (
    <div className="prose flex min-w-screen flex-col items-center justify-center">
      <main className="text-center lg:max-w-[50vw]">
        <h1>Welcome to my Python Homework! 🐍</h1>
        <p>
          This is a little website originally made to walk my high school
          computing teacher through my holiday homework. I&apos;ve adapted it
          into a website to share it with the world, because I&apos;m proud of
          the backend work that went into making this website possible, and
          fast.
        </p>
        <GoNext chapter={7} />
      </main>
    </div>
  );
}
