const { defineConfig, globalIgnores } = require('eslint/config')

const svelte = require('eslint-plugin-svelte')
const globals = require('globals')
const js = require('@eslint/js')

const { FlatCompat } = require('@eslint/eslintrc')

const svelteConfig = require('./svelte.config.js')

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
})

module.exports = defineConfig([
	...svelte.configs.recommended,
	{
		extends: compat.extends('eslint:recommended', 'prettier'),

		languageOptions: {
			sourceType: 'module',
			ecmaVersion: 2020,
			parserOptions: {},

			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				svelteConfig
			}
		}
	},
	globalIgnores(['**/.DS_Store', '**/node_modules', 'build', '.svelte-kit', 'package', '**/.env', '**/.env.*', '!**/.env.example', '**/pnpm-lock.yaml', '**/package-lock.json', '**/yarn.lock'])
])
