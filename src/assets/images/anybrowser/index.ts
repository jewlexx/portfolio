import { StaticImageData } from "next/image";
import girlGif from "./girlanim.gif";

export interface AnyBrowserImages {
  data: StaticImageData;
  alt: string;
  title: string;
}

/**
 * @description Best viewed by a girl gif
 */
const girl: AnyBrowserImages = {
  data: girlGif,
  alt: "Best viewed by a girl",
  title: "Courtesy of Samantha Alyssa",
};

export { girl };
