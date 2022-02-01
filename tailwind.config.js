module.exports = {
    content: [
        "./views/*.{html,ejs}",
        "**/*.ejs"
    ],
    // purge: {
    //     content: ["**/*.ejs"],
    // },
    theme: {
        extend: {
            height: {
                "h-90": "900px"
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif']
            },
            colors: {
                // 'light_cyan': '#B6CCDA'
                'light_cyan': '#a3becf',
                'menu-cyan': '#EFF6FB',
                'text-cyan': '#ABC6D6',
                'dark-text-cyan': '#404354'
            },
            spacing: {
                '1/10': "9%",
                '1/5': "18%",
                '3/10': "30%",
                '2/5': "40%",
                '17p': "17%",
                '31p': "31%",
                '43p': "44%",
                '45p': "45%",
                '53p': "53%",
                '55p': "55%",
                '61p': "61%",
                '18': "4.5rem",
                '5.5': "5.5rem",
                '33': "33rem"
            },
            fontSize: {
                'huge': "4rem",
                'big': "3rem",
                'mini': "2rem"
            },
            lineHeight: {
                'huge': "5.3rem",
                'big': "4rem",
                'mini': "3rem"
            },
            borderWidth: {
                '3': "3px"
            }
        },
    },
    plugins: [],
}
