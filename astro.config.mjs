// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Kitten English',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: '基础',
					autogenerate: { directory: 'basic' },
				},
				{
					label: '语法专题',
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
