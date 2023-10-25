import { type APIRoute } from 'astro';
const images = import.meta.glob('../assets/images/anybrowser/*');
// import { graphics } from '../assets/images';

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
	const graphics = Object.values(images);
	const index = Math.floor(Math.random() * graphics.length);
	const { default: graphic } = await (graphics[index] as any)();
	const image = graphic as typeof import('../assets/images/anybrowser/anybrowser4b.png').default;

	return new Response(JSON.stringify(image));
};
