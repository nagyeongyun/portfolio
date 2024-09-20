/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ['Pretendard-Light'],
        'Pretendard-50': ['Pretendard-Thin'],
        'Pretendard-100': ['Pretendard-Regular'],
        'Pretendard-200': ['Pretendard-Medium'],
        'Pretendard-300': ['Pretendard-SemiBold'],
        'Pretendard-400': ['Pretendard-Bold'],
      },
    },
  },
  plugins: [],
};
