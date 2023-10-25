import { graphics } from '../assets/images/anybrowser';

export const prerender = false;

export async function GET() {
	const index = Math.random() * graphics.length;
	const graphic = graphics[index];

	return new Response(JSON.stringify(graphic));
}
