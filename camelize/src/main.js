import App from './App.svelte';
 import Camelize from "./Camelize.svelte";
export default Camelize;

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;