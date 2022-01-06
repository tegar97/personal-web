module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            boxShadow: (theme) => ({
                'undersky': theme('colors.gray.900') + ' 0px -0.166667em 0px 0px inset, ' + theme('colors.sky.800') + ' 0px -0.333333em 0px 0px inset',
            }),
        },
    },
    plugins: [],
};
