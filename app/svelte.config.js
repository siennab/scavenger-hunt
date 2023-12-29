import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				return;
			}
		},
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: '../docs',
			assets: '../docs',
			fallback: undefined,
			precompress: false,
		}),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/scavenger-hunt" : "",
		},
	}
};