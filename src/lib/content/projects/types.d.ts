export * from './gen.types';

export interface Metadata {
	featured?: boolean;
	title: string;
	description: string;
	emoji?: string;
	pubDate: string;
	repo?: string;
	homepage?: string;
	heroImage?: string;
	profileImage?: string;
	shields?: Shield[];
	toy?: boolean;
	hideHero?: boolean;
	download?: Download;
}

export interface Download {
	src: 'github';
	infoExtractor: RegExp;
	arch: Arch[];
	os: Os[];
}

export interface Shield {
	alt?: string;
	src?: string;
	href?: string;
}

export interface ProjectInfo extends Metadata {
	slug: string;
	content: string;
}
