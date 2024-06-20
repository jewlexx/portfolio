import WindowSize from './window';
import Star from './star';

export class Stars {
	canvas: HTMLCanvasElement;
	stars: Star[];
	shouldStop: boolean = false;

	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;

		const starMax = 756;
		const starMin = 300;
		const starCount = Math.floor(Math.random() * (starMax - starMin + 1)) + starMin;

		this.stars = Array.from(Array(starCount)).map(() => new Star());

		this.beginDrawing.bind(this);
		this.draw.bind(this);
		this.stop.bind(this);
	}

	beginDrawing() {
		const context = this.canvas.getContext('2d');

		if (!context) {
			console.error('Failed to get 2D context for canvas. Stars will not be drawn');
			return;
		}

		// Rebind here to ensure Typescript knows context is not null
		const contextNotNull = context;

		function drawFrame(stars: Stars) {
			if (stars.shouldStop) {
				return;
			}

			// context.clearRect(0, 0, this.canvas.width, this.canvas.height);
			// this.stars.forEach((star) => star.draw(context));
			stars.draw(contextNotNull);
			requestAnimationFrame(() => drawFrame(stars));
		}

		drawFrame(this);
	}

	draw(context: CanvasRenderingContext2D) {
		const windowSize = new WindowSize();

		this.canvas.width = windowSize.width;
		this.canvas.height = windowSize.height;

		context.clearRect(0, 0, windowSize.width, windowSize.height);

		for (const star of this.stars) {
			star.draw(context);
		}
	}

	stop() {
		this.shouldStop = true;
	}
}
