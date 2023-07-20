export default {
	async fetch() {
		await fetch("https://google.com.au/");

		return new Response("Hello, world!");
	},
} satisfies ExportedHandler;
