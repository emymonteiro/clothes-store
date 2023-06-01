export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.30445aee.js","app":"_app/immutable/entry/app.c7648c1f.js","imports":["_app/immutable/entry/start.30445aee.js","_app/immutable/chunks/index.ba2bb275.js","_app/immutable/chunks/singletons.a0aae8b8.js","_app/immutable/entry/app.c7648c1f.js","_app/immutable/chunks/index.ba2bb275.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
