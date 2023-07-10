import { defineConfig } from 'vite'
import { qrcode } from 'vite-plugin-qrcode';
// import obfuscator from 'rollup-plugin-obfuscator';

export default defineConfig({
  plugins: [
    qrcode()
],
  base: '/chrome-extension-furigana/'
})