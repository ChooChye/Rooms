const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                teal: {
                    100: '#d4e5e7',
                    200: '#a9cccf',
                    300: '#7fb2b7',
                    400: '#54999f',
                    500: '#297f87',
                    600: '#21666c',
                    700: '#194c51',
                    800: '#103336',
                    900: '#08191b',
                },
                torquise: {
                    100: '#e5f2f6',
                    200: '#cce4ed',
                    300: '#b2d7e4',
                    400: '#99c9db',
                    500: '#7fbcd2',
                    600: '#6696a8',
                    700: '#4c717e',
                    800: '#334b54',
                    900: '#19262a',
                },
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
