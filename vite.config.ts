import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
      app: resolve(__dirname, './src/app'),
      routes: resolve(__dirname, './src/routes'),
      layouts: resolve(__dirname, './src/layouts'),
      pages: resolve(__dirname, './src/pages'),
      components: resolve(__dirname, './src/components'),
      constants: resolve(__dirname, './src/constants'),
      elements: resolve(__dirname, './src/elements'),
      assets: resolve(__dirname, './src/assets'),
      hooks: resolve(__dirname, './src/hooks'),
      dialog: resolve(__dirname, './src/dialog'),
      types: resolve(__dirname, './src/types'),
      services: resolve(__dirname, './src/services'),
      utils: resolve(__dirname, './src/utils')
    }
  }
});
