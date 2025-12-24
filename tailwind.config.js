/* Alternatively, if you're using Tailwind CSS, add this to your tailwind.config.js: */
export const theme = {
    extend: {
        animation: {
            'fall': 'fall linear infinite',
            'sway': 'sway ease-in-out infinite alternate'
        },
        keyframes: {
            fall: {
                '0%': { transform: 'translateY(-20px) rotate(0deg)' },
                '100%': { transform: 'translateY(100vh) rotate(360deg)' },
            },
            sway: {
                '0%': { transform: 'translateX(0)' },
                '25%': { transform: 'translateX(-10px)' },
                '50%': { transform: 'translateX(10px)' },
                '75%': { transform: 'translateX(-5px)' },
                '100%': { transform: 'translateX(0)' },
            },
        },
    },
};