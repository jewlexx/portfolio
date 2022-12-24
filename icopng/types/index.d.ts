export interface AverageColour {
    colourHex: string;
    isLight: boolean;
}

export function convertUrl(url: string): AverageColour;