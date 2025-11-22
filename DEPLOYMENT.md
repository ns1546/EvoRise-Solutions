# EvoRise Solutions - Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free)
- Your custom domain

### Step 1: Prepare Your Project

1. Make sure your project builds successfully:
```bash
npm run build
```

2. Test the production build locally:
```bash
npm run preview
```

### Step 2: Push to GitHub

1. Initialize Git (if not already done):
```bash
git init
git add .
git commit -m "Ready for deployment"
```

2. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it (e.g., "evorise-solutions")
   - Don't initialize with README
   - Click "Create repository"

3. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel

1. Go to https://vercel.com
2. Click "Sign Up" and use your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"
7. Wait ~1 minute - Your site is live! 🎉

### Step 4: Add Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `evorisesolutions.com`)
4. Vercel will show DNS records to add:

**For domain registrar (like Namecheap, GoDaddy, etc.):**
- Add an A record pointing to Vercel's IP: `76.76.21.21`
- Or add a CNAME record pointing to: `cname.vercel-dns.com`

5. Wait for DNS propagation (5-30 minutes)
6. SSL certificate is automatically generated (free)

### Step 5: Automatic Deployments

Every time you push to GitHub:
```bash
git add .
git commit -m "Update website"
git push
```
Vercel will automatically rebuild and deploy! 🚀

---

## 🌐 Alternative: Netlify

### Quick Deploy to Netlify

1. Build your project:
```bash
npm run build
```

2. Go to https://netlify.com
3. Drag and drop the `dist` folder
4. Add custom domain in Site Settings → Domain Management

---

## 📝 Important Notes

- **Free SSL:** Both Vercel and Netlify provide free SSL certificates
- **Build Time:** First deployment takes ~1-2 minutes
- **Updates:** Push to GitHub = Automatic deployment
- **Custom Domain:** Usually takes 5-30 minutes for DNS to propagate

## 🔧 Troubleshooting

### If build fails on Vercel:
1. Check that `package.json` has correct scripts
2. Ensure all dependencies are in `package.json`
3. Check build logs in Vercel dashboard

### If custom domain doesn't work:
1. Wait 30 minutes for DNS propagation
2. Check DNS settings in your domain registrar
3. Use Vercel's DNS checker tool

---

## ✅ Deployment Checklist

- [ ] Project builds successfully (`npm run build`)
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project deployed on Vercel
- [ ] Custom domain added
- [ ] DNS records configured
- [ ] SSL certificate active (automatic)
- [ ] Website is live! 🎉

---

## 📞 Need Help?

If you encounter any issues:
1. Check Vercel's deployment logs
2. Verify DNS settings in your domain registrar
3. Ensure all environment variables are set (if any)

**Your website will be live at:**
- Vercel URL: `https://your-project.vercel.app`
- Custom Domain: `https://yourdomain.com`
