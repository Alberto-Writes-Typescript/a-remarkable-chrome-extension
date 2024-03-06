import path from 'path'
import dotenv from 'dotenv'
import esbuild from 'esbuild'

const BUILD_CONFIG = {
	bundle: true,
	// Path to application.js folder
	absWorkingDir: path.join(process.cwd(), 'src'),
	// Application.js file, used by Rails to bundle all JS Rails code
	entryPoints: ['index.ts'],
	// Destination of JS bundle, points to the Rails JS Asset folder
	outdir: path.join(process.cwd(), 'public/build/bundle.js'),
	// Split option is disabled, only needed when using multiple input files
	// More information: https://esbuild.github.io/api/#splitting (change it if using multiple inputs)
	splitting: false,
	// Remove unused JS methods
	treeShaking: true,
	// Adds mapping information so web browser console can map bundle errors to the corresponding
	// code line and column in the real code
	// More information: https://esbuild.github.io/api/#sourcemap
	sourcemap: process.argv.includes('--development'),
	// Compresses bundle
	// More information: https://esbuild.github.io/api/#minify
	minify: process.argv.includes('--production'),
	// Removes all console lines from bundle
	// More information: https://esbuild.github.io/api/#drop
	drop: process.argv.includes('--production') ? ['console'] : [],
	// Build command log output: https://esbuild.github.io/api/#log-level
	logLevel: 'info'
}

dotenv.config();

// Script to just bundle project JS
if (process.argv.includes('--production')) {
	esbuild.build(BUILD_CONFIG)

// Script to bundle JS and re-bundle when files change
} else {
	esbuild
		.context(BUILD_CONFIG)
		.then(async (ctx) => {
			await ctx.watch();

			await ctx.serve({
				// Public directory served by ESBuild server
				servedir: path.join(process.cwd(), 'public'),
				// ESBuild Server Log - Displays request information
				onRequest: ({ remoteAddress, method, path, status, timeInMS }) => {
					console.info(remoteAddress, status, `"${method} ${path}" [${timeInMS}ms]`);
				},
			})
		})
		// Display bundling errors in console
		.catch((e) => {
			console.error(e);
			process.exit(1);
		})
}

