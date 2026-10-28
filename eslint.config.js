import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default [
	{
		ignores: ['build/', 'dist/', '.svelte-kit/', 'node_modules/', 'static/']
	},
	js.configs.recommended,
	...svelte.configs['flat/recommended'],
	{
		files: ['**/*.{js,mjs,cjs,svelte}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	prettier
];
