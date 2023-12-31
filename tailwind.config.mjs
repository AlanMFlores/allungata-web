/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				mainColor : '#C10961',
				transpBg : 'rgba(255,255,255, .16)',
				transpBlackBg : 'rgba(0,0,0, .64)',
				whiteVariationText: '#F3C9C9',
				whiteVariationBg: '#FEF6F3',
				textGray: '#646162',
				bgLightGray: '#F3F3F3',
				darkColor: '#101010',
				timeStateGreen: '#0FF084',
				timeStateRed: '#F00F0F',
				timeStateOrange: '#EA5A2C',
				timeStateYellow: '#EAB52C',
			},
			classes: {
				'answer': 'opacity-0 max-h-0 overflow-hidden 0.3s ease',
				'block-opacity': 'opacity-100 max-h-full',
			},
			keyframes: {
				infiniteSlider: {
					from : {transform: "translateX(0%)"},
					to : {transform: "translateX(calc(-100% - 32px))"}
				}
			},
			animation: {
				infiniteSlider: "infiniteSlider 10s linear infinite"
			}
		},
	},
	plugins: [],
}
