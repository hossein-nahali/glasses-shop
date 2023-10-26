/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/scripts/app.js"
    ],
    theme: {
        borderRadius: {
            '2.5': '10px',
            '5': '20px',
            'full': '9999px',
            'md': '6px',
            'xl': '12px',
            '2xl': '16px',
            '3xl': '20px',
            '10xl': '40px',
        },
        extend: {
            boxShadow: {
                'services': '0px 15px 66px 4px rgba(252, 197, 70, 0.10)',
            },
            colors: {
                brown: {
                    100: '#b1a095',
                    200: '#C2B7AF',
                },
                'bright-yellow': {
                    100: '#FCC546'
                }
            },
            fontFamily: {
                'Dana': 'Dana',
            },
            spacing: {
                "0.5": '0.125rem',
                "15": "3.75rem",
                "21": "5.25rem",
                "25": "6.25rem",
                "30": "7.5rem",
                "31": "7.75rem",
                "33": "8.25rem",
                "35": "8.75rem",
                "41": "10.25rem",
                "45": "11.25rem",
                "67": "16.75rem",
                "91": "22.75rem",
            },
            letterSpacing: {
                normal: '-0.051em'
            },

            borderRadius: {
                "5xl": '3.5rem'
            }
        },
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        container: {
            center: true,
            padding: '1rem',
        },
    },
    plugins: [
        function ({addVariant}) {
            addVariant('child', '& > *')
            addVariant('not-last', '&>*:not(:last-child)')
            addVariant('child-hover', '& > *:hover')
        }
    ],
}