#!/usr/bin/env deno run --allow-read --allow-write

/**
 * Example Deno script for the personal site project
 * Demonstrates Deno's built-in capabilities and how it integrates with the SvelteKit project
 */

import { walk } from 'jsr:@std/fs/walk';
import { join } from 'jsr:@std/path';

interface ProjectStats {
	totalFiles: number;
	fileTypes: Record<string, number>;
	totalLines: number;
	directories: string[];
}

/**
 * Analyze the project structure and generate statistics
 */
async function analyzeProject(): Promise<ProjectStats> {
	const stats: ProjectStats = {
		totalFiles: 0,
		fileTypes: {},
		totalLines: 0,
		directories: []
	};

	const projectRoot = join(Deno.cwd());
	const excludeDirs = ['node_modules', '.svelte-kit', 'build', '.git'];

	console.log('🔍 Analyzing project structure...\n');

	for await (const entry of walk(projectRoot, {
		skip: excludeDirs.map((dir) => new RegExp(dir))
	})) {
		if (entry.isFile) {
			stats.totalFiles++;

			// Count file types
			const ext = entry.path.split('.').pop() || 'no-ext';
			stats.fileTypes[ext] = (stats.fileTypes[ext] || 0) + 1;

			// Count lines in text files
			if (isTextFile(ext)) {
				try {
					const content = await Deno.readTextFile(entry.path);
					stats.totalLines += content.split('\n').length;
				} catch {
					// Skip files that can't be read
				}
			}
		} else if (entry.isDirectory) {
			const relativePath = entry.path.replace(projectRoot, '').slice(1);
			if (relativePath && !excludeDirs.some((dir) => relativePath.includes(dir))) {
				stats.directories.push(relativePath);
			}
		}
	}

	return stats;
}

/**
 * Check if a file extension represents a text file
 */
function isTextFile(ext: string): boolean {
	const textExtensions = ['ts', 'js', 'svelte', 'css', 'html', 'md', 'json', 'txt', 'yaml', 'yml'];
	return textExtensions.includes(ext);
}

/**
 * Format file size in human readable format
 */
function formatBytes(bytes: number): string {
	if (bytes === 0) return '0 Bytes';
	const k = 1024;
	const sizes = ['Bytes', 'KB', 'MB', 'GB'];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Generate a project report
 */
async function generateReport(stats: ProjectStats): Promise<void> {
	const reportContent = `# Project Analysis Report

Generated on: ${new Date().toISOString()}

## 📊 Project Statistics

- **Total Files**: ${stats.totalFiles}
- **Total Lines of Code**: ${stats.totalLines}
- **Directories**: ${stats.directories.length}

## 📁 File Types

${Object.entries(stats.fileTypes)
	.sort(([, a], [, b]) => b - a)
	.map(([ext, count]) => `- **${ext}**: ${count} files`)
	.join('\n')}

## 🗂️ Directory Structure

${stats.directories
	.sort()
	.map((dir) => `- ${dir}`)
	.join('\n')}

---

*This report was generated using Deno 🦕*
`;

	await Deno.writeTextFile('project-report.md', reportContent);
	console.log('📄 Report saved to project-report.md');
}

/**
 * Main function
 */
async function main(): Promise<void> {
	console.log('🦕 Deno Project Analysis Tool\n');
	console.log("This script demonstrates Deno's capabilities:");
	console.log('- File system operations');
	console.log('- Built-in TypeScript support');
	console.log('- Standard library modules');
	console.log('- Web standard APIs\n');

	try {
		const stats = await analyzeProject();

		console.log('✅ Analysis complete!\n');
		console.log(`📊 Found ${stats.totalFiles} files with ${stats.totalLines} lines of code`);
		console.log(`📁 Project has ${stats.directories.length} directories\n`);

		console.log('🔝 Top file types:');
		Object.entries(stats.fileTypes)
			.sort(([, a], [, b]) => b - a)
			.slice(0, 5)
			.forEach(([ext, count]) => {
				console.log(`   ${ext}: ${count} files`);
			});

		console.log('\n📄 Generating report...');
		await generateReport(stats);

		console.log("\n🎉 Done! Use 'deno run --allow-read scripts/example.ts' to run this script");
	} catch (error) {
		console.error('❌ Error analyzing project:', error.message);
		Deno.exit(1);
	}
}

// Run the script if this is the main module
if (import.meta.main) {
	await main();
}
