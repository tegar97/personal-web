const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './Layouts/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            boxShadow: (theme) => ({
                undersky:
                    theme('colors.slate.900') +
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
