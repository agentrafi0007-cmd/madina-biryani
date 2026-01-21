# Cloudflare Pages Deployment

## Manual Deployment Steps:

1. **Build completed** ✅ - The `out` folder contains your static files

2. **Upload to Cloudflare Pages:**
   - Go to Cloudflare Dashboard → Pages
   - Click "Upload assets" 
   - Drag and drop the entire `out` folder
   - Set custom domain: `madinabiryani.site`

3. **Alternative - Git Integration:**
   - Connect your GitHub repository
   - Build settings:
     - Framework: Next.js (Static HTML Export)
     - Build command: `npm run build`
     - Build output directory: `out`

## Build Output Location:
- Static files are in: `./out/`
- Ready for deployment to Cloudflare Pages

## Domain Configuration:
- Your domain `madinabiryani.site` is already configured in the code
- Sitemap will be available at: `https://madinabiryani.site/sitemap.xml`