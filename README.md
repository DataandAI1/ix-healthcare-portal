# iX Healthcare Portal

![iX Healthcare Portal](https://img.shields.io/badge/React-18.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.2.0-purple.svg)

AI-powered healthcare experience solutions built with React and TypeScript. Transform patient experiences, clinical workflows, and administrative processes with intelligent automation.

## 🚀 Features

- **Healthcare Dashboard**: Real-time performance metrics and insights
- **AI-Powered Solutions**: Comprehensive suite of healthcare automation tools
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Following iX Design System guidelines
- **TypeScript**: Type-safe development experience
- **Fast Development**: Powered by Vite for instant HMR

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase CLI (for deployment)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/DataandAI1/ix-healthcare-portal.git
cd ix-healthcare-portal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## 🏗️ Project Structure

```
ix-healthcare-portal/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── App.tsx         # Main application component
│   ├── index.tsx       # Application entry point
│   └── index.css       # Global styles
├── .gitignore
├── package.json
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and deploy to Firebase

## 🎨 Design System

### Colors
- Primary: `#00D4AA` (iX Green)
- Secondary: `#0A1628` (Deep Navy)
- Background: `#F5F5F5` (Light Gray)
- Text: `#333333` (Dark Gray)

### Typography
- Font Family: System font stack
- Base Size: 16px
- Scale: 8px unit system

## 🚢 Deployment

### Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase init hosting
```

3. Deploy:
```bash
npm run deploy
```

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

Created by DataandAI1 for the iX Healthcare initiative.

## 🔗 Links

- [Repository](https://github.com/DataandAI1/ix-healthcare-portal)
- [Live Demo](#) - Coming soon
- [Documentation](#) - Coming soon