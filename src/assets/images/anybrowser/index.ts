import type { ImageMetadata } from 'astro';

import anybrowser4b from './anybrowser4b.png';
import gveye_anim from './bveye-anim.gif';
import girlanim from './girlanim.gif';
import green from './green.gif';
import ne_browser from './ne_browser.gif';
import oeyes_anim from './oeyes-anim.gif';

export interface Author {
	name: string;
	url?: string;
}

export interface Graphic {
	author: Author;
	data: ImageMetadata;
}

export const graphics: Graphic[] = [
	{
		data: anybrowser4b,
		author: {
			name: 'Jim Spath',
			url: 'http://www.bcpl.lib.md.us/~jspath/homeslice.html'
		}
	},
	{
		data: gveye_anim,
		author: {
			name: 'APz'
		}
	},
	{
		data: girlanim,
		author: {
			name: 'Samantha Alyssa'
		}
	},
	{
		data: green,
		author: {
			name: 'Carmen Principe',
			url: 'http://www.geocities.com/new_in_psp/'
		}
	},
	{
		data: ne_browser,
		author: {
			name: 'Matt Grimshaw'
		}
	},
	{
		data: oeyes_anim,
		author: {
			name: 'Darren S. Gonzales'
		}
	}
];
