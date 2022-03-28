module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'next/core-web-vitals',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'xo',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
	],
	rules: {
	},
};
