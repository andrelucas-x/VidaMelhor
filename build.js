#!/usr/bin/env node

// Build script for GitHub/Vercel compatibility
import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';

console.log('🔨 Starting build process...');

// Ensure dist directory exists
if (!existsSync('dist')) {
  mkdirSync('dist', { recursive: true });
}

try {
  // Build client (frontend)
  console.log('📦 Building frontend...');
  execSync('vite build', { stdio: 'inherit' });
  
  // Build server for production (only if not in Vercel environment)
  if (!process.env.VERCEL) {
    console.log('🖥️  Building server...');
    execSync('esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });
  }
  
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}