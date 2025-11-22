# Quick Deployment Commands

# Step 1: Build the project
Write-Host "Building project..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Build successful!" -ForegroundColor Green
    Write-Host "`nYour production files are in the 'dist' folder" -ForegroundColor Yellow
    Write-Host "`n📋 Next Steps:" -ForegroundColor Cyan
    Write-Host "1. Push your code to GitHub" -ForegroundColor White
    Write-Host "2. Go to https://vercel.com and import your repository" -ForegroundColor White
    Write-Host "3. Vercel will auto-deploy your site" -ForegroundColor White
    Write-Host "4. Add your custom domain in Vercel settings" -ForegroundColor White
    Write-Host "`n🚀 Or deploy to Netlify:" -ForegroundColor Cyan
    Write-Host "   - Go to https://netlify.com" -ForegroundColor White
    Write-Host "   - Drag and drop the 'dist' folder" -ForegroundColor White
    Write-Host "`n📖 Full guide: See DEPLOYMENT.md" -ForegroundColor Magenta
} else {
    Write-Host "`n❌ Build failed! Check the errors above." -ForegroundColor Red
}
