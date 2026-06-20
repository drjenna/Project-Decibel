# Project Decibel — Launch Guide

Five pages, fully built and on-brand: **Home, Services & Products, Our Story, Education, Contact.**
Cal.com booking is wired (concierge primary, Friday clinic secondary). The contact form is built and
just needs a free access key (Step 1).

Deploy path: **GitHub → Cloudflare Pages** (auto-deploys every future change).

---

## Step 1 — Turn on the contact form (do this first)

1. Go to **web3forms.com**
2. Enter your email: `drjenna.projectdecibel@gmail.com`
3. They email you an **access key**
4. Open `src/config.ts`, find `formAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY"`, and paste your key in place of `YOUR_WEB3FORMS_ACCESS_KEY`. Save.

Submissions will email to `drjenna.projectdecibel@gmail.com`.

---

## Step 2 — Preview locally (optional)

```
cd ~/Documents/Claude/Projects/PdB\ Business\ Management/project-decibel
npm run dev
```
Open http://localhost:4321

---

## Step 3 — Push to GitHub

1. Go to **github.com** → **New repository** → name it `project-decibel` → **Private** is fine → **Create repository** (don't add a README).
2. In Terminal, from the project folder:
   ```
   git init
   git add .
   git commit -m "Project Decibel website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/project-decibel.git
   git push -u origin main
   ```
   (Replace `YOUR-USERNAME`. If asked to sign in, follow GitHub's prompt.)

---

## Step 4 — Deploy to Cloudflare Pages (preview URL)

1. Log in to **cloudflare.com** → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. Select your `project-decibel` repo
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. **Save and Deploy**

Cloudflare builds it and gives you a URL like `project-decibel.pages.dev`. **Review this live before touching your domain.**

---

## Step 5 — Point your domain (only when you're happy)

1. In Cloudflare Pages → your project → **Custom domains** → add `project-decibel.com`
2. Cloudflare walks you through updating DNS.
3. Your domain is currently on Squarespace — the new site stays at the `.pages.dev` URL until you switch DNS, so nothing breaks in the meantime.

---

## Step 6 — After you're live

- [ ] **Re-host the Education resource files** — the Resource Library links (pocket resource, etc.) currently point to Squarespace. Download those files and drop them into `public/` so the links keep working.
- [ ] **Cancel Squarespace** (only after the domain is switched and resources are re-hosted).
- [ ] Update your email at Sensaphonics, UE Pro, Microsonic, and your voicemail greeting.

---

## Making changes later

Because it's connected to GitHub, any change you (or I) push auto-deploys:
```
git add .
git commit -m "describe the change"
git push
```
Cloudflare rebuilds within a minute or two.
