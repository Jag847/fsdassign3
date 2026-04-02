# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account (create one at [github.com](https://github.com))
- Git installed on your computer
- Your portfolio project folder

## Step-by-Step Deployment Instructions

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click on the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `portfolio` or `yourusername.github.io`
     - If you use `yourusername.github.io`, your site will be at `https://yourusername.github.io`
     - If you use `portfolio`, your site will be at `https://yourusername.github.io/portfolio`
5. Choose **Public** (required for GitHub Pages)
6. Click **"Create repository"**

### Step 2: Connect Local Repository to GitHub

Open your terminal/command prompt and run:

```bash
# Navigate to your portfolio directory
cd "c:\fsd assign3"

# Set the remote URL (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/johnsmith/portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (gear icon)
3. Scroll down to the **"Pages"** section (in the left sidebar)
4. Under "Build and deployment":
   - **Source**: Select **"Deploy from a branch"**
   - **Branch**: Select **main** and **/(root)**
   - Click **Save**

5. GitHub will now build your site (this may take a few minutes)
6. You'll see a message: **"Your site is live at https://yourusername.github.io/repository-name"**

### Step 4: View Your Live Website

Your portfolio is now live! You can access it at:

- **If repository is named `portfolio`:**
  ```
  https://yourusername.github.io/portfolio
  ```

- **If repository is named `yourusername.github.io`:**
  ```
  https://yourusername.github.io
  ```

Share this URL with anyone who wants to see your portfolio!

## Making Changes and Updates

When you update your portfolio files:

```bash
# Stage all changes
git add .

# Commit with a meaningful message
git commit -m "Update skills and add new project"

# Push to GitHub
git push origin main
```

Your website will automatically update within minutes!

## Troubleshooting

### Issue: GitHub Pages not updating
- **Solution**: Wait a few minutes for GitHub to rebuild the site. Check the "Actions" tab to see the deployment status.

### Issue: CSS/JS not loading
- **Solution**: Make sure all file paths start with `/portfolio/` if your repo isn't `yourusername.github.io`
  - Example: `<link href="/portfolio/css/style.css" rel="stylesheet">`

### Issue: Links not working
- **Solution**: Check that all internal page links include the repository name if needed
  - Example: `<a href="/portfolio/about.html">About</a>`

### Issue: Can't push to GitHub
- **Solution**: Make sure you've configured Git with your GitHub credentials:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your-email@example.com"
  ```

## Alternative: Using GitHub Desktop

If you prefer a graphical interface:

1. Download [GitHub Desktop](https://desktop.github.com)
2. Open GitHub Desktop and sign in
3. Click "New Repository"
4. Select your portfolio folder
5. Click "Publish repository"
6. Upload to GitHub
7. Enable Pages (same as Step 3 above)

## Custom Domain (Optional)

To use your own domain name instead of `github.io`:

1. Point your domain to GitHub's servers (contact your domain provider)
2. In repository Settings > Pages, add your domain
3. GitHub will automatically create a CNAME file

Learn more: [GitHub Pages Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Performance Tips

1. Optimize images to reduce file size
2. Use CDN links for libraries (already done in this project)
3. Minify CSS and JavaScript for production
4. Enable caching headers

## Security Notes

- Keep your repository public for GitHub Pages to work
- Don't commit sensitive information (passwords, API keys)
- Use environment variables for sensitive data

## Support

For more information:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Documentation](https://git-scm.com/doc)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/)

---

**Happy deploying! Your portfolio is now live on the internet! 🚀**
