# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jonas Academy is a static study archive website for civil engineering notes. It features a landing page with a Three.js Christmas tree particle animation, year-based navigation to modules, and a PDF viewer. The site uses Firebase for authentication and Firestore for user data, and is deployed on Vercel.

## Development

This is a static site with no build step. To develop locally:
- Open `index.html` directly in a browser, or use a local server (e.g., `npx serve`)
- PDFs are served from `notes/Year {n}/{Module Name}/{file}.pdf`

## Architecture

### Pages
- **index.html** - Landing page with Three.js particle animation, Firebase Google auth, and year selection buttons
- **viewer.html** - PDF viewer using PDF.js with TOC sidebar, zoom controls, and error reporting
- **admin.html** - Password-protected admin dashboard for viewing error reports and managing announcements
- **announcements.html** - Public announcements page

### Scripts
- **scripts/modules.js** - Hardcoded `MODULES` object defining all years, modules, and PDF files. Helper functions: `getModulesForYear()`, `getPdfsForModule()`, `getPdfPath()`
- **scripts/firebase-config.js** - Firebase initialization and auth helpers: `signInWithGoogle()`, `saveUserData()`, `getUserData()`, `signOutUser()`, `onAuthStateChange()`

### Styles
- **styles/main.css** - Global CSS variables and shared styles using glassmorphism design (backdrop blur, semi-transparent backgrounds)

### Data Storage
- **Firebase Auth** - Google Sign-in for user authentication
- **Firestore** - Stores user profiles in `users/{uid}` collection (fullName, email, createdAt)
- **localStorage** - Stores error reports (`jonasnotes_reports`) and announcements (`jonasnotes_announcements`)

## Key Patterns

### Adding New PDFs
1. Add PDF file to `notes/Year {n}/{Module Name}/`
2. Update `MODULES` object in `scripts/modules.js` with the filename

### Auth Flow
Login button triggers `signInWithGoogle()`. For new users, a name modal appears to complete profile before accessing content. User data is saved to Firestore.

### PDF Viewer Loading
PDFs render all pages to a hidden container first, then display them all at once. The `isLoading` flag disables scroll-based page detection during rendering to prevent buggy page counter behavior.
