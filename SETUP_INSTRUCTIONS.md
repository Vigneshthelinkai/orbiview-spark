# 🚨 CRITICAL: Fix Missing "dev" Script Error

## Problem
Your project has all dependencies installed but is missing the required build scripts in `package.json`.

## ✅ SOLUTION (Required to make project work)

### Step 1: Enable Dev Mode
1. Click the **"Dev Mode"** toggle button in the top-left corner of Lovable
2. This will show you the project files

### Step 2: Edit package.json
1. In the file tree, click on `package.json` 
2. Find lines 5-7 that currently show:
```json
"scripts": {
  "build": "echo 'no build script'"
},
```

### Step 3: Replace with Working Scripts
Replace those 3 lines with this exact code:
```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "build:dev": "vite build --mode development", 
  "preview": "vite preview"
},
```

### Step 4: Save the File
- Press `Ctrl+S` (or `Cmd+S` on Mac) to save
- The project should automatically restart and work

## 🎯 What These Scripts Do
- `"dev"`: Starts development server (fixes your current error)
- `"build"`: Creates production build
- `"build:dev"`: Creates development build (required by Lovable)
- `"preview"`: Previews production build

## ⚡ After This Fix
Your modern HR dashboard with glassmorphism effects will load perfectly!

---
**Need Help?** If you're still having issues, make sure you're editing the `package.json` file in the root directory (not inside any folders).