const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			med: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.75rem',
			'4xl': '2rem',
			'5xl': '2.25rem',
			'6xl': '2.5rem',
			'disp-sm': '2.75rem',
			'disp-lg': '3.25rem',
		},
        extend: {
            colors: {
				'green': {
					50: '#F0FDF0',
					100: '#DCFCDC',
					200: '#BBF7BB',
					300: '#86EF86',
					400: '#4ADE4A',
					500: '#00FF00',
					600: '#16A316',
					700: '#158015',
					800: '#166516',
					900: '#145314',
					DEFAULT: '#00FF00',
				},
				'purple': {
					50: '#FBF2FE',
					100: '#F7E2FE',
					200: '#F1CAFE',
					300: '#E6A5FC',
					400: '#D671F8',
					500: '#CB2CFF',
					600: '#AE26DC',
					700: '#921CB9',
					800: '#7A1B99',
					900: '#671D7F',
					DEFAULT: '#CB2CFF',
				},
            },			
			fontFamily: {
				sans: ['TWKEverett', 'sans-serif'],
				serif: ['TWKEverett', 'serif'],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': theme('colors.neutral[900]'),
						'--tw-prose-headings': theme('colors.neutral[900]'),
						h1: {
							textTransform: 'uppercase',
							fontSize: theme('fontSize.6xl'),
						},
						h2: {
							fontSize: theme('fontSize.5xl'),
							borderTopWidth: '2px',
							borderBottomWidth: '2px',
							paddingTop: '1.5rem',
							paddingBottom: '1.5rem',
						},
						h3: {
							fontSize: theme('fontSize.4xl'),
							borderBottomWidth: '1px',
							paddingBottom: '0.5rem',
							marginBottom: '1rem',
						},
						h4: {
							fontSize: theme('fontSize.3xl'),
						},
						h5: {
							fontSize: theme('fontSize.2xl'),
						},
					},
				},
			}),
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
};

module.exports = config;
