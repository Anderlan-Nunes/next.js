module.exports = {
  purge: {
    content: [
    
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    
    "./src/components/**/*.{js,ts,jsx,tsx}",
    
    ],
    safelist: [
      {
        pattern: /(bg|from-|to-)(gray|green|blue)-(100|300|400|700)/,
        variants: ['lg', 'hover', 'focus', 'lg:hover'],
      },
    ]
  },
  
  theme: {
  
  extend: {},
  
  },
  
  plugins: [],
  
}

// const defaultTheme = require('tailwindcss/defaultTheme')

// module.exports = {
//   content: [
//       './**/*.php',
//       '../Resources/**/*.{html,js}',
//   ],
//   important: true,
//   safelist: [
//       'bg-white',
//       'bg-brown-200',

//       'text-white',
//       'text-black',
//       'text-center',
//       'text-base',

//       'leading-none',
//       'list-none',
//       'font-medium',
//       'font-normal',

//       'font-sans',
//       'font-serif',

//       'flex',
//       'items-center',

//       'mb-0',
//       'pb-0',
//       'pl-0',
//       'pr-0',
//       {
//           pattern: /(flex|items-center|order-1|order-2|ml-auto|mr-auto|mr-0)/,
//           variants: ['sm', 'md', 'md-max', 'lg', 'xl', '2xl', 'smartphone', 'tablet', 'laptop', 'desktop'],
//       },
//   ],
//   prefix: '',
//   theme: {
//       colors: {
//           //transparent: 'transparent',
//           //current: 'currentColor',
//           'white': '#ffffff',
//           'black': '#000000',
//           'brown': {
//               50: '#F7F5F1',
//               200: '#E3D8CB',
//           },
//           'slate': {
//               50: '#EEE',
//           },
//           'blue': {
//               500: '#596E79',
//           },
//           'red': {
//               600: '#8f0e22',
//           }
//       },
//       fontFamily: {
//           //'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
//           'sans': ['Roboto', 'ui-sans-serif', 'system-ui'],
//           'serif': ['"Bebas Neue"', 'sans-serif', 'ui-serif'],
//       },

//       // @TODO: using custom screen names like table, laptop, desktop in future
//       // @see: https://tailwindcss.com/docs/screens
//       screens: {
//           'md-max': {'max': '768px'},

//           // @see: https://www.elegantthemes.com/blog/divi-resources/how-to-identify-divis-responsive-breakpoints-and-fine-tune-your-designs-with-media-queries
//           'smartphone': '320px',
//           'tablet': '768px',
//           'laptop': '980px',
//           'desktop': '1100px',

//           ...defaultTheme.screens,
//       },
//       extend: {},
//   },
//   corePlugins: {
//       preflight: false,
//       textOpacity: false,
//       backgroundOpacity: false,
//       borderOpacity: false,
//   },
//   plugins: [],
// }