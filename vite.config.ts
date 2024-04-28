import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
			pages: `${path.resolve(__dirname, './src/pages/')}`,
			components: `${path.resolve(__dirname, './src/components/')}`,
			types: `${path.resolve(__dirname, './src/types/')}`,
      		themes: `${path.resolve(__dirname, './src/themes/')}`,
			viewports: `${path.resolve(__dirname, './src/viewports/')}`,
			assets: `${path.resolve(__dirname, './src/assets/')}`,
		}
	}
});