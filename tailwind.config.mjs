/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				mainColor : '#C10961',
				transpBg : 'rgba(255,255,255, .16)',
				whiteVariationText: '#F3C9C9',
				whiteVariationBg: '#FEF6F3',
				textGray: '#646162',
				bgLightGray: '#F3F3F3',
				darkColor: '#101010'
			},
			classes: {
				'answer': 'opacity-0 max-h-0 overflow-hidden 0.3s ease',
				'block-opacity': 'opacity-100 max-h-full',
			},
		},
	},
	plugins: [],
}
