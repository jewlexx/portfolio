import { PreprocessorGroup } from 'svelte/types/compiler/preprocess';

export interface Options {
	/** optimize all images discovered in img tags */
	optimizeAll: boolean;

	/**
	 *  Case insensitive. Only files whose extension exist in this array will be
	 *  processed by the <img> tag (assuming `optimizeAll` above is true). Empty
	 *  the array to allow all extensions to be processed. However, only jpegs and
	 *  pngs are explicitly supported.
	 */
	imgTagExtensions: string[];

	/**
	 * Same as the above, except that this array applies to the Image Component.
	 * If the images passed to your image component are unknown, it might be a
	 * good idea to populate this array.
	 */
	componentExtensions: string[];

	inlineBelow: number; // inline all images in img tags below 10kb

	compressionLevel: number; // png quality level

	quality: number; // jpeg/webp quality level

	tagName: string; // default component name

	sizes: number[]; // array of sizes for srcset in pixels

	breakpoints: number[]; // array of screen size breakpoints at which sizes above will be applied

	outputDir: string;

	publicDir: string;

	/**
	 * the placeholder to show
	 */
	placeholder: 'trace' | 'blur' | 'blurhash';

	placeholderSize: number;

	/** WebP options [sharp docs](https://sharp.pixelplumbing.com/en/stable/api-output/#webp) */
	webpOptions: WebpOptions;

	webp: boolean;

	/** Potrace options for SVG placeholder */
	trace: Trace;

	/** Wheter to download and optimize remote images loaded from a url */
	optimizeRemote: boolean;

	/**
	 *
	 *  Declared image folder processing
	 *
	 *  The options below are only useful if you'd like to process entire folders
	 *  of images, regardless of whether or not they appear in any templates in
	 *  your application (in addition to all the images that are found at build
	 *  time). This is useful if you build dynamic strings to reference images you
	 *  know should exist, but that cannot be determined at build time.
	 *
	 *  Relative paths (starting from `/static`) of folders you'd like to process
	 *  from top to bottom. This is a recursive operation, so all images that match
	 *  the `processFoldersExtensions` array will be processed. For example, an
	 *  array ['folder-a', 'folder-b'] will process all images in
	 *  `<publicDir>/folder-a/` and `<publicDir>/folder-b`.
	 */
	processFolders: string[];

	/**
	 *  When true, the folders in the options above will have all subfolders
	 *  processed recursively as well.
	 */
	processFoldersRecursively: boolean;

	/**
	 *  Only files with these extensions will ever be processed when invoking
	 *  `processFolders` above.
	 */
	processFoldersExtensions: string[];

	/**
	 *  Add image sizes to this array to create different asset sizes for any image
	 *  that is processed using `processFolders`
	 */
	processFoldersSizes: boolean;
}

export interface Trace {
	background: string;
	color: string;
	threshold: number;
}

export interface WebpOptions {
	quality: number;
	lossless: boolean;
	force: boolean;
}

export function getPreprocessor(opts: Options): PreprocessorGroup;
