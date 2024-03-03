/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:svelte/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	// plugins: ['svelte', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	// overrides: [{ files: ['*.svelte'], processor: 'svelte/svelte' }],
	// settings: {
	// 	'svelte/typescript': () => require('typescript')
	// },
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
};
