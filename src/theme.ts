type Keyof<T> = T[keyof T];

export type Theme = Keyof<typeof knownTheme>;

export const knownTheme = {
  dark: "romeo",
  light: "juliette",
} as const;

export const themeList = [knownTheme.dark, knownTheme.light] as const;
