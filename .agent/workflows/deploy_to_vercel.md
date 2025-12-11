---
description: Deploy to Vercel
---
# How to Deploy BAS Strategy Arcade to Vercel

Vercel is the creators of Next.js and provides the best free hosting for this application.

## Prerequisites
- A GitHub account (free)
- A Vercel account (free, sign up with GitHub)

## Steps

1. **Push to GitHub**
   - Create a new repository on GitHub (e.g., `bas-strategy-arcade`).
   - Run the following commands in your terminal:
     ```bash
     git remote add origin https://github.com/YOUR_USERNAME/bas-strategy-arcade.git
     git branch -M main
     git push -u origin main
     ```

2. **Deploy on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your GitHub repository (`bas-strategy-arcade`).
   - Click **Import**.
   - On the configuration screen, the defaults are perfect.
   - Click **Deploy**.

3. **Wait for Build**
   - Vercel will build your app (takes ~1 minute).
   - Once done, you will get a public URL (e.g., `bas-strategy-arcade.vercel.app`).
   - You can share this URL with anyone!

## Alternative: Vercel CLI (No GitHub required)
If you don't want to use GitHub, you can deploy directly from your terminal:

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Run deploy command:
   ```bash
   vercel
   ```
3. Follow the prompts (Login -> Yes -> Yes -> Yes).
