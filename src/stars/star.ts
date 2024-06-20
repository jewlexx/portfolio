import WindowSize from './window';

export default class Star {
	x: number;
	y: number;
	length: number;
	opacity: number;
	factor: number;
	increment: number;

	constructor() {
		this.x = Math.random() * window.innerWidth;
		this.y = Math.random() * window.innerHeight;
		this.length = Math.random() * 1.5 + 1;
		this.opacity = Math.random();
		this.factor = 1.0;
		this.increment = Math.random() * 0.01;
	}

	draw(context: CanvasRenderingContext2D) {
		const windowSize = new WindowSize();

		context.rotate(Math.PI / 10.0);
		context.save();
		context.translate(this.x, this.y);

		if (this.opacity > 1.0) {
			this.factor = -1.0;
		} else if (this.opacity <= 0.0) {
			this.factor = 1.0;

			this.x = Math.random() * windowSize.width;
			this.y = Math.random() * windowSize.height;
		}

		this.opacity += this.increment * this.factor;

		context.beginPath();

		// Draw the 5 points of the star
		for (let i = 0; i < 5; i++) {
			context.lineTo(0, this.length);
			context.translate(0, this.length);
			context.rotate((Math.PI * 2.0) / 10.0);
			context.lineTo(0, -this.length);
			context.translate(0, -this.length);
			context.rotate(-((Math.PI * 6.0) / 10.0));
		}

		context.lineTo(0, this.length);
		context.closePath();
		context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
		context.shadowBlur = 5;
		context.shadowColor = '#fff';
		context.fill();
		context.restore();
	}
}
