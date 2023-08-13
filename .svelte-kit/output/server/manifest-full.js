export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","robots.txt"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.5fc6fe55.js","app":"_app/immutable/entry/app.7fd06ed6.js","imports":["_app/immutable/entry/start.5fc6fe55.js","_app/immutable/chunks/scheduler.d2620c22.js","_app/immutable/chunks/singletons.09a9ac2b.js","_app/immutable/entry/app.7fd06ed6.js","_app/immutable/chunks/scheduler.d2620c22.js","_app/immutable/chunks/index.699a8f3d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
