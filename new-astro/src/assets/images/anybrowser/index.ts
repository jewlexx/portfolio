import { StaticImageData } from "next/image";
import girlGif from "./girlanim.gif";
import lesbianFlagImage from "./lesbian.png";

export interface AnyBrowserImages {
  data: StaticImageData;
  alt: string;
  title: string;
}

/**
 * @description Best viewed by a girl gif
 */
export const girl: AnyBrowserImages = {
  data: girlGif,
  alt: "Best viewed by a girl",
  title: "Courtesy of Samantha Alyssa",
};

/**
 * @description Lesbian pride flag
 *
 */
export const lesbianFlag: AnyBrowserImages = {
  data: lesbianFlagImage,
  alt: "Lesbian pride flag",
  title: "Lesbian pride flag",
};
