import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: "#091D9E",
        purple: "#750DC5",
        lavender: "#BCC5FF",
        lite: "#F6F6F6",
        gray: "#DEDEDE",
        _black: "#0C0C0C",
        yellow: "#EBBA1A",
        gray_dark: "#454545"
      },
      backgroundImage: {
        gradient: "linear-gradient(267deg, #260DC1 6.29%, #59006F 100%)"
      },
      backgroundSize: {
        "100%": "100%"
      },
      fontSize: {
        big: "32px",
        h1: "20px",
        h2: "18px",
        h3_h4: "16px",
        h5_h6_h7: "14px",
      },
      spacing: {
        14: "14px",
        "5%": "5%",
        "17px": "17px",
        "10px": "10px"
      },
      maxHeight: {
        "211px": "211px",
        "128px": "128px"
      },
      maxWidth: {
        "200px": "200px",
        "98px": "98px"
      }
    },
  },
  plugins: [],
}
export default config
