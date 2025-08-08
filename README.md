# Healthy Strong Life — Next.js + Tailwind

A clean, two-page site for **Healthy Strong Life** with a Home page, an About page (your “Why”), and a contact form.

## 📦 What’s inside
- Next.js + React + TailwindCSS
- Pages: **Home (`/`)** and **About (`/about`)**
- Navbar title + tagline: *Strong body. Strong life.*
- Gold/white gradient placeholders at **/public/images/hero.jpg** and **/public/images/about.jpg**
- Contact form on `/about` wired to **Formspree**
- White-background, gold **HSL** favicon

---

## 🧭 Step 4 — Upload to GitHub (click-by-click)
1. Go to **https://github.com** and log in.
2. Click the green **New** button → **New repository**.
3. Name it exactly: **healthy-strong-life**.
4. Click **Create repository**.
5. On the next screen, click **Upload an existing file**.
6. **Open the `healthy-strong-life` folder on your computer** and select **all files and folders inside** it.
7. Drag them into GitHub’s upload area.
8. Scroll down → click **Commit changes**.

> Tip: The folder you upload should include `pages`, `public`, `styles`, and files like `package.json`, not a nested folder.

---

## 🚀 Step 5 — Deploy on Vercel
1. Go to **https://vercel.com** and log in.
2. Click **Add New → Project**.
3. Choose your `healthy-strong-life` repo.
4. Click **Deploy** (defaults are fine).
5. Wait ~1 minute → you’ll get a live `.vercel.app` link.

---

## 🌐 Step 6 — Connect your custom domain
1. In Vercel → your project → **Settings → Domains**.
2. Enter your domain (e.g., `healthystronglife.com`).
3. Follow the DNS steps Vercel shows (copy/paste into GoDaddy/Google Domains).
4. Wait 5–30 minutes for it to go live.

---

## 🖼 Replace photos (drag-and-drop)
- Put your images into **`/public/images/`**.
- Replace **`hero.jpg`** or **`about.jpg`** with your own (keep the same names for zero code changes).
- Commit to GitHub → Vercel auto-deploys the update in ~60s.

---

## ✉️ Contact form (Formspree)
This project posts to a Formspree endpoint defined at the top of **`pages/about.js`**:

```js
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/your-id-here";
```

### Set it up:
1. Go to **https://formspree.io** and create a free account.
2. Create a **New Form** → choose **React**/**JSON** option.
3. Copy your **form endpoint** (looks like `https://formspree.io/f/xxxxabcd`).
4. In your project, open **`pages/about.js`** and replace the placeholder in `FORMSPREE_ENDPOINT` with your URL.
5. Commit the change to GitHub → Vercel will redeploy automatically.
6. Test by submitting the form on `/about#contact`. You’ll see the success message: “Thank you for reaching out — I’ll be in touch soon!”

> Optional: Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` as an **Environment Variable** in Vercel (Project → Settings → Environment Variables) so you don’t store it in code.

---

## 📊 Optional: Log inquiries to Google Sheets (via Zapier)
1. Go to **https://zapier.com** → create a Zap.
2. Trigger: **Formspree → New Submission**.
3. Action: **Google Sheets → Create Spreadsheet Row**.
4. Map fields: name, email, message, timestamp.
5. Turn on the Zap—now every inquiry is saved automatically.

---

## 🛠 Run it locally (optional)
```bash
npm install
npm run dev
# open http://localhost:3000
```

---

## 🧼 Fonts & brand styles
Fonts are loaded via Google Fonts in **`pages/_app.js`**:
- Logo: **Allura**
- Headlines: **Playfair Display**
- UI: **Montserrat**
- Body: **Raleway**

Gold color: `#C2A74E`
