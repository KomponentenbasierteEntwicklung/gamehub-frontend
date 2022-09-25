module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                metrophobic: ['Metrophobic'],
            },
            color: {
                primary: '#a4508b',
                customBlack: '#222831',
                customGray: '#393E46',
                grPurple: '#7900FF',
                grBlue: '#548CFF',
                grGreen: '#93FFD8',
                grTeal: '#CFFFDC',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar-hide'),
    ],
}
