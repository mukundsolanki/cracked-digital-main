# Manual Deployment Setup for Vercel

This guide will help you set up manual deployment workflows instead of automatic deployments.

## 🚀 Setup Instructions

### 1. Disable Automatic Deployments in Vercel

1. Go to your Vercel dashboard
2. Navigate to your project settings
3. Go to **Git** tab
4. **Disable** "Automatic deployments" for the main branch
5. Save the changes

### 2. Get Vercel Credentials

You need to add these secrets to your GitHub repository:

#### Get Vercel Token:
1. Go to [Vercel Account Settings](https://vercel.com/account/tokens)
2. Create a new token with appropriate permissions
3. Copy the token

#### Get Project IDs:
1. Go to your project in Vercel dashboard
2. Go to **Settings** → **General**
3. Copy the **Project ID**
4. Copy the **Team ID** (Organization ID)

### 3. Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add these repository secrets:

```
VERCEL_TOKEN=your_vercel_token_here
VERCEL_ORG_ID=your_team_id_here
VERCEL_PROJECT_ID=your_project_id_here
```

### 4. Manual Deployment

Now you can deploy manually by:

1. Going to **Actions** tab in your GitHub repository
2. Click on **Deploy to Vercel** workflow
3. Click **Run workflow**
4. Choose your options:
   - **Environment**: production or preview
   - **Skip tests**: true/false
5. Click **Run workflow**

## 🎯 Workflow Features

- ✅ **Manual Trigger Only**: No automatic deployments
- ✅ **Environment Choice**: Production or Preview
- ✅ **Skip Tests Option**: For quick deployments
- ✅ **Linting**: Runs before deployment
- ✅ **Build Verification**: Ensures project builds successfully
- ✅ **Deployment Summary**: Shows deployment details

## 🔧 Customization

You can modify the workflow in `.github/workflows/deploy.yml` to:
- Add more deployment environments
- Include additional tests
- Add deployment notifications
- Customize build steps

## 📝 Notes

- The workflow will only run when manually triggered
- All deployments go through the same quality checks
- You can see deployment logs in the Actions tab
- Failed deployments won't affect your live site
