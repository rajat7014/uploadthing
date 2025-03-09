import { withUt } from 'uploadthing/tw'
import { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '.src/components/**/*.{js,ts,jsx,tsx,mdx}',
    '.src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
}
export default withUt(config)

// export default withUt({
//   content: [
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// })
