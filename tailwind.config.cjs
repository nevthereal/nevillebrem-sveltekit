const { join } = require('path');
const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const twPlugin = require('@skeletonlabs/tw-plugin');
const { abyss } = require('./src/abyss.ts');

const skeleton = twPlugin.skeleton ?? twPlugin;

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [abyss]
			}
		})
	]
};
