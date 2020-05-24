import App from './App.svelte';
import App2 from './App2.svelte';

const app = new App2({
	target: document.body,
});
// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'world'
// 	}
// });

export default app;