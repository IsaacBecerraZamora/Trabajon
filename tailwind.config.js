/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      'color-primary' : '#025436',
      'color-primary-rgb': '2, 84, 54',
      'color-primary-contrast': '#ffffff',
      'color-primary-contrast-rgb': '255, 255, 255',
      'color-primary-shade': '#024a30',
      'color-primary-tint': '#1b654a',
    
      'color-secondary': '#ed6c25',
      'color-secondary-rgb': '237, 108, 37',
      'color-secondary-contrast': '#ffffff',
      'color-secondary-contrast-rgb': '0, 0, 0',
      'color-secondary-shade': '#d15f21',
      'color-secondary-tint': '#ef7b3b',
    
      'color-tertiary': '#0d8c5d',
      'color-tertiary-rgb': '13, 140, 93',
      'color-tertiary-contrast': '#ffffff',
      'color-tertiary-contrast-rgb': '255, 255, 255',
      'color-tertiary-shade': '#0b7b52',
      'color-tertiary-tint': '#25986d',
    
      'color-success': '#0d8c5d',
      'color-success-rgb': '13, 140, 93',
      'color-success-contrast': '#ffffff',
      'color-success-contrast-rgb': '255, 255, 255',
      'color-success-shade': '#0b7b52',
      'color-success-tint': '#25986d',
    
      'color-warning': '#ffc409',
      'color-warning-rgb': '255, 196, 9',
      'color-warning-contrast': '#000000',
      'color-warning-contrast-rgb': '0, 0, 0',
      'color-warning-shade': '#e0ac08',
      'color-warning-tint': '#ffca22',
    
      'color-danger': '#ea2e47',
      'color-danger-rgb': '234, 46, 71',
      'color-danger-contrast': '#ffffff',
      'color-danger-contrast-rgb': '255, 255, 255',
      'color-danger-shade': '#ce283e',
      'color-danger-tint': '#ec4359',
    
      'color-medium': '#92949c',
      'color-medium-rgb': '146, 148, 156',
      'color-medium-contrast': '#000000',
      'color-medium-contrast-rgb': '0, 0, 0',
      'color-medium-shade': '#808289',
      'color-medium-tint': '#9d9fa6',
    
      'color-light': '#f4f5f8',
      'color-light-rgb': '244, 245, 248',
      'color-light-contrast': '#000000',
      'color-light-contrast-rgb': '0, 0, 0',
      'color-light-shade': '#d7d8da',
      'color-light-tint': '#f5f6f9',
    
      'color-dark': '#333333',
      'color-dark-rgb': '244, 245, 248',
      'color-dark-contrast': '#000000',
      'color-dark-contrast-rgb': '0, 0, 0',
      'color-dark-shade': '#555555',
      'color-dark-tint': '#888888',

  },
  plugins: [],
}
}
