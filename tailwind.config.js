/** @type {import('tailwindcss').Config} */
const rem = num => ({ [num]: `${num / 16}rem` });

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: '#0B5147',
        secondary: '#E1FFA0',
        thirdGreen: '#F1FAF3',
        fourthGreen: '#0FD790',
        lightGreen: '#DAF6E8',
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      spacing: {
        ...rem(88),
      },
      fontSize: {
        ...rem(16),
      },
    },
    animation: {
      pulseCustom: 'pulse 1.4s cubic-bezier(0, 0, 0, 0) infinite',
    },
    keyframes: {
      pulse: {
        '0%, 100%': {
          opacity: '0.3',
          transform: 'scale(1)',
        },
        '50%': {
          opacity: '0.1',
          transform: 'scale(0.9)',
        },
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
}
