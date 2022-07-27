const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './Layouts/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    900: '#20212E',
                    800: '#272938',
                    700: '#2D2F41',
                    600: '#383B51',
                    500: '#464963',
                    400: '#5A5D7C',
                    300: '#7C7FA5',
                    200: '#9296BE',
                }
            },
            boxShadow: (theme) => ({
                undersky:
                    theme('colors.gray.900') +
                    ' 0px -0.166667em 0px 0px inset, ' +
                    theme('colors.sky.800') +
                    ' 0px -0.333333em 0px 0px inset',
            }),
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                mono:
                    [
                        '"Fira Code", "Dank Mono"',
                        ...defaultTheme.fontFamily.mono,
                    ] + '!important',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography'),
    ],
};
