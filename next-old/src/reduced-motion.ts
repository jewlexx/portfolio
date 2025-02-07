// TODO: Implement this
// import { readable } from 'svelte/store';
// import { browser } from '$app/environment';

// const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

// const getInitialMotionPreference = () => {
// 	if (!browser) return false;
// 	return window.matchMedia(reducedMotionQuery).matches;
// };

// export const reducedMotion = readable(getInitialMotionPreference(), (set) => {
// 	if (browser) {
// 		const set_reduced_motion = (event: MediaQueryListEvent) => {
// 			set(event.matches);
// 		};
// 		const media_query_list = window.matchMedia(reducedMotionQuery);
// 		media_query_list.addEventListener('change', set_reduced_motion);

// 		return () => {
// 			media_query_list.removeEventListener('change', set_reduced_motion);
// 		};
// 	}
// });
