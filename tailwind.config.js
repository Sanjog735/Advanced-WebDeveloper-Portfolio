/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "profile-anim": "profile-anim 8s ease-in-out infinite 1s",
        wheel: "wheel 2s ease infinite",
        "scroll-up": "scroll-up 2s ease infinite",
      },
    },
  },
  plugins: [],
};
