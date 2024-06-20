export default class WindowSize {
	public width: number;
	public height: number;

	constructor() {
		const { innerWidth, innerHeight } = window;

		this.width = innerWidth;
		this.height = innerHeight;
	}
}
