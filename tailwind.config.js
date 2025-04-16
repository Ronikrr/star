/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(33 33 33 / <alpha-value>)",           // #212121
        secondary: "rgb(255 255 255 / <alpha-value>)",       // #ffffff
        tertiary: "rgb(2 64 147 / <alpha-value>)",           // #024093
        "tertiary-light": "rgb(240 246 254 / <alpha-value>)", // #f0f6fe
        "tertiary-dark": "rgb(4 35 67 / <alpha-value>)",     // #042343
        "customer-bg": "rgb(241 244 249 / <alpha-value>)",   // #f1f4f9
        "dashboard-primary": "rgb(240 243 248 / <alpha-value>)", // #f0f3f8
        "history-primary": "rgb(207 219 235 / <alpha-value>)", // #cfdbeb
        "tertiary-alt": "rgb(101 193 140 / <alpha-value>)",  // #65c18c

        // Order status
        "order-pending": "rgb(128 128 128 / <alpha-value>)",       // #808080
        "order-confirm": "rgb(0 128 0 / <alpha-value>)",           // #008000
        "order-canceled": "rgb(255 0 0 / <alpha-value>)",          // #ff0000
        "order-partially-confirm": "rgb(206 206 59 / <alpha-value>)", // #cece3b

        // Filters
        "filter-yellow": "rgb(255 229 0 / <alpha-value>)",         // #ffe500
        "filter-green": "rgb(8 172 77 / <alpha-value>)",           // #08ac4d
        "filter-red": "rgb(254 51 51 / <alpha-value>)",            // #fe3333

        silver: "rgb(189 189 189 / <alpha-value>)",                // #bdbdbd
        "product-option": "rgb(177 194 221 / <alpha-value>)",      // #b1c2dd
      },
      fontSize: {
        '14': '14px',
        '16': '16px',
        '24': '24px',
        '30': '30px',
        '36': '36px',
        '50': '50px',
      }



    },
  },
  plugins: [],
}

