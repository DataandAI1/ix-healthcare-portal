# Quick Start Guide

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/DataandAI1/ix-healthcare-portal.git
   cd ix-healthcare-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically reload when you make changes

## 📁 Project Structure

```
ix-healthcare-portal/
├── src/
│   ├── App.tsx         # Main React component with all pages
│   ├── index.tsx       # Application entry point
│   ├── index.css       # Global styles
│   └── components/     # Future component library
├── public/
│   ├── favicon.svg     # iX brand icon
│   └── robots.txt      # SEO configuration
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite bundler configuration
└── firebase.json       # Firebase hosting configuration
```

## 🛠️ Development Workflow

1. **Make changes** in `src/App.tsx`
2. **Test locally** with `npm run dev`
3. **Check types** with `npm run lint`
4. **Build for production** with `npm run build`
5. **Preview production build** with `npm run preview`

## 🚢 Deployment

### Firebase Hosting (Recommended)

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize project** (if not done)
   ```bash
   firebase init hosting
   ```

4. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### GitHub Actions (Automated)

The repository includes a GitHub Actions workflow that will:
- Build and deploy to Firebase on every push to `main`
- Create preview deployments for pull requests

To enable this:
1. Create a Firebase project
2. Get your Firebase service account key
3. Add it as `FIREBASE_SERVICE_ACCOUNT` in GitHub repository secrets

## 🎨 Design System

The application follows the iX Design System with:
- **Primary Color**: #00D4AA (iX Green)
- **Secondary Color**: #0A1628 (Deep Navy)
- **Typography**: System font stack
- **Spacing**: 8px unit system
- **Components**: Cards, buttons, navigation, chat interface

## 📝 Next Steps

1. **Component Library**: Extract reusable components to `src/components/`
2. **State Management**: Add Redux or Context API for complex state
3. **API Integration**: Connect to backend services
4. **Testing**: Add Jest and React Testing Library
5. **Documentation**: Expand component documentation with Storybook

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.