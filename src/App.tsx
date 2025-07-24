import React, { useState } from 'react';
import { ChevronLeft, Send, MoreVertical, Download, Menu, X, ChevronRight, Globe, Play, CheckCircle, ArrowUpRight } from 'lucide-react';

// Type definitions
interface NavLink {
  id: string;
  label: string;
  page: string;
}

interface TeamMember {
  initials: string;
  name: string;
  role: string;
}

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  detailId?: string;
}

interface Invoice {
  id: string;
  date: string;
  amount: string;
  service: string;
  status: string;
}

// Main Healthcare Portal Component
const IXHealthcarePortal: React.FC = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [activeTab, setActiveTab] = useState(0);
  const [activePill, setActivePill] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { id: 'dashboard', label: 'Dashboard', page: 'dashboard' },
    { id: 'solutions', label: 'Solutions', page: 'solutions' },
    { id: 'account', label: 'Account', page: 'account' }
  ];

  const teamMembers: TeamMember[] = [
    { initials: 'JS', name: 'Jane Smith', role: 'Sr Practice Lead' },
    { initials: 'RW', name: 'Ryan Williams', role: 'Clinical Consultant' },
    { initials: 'JK', name: 'Jacob Kern', role: 'Account Manager' }
  ];

  const serviceCards: ServiceCard[] = [
    {
      icon: '🏥',
      title: 'Agentic Readiness for Healthcare',
      description: 'Enable your medical organization to transform patient experiences and clinical workflows through AI-powered autonomous agents. Ensure clinical safety, HIPAA compliance, and seamless EHR integration.',
      tags: ['Clinical Workflow Automation', 'Patient Experience', 'Healthcare AI Governance'],
      detailId: 'agentic-readiness'
    },
    {
      icon: '📞',
      title: 'Healthcare Contact Centers',
      description: 'Transform patient and member support with our healthcare-specific contact center solutions. Handle appointment scheduling, benefits verification, and clinical triage with intelligence and empathy.',
      tags: ['Patient Support Excellence', 'HIPAA-Compliant', 'Clinical Triage']
    },
    {
      icon: '🤖',
      title: 'Medical Language Intelligence',
      description: 'Specialized medical language models trained on healthcare interactions to understand clinical terminology, recognize medical intents, and enhance documentation accuracy.',
      tags: ['Clinical NLP', 'Medical Documentation', 'ICD-10 Coding']
    },
    {
      icon: '💬',
      title: 'Virtual Care Assistants',
      description: 'Clinically-validated virtual care assistants help patients navigate their healthcare journey with personalized guidance for medication adherence and chronic condition management.',
      tags: ['Chronic Disease Management', 'Medication Adherence', 'Patient Portal Integration']
    }
  ];

  const invoices: Invoice[] = [
    { id: 'INV-2025-024', date: 'June 15, 2025', amount: '$12,400.00', service: 'CCaaS Implementation', status: 'Paid' },
    { id: 'INV-2025-023', date: 'June 1, 2025', amount: '$8,750.00', service: 'AI Model Training', status: 'Paid' },
    { id: 'INV-2025-022', date: 'May 15, 2025', amount: '$4,200.00', service: 'Analytics Dashboard', status: 'Paid' }
  ];

  const tabs = ['Performance Benchmarks', 'Patient Experience', 'AI-Enabled Efficiency'];

  const navigateTo = (page: string) => {
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <style jsx global>{`
        /* Design System Variables */
        :root {
          /* Primary Colors */
          --ix-green: #00D4AA;
          --ix-green-dark: #00A886;
          --deep-navy: #0A1628;
          --navy-light: #1C2B3D;
          --pure-white: #FFFFFF;
          
          /* Secondary Colors */
          --light-gray: #F5F5F5;
          --medium-gray: #949494;
          --dark-gray: #333333;
          --black: #000000;
          
          /* Accent Colors */
          --success-green: #4CAF50;
          --warning-orange: #FF9800;
          --error-red: #F44336;
          --info-blue: #2196F3;
          
          /* Additional UI Colors */
          --border-color: #E0E0E0;
          --surface-light: #FAFAFA;
          
          /* Spacing */
          --spacing-xs: 4px;
          --spacing-sm: 8px;
          --spacing-md: 16px;
          --spacing-lg: 24px;
          --spacing-xl: 32px;
          --spacing-2xl: 48px;
          --spacing-3xl: 64px;
          --spacing-4xl: 96px;
          
          /* Typography */
          --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          --font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;
          
          /* Shadows */
          --shadow-sm: 0 2px 8px rgba(0,0,0,0.1);
          --shadow-md: 0 4px 16px rgba(0,0,0,0.15);
          --shadow-lg: 0 8px 24px rgba(0,0,0,0.2);
          
          /* Transitions */
          --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: var(--font-family);
          background-color: var(--light-gray);
          color: var(--dark-gray);
          line-height: 1.5;
          font-size: 16px;
        }

        /* Navigation */
        .top-nav {
          height: 72px;
          background-color: var(--deep-navy);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          padding: 0 var(--spacing-lg);
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          text-decoration: none;
        }

        .brand-icon {
          width: 40px;
          height: 40px;
          background: var(--pure-white);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ix-green);
          font-weight: 700;
          font-size: 20px;
        }

        .brand-text {
          font-size: 20px;
          font-weight: 700;
          color: var(--pure-white);
        }

        .brand-subtitle {
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          margin-left: var(--spacing-sm);
          padding-left: var(--spacing-sm);
          border-left: 1px solid rgba(255, 255, 255, 0.2);
        }

        .nav-links {
          display: flex;
          gap: var(--spacing-xl);
          align-items: center;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          padding: var(--spacing-sm) 0;
          position: relative;
          transition: color var(--transition-base);
          cursor: pointer;
          background: none;
          border: none;
        }

        .nav-link:hover {
          color: var(--pure-white);
        }

        .nav-link.active {
          color: var(--pure-white);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--ix-green);
        }

        .user-section {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--ix-green), var(--ix-green-dark));
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--pure-white);
          font-weight: 600;
          font-size: 14px;
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-weight: 600;
          font-size: 14px;
          color: var(--pure-white);
        }

        .user-role {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
        }

        /* Mobile menu */
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: var(--pure-white);
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-button {
            display: block;
          }
          
          .brand-subtitle {
            display: none;
          }
        }

        /* Mobile Navigation */
        .mobile-nav {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: var(--pure-white);
          box-shadow: var(--shadow-md);
        }

        .mobile-nav.active {
          display: block;
        }

        .mobile-nav-links {
          padding: var(--spacing-sm) var(--spacing-md);
        }

        .mobile-nav-link {
          display: block;
          padding: var(--spacing-sm) var(--spacing-md);
          color: var(--dark-gray);
          text-decoration: none;
          font-weight: 600;
          transition: background-color var(--transition-base);
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
        }

        .mobile-nav-link:hover {
          background-color: var(--light-gray);
        }

        /* Page Structure */
        .page {
          display: none;
          min-height: 100vh;
        }

        .page.active {
          display: block;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(180deg, var(--deep-navy) 0%, rgba(26, 38, 66, 0.95) 100%);
          padding: var(--spacing-3xl) 0;
          position: relative;
          overflow: hidden;
          margin-top: 72px;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--spacing-lg);
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-sm);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: 24px;
          margin-bottom: var(--spacing-xl);
        }

        .hero-badge-icon {
          width: 24px;
          height: 24px;
          background-color: var(--ix-green);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--pure-white);
          font-size: 12px;
        }

        .hero-badge-text {
          color: var(--pure-white);
          font-size: 14px;
          font-weight: 600;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: var(--pure-white);
          margin-bottom: var(--spacing-lg);
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: var(--spacing-2xl);
          line-height: 1.5;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-2xl);
          margin-top: var(--spacing-3xl);
        }

        .hero-stat {
          text-align: center;
        }

        .hero-stat-number {
          font-size: 40px;
          font-weight: 700;
          color: var(--ix-green);
          margin-bottom: var(--spacing-xs);
        }

        .hero-stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }

        /* Hero Background Elements */
        .hero-bg-circle-1 {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, var(--ix-green) 0%, transparent 70%);
          opacity: 0.1;
          filter: blur(100px);
        }

        .hero-bg-circle-2 {
          position: absolute;
          bottom: -150px;
          left: -150px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, var(--ix-green) 0%, transparent 70%);
          opacity: 0.05;
          filter: blur(100px);
        }

        /* Main Content Container */
        .main-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--spacing-2xl) var(--spacing-lg);
        }

        /* Section Headers */
        .section-header {
          margin-bottom: var(--spacing-xl);
        }

        .section-title {
          font-size: 32px;
          font-weight: 700;
          color: var(--dark-gray);
          margin-bottom: var(--spacing-sm);
        }

        .section-subtitle {
          font-size: 18px;
          color: var(--medium-gray);
        }

        /* Cards */
        .card {
          background-color: var(--pure-white);
          border-radius: 8px;
          padding: var(--spacing-lg);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-base);
          cursor: pointer;
          border: 1px solid transparent;
        }

        .card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: var(--ix-green);
        }

        .card-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--ix-green), var(--ix-green-dark));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--pure-white);
          font-size: 24px;
          margin-bottom: var(--spacing-md);
        }

        .card-icon-emoji {
          font-size: 48px;
          margin-bottom: var(--spacing-md);
        }

        .card-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--dark-gray);
          margin-bottom: var(--spacing-sm);
        }

        .card-description {
          font-size: 14px;
          color: var(--medium-gray);
          line-height: 1.6;
          margin-bottom: var(--spacing-md);
        }

        .card-tags {
          display: flex;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
          margin-bottom: var(--spacing-md);
        }

        .tag {
          display: inline-block;
          padding: var(--spacing-xs) var(--spacing-sm);
          background-color: rgba(0, 212, 170, 0.1);
          color: var(--ix-green);
          font-size: 12px;
          font-weight: 600;
          border-radius: 4px;
        }

        /* Grid Layouts */
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-lg);
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-lg);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: var(--spacing-lg);
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-lg);
        }

        /* Chat Assistant */
        .chat-card {
          background-color: var(--pure-white);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          height: 400px;
          display: flex;
          flex-direction: column;
        }

        .chat-header {
          background: linear-gradient(135deg, var(--ix-green), var(--ix-green-dark));
          color: var(--pure-white);
          padding: var(--spacing-md);
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chat-body {
          flex: 1;
          padding: var(--spacing-md);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .chat-message {
          max-width: 80%;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: 12px;
          font-size: 14px;
        }

        .chat-message.assistant {
          background-color: var(--light-gray);
          align-self: flex-start;
        }

        .chat-message.user {
          background: linear-gradient(135deg, var(--ix-green), var(--ix-green-dark));
          color: var(--pure-white);
          align-self: flex-end;
        }

        .chat-input-container {
          border-top: 1px solid var(--border-color);
          padding: var(--spacing-md);
          display: flex;
          gap: var(--spacing-sm);
        }

        .chat-input {
          flex: 1;
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: var(--spacing-sm) var(--spacing-md);
          font-family: var(--font-family);
          font-size: 14px;
          transition: border-color var(--transition-base);
        }

        .chat-input:focus {
          outline: none;
          border-color: var(--ix-green);
        }

        .chat-send-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--ix-green), var(--ix-green-dark));
          color: var(--pure-white);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-base);
        }

        .chat-send-btn:hover {
          transform: scale(1.05);
        }

        /* Buttons */
        .btn {
          padding: var(--spacing-sm) var(--spacing-lg);
          border-radius: 4px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all var(--transition-base);
          border: none;
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-sm);
          text-decoration: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--ix-green), var(--ix-green-dark));
          color: var(--pure-white);
        }

        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 212, 170, 0.3);
        }

        .btn-secondary {
          background-color: transparent;
          color: var(--ix-green);
          border: 2px solid var(--ix-green);
        }

        .btn-secondary:hover {
          background-color: var(--ix-green);
          color: var(--pure-white);
        }

        .btn-text {
          background: none;
          color: var(--ix-green);
          padding: 0;
          text-decoration: underline;
        }

        .btn-text:hover {
          color: var(--ix-green-dark);
        }

        /* Metrics Card */
        .metrics-card {
          background-color: var(--pure-white);
          border-radius: 8px;
          padding: var(--spacing-lg);
          box-shadow: var(--shadow-sm);
        }

        .metrics-tabs {
          display: flex;
          gap: var(--spacing-md);
          border-bottom: 1px solid var(--border-color);
          margin-bottom: var(--spacing-lg);
        }

        .metric-tab {
          padding: var(--spacing-sm) 0;
          font-weight: 600;
          color: var(--medium-gray);
          cursor: pointer;
          position: relative;
          transition: color var(--transition-base);
          background: none;
          border: none;
        }

        .metric-tab:hover {
          color: var(--dark-gray);
        }

        .metric-tab.active {
          color: var(--ix-green);
        }

        .metric-tab.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--ix-green);
        }

        .metrics-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
        }

        .metric-highlights {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .metric-item {
          background-color: var(--light-gray);
          padding: var(--spacing-md);
          border-radius: 6px;
        }

        .metric-value {
          font-size: 24px;
          font-weight: 700;
          color: var(--ix-green);
          margin-bottom: var(--spacing-xs);
        }

        .metric-label {
          font-size: 14px;
          color: var(--dark-gray);
          margin-bottom: var(--spacing-xs);
        }

        .metric-change {
          font-size: 12px;
          color: var(--medium-gray);
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-2xl);
        }

        .service-card {
          background-color: var(--pure-white);
          border-radius: 8px;
          padding: var(--spacing-xl);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-base);
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .service-header {
          display: flex;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--ix-green), var(--ix-green-dark));
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--pure-white);
          font-size: 36px;
        }

        .service-icon-emoji {
          font-size: 64px;
          margin-bottom: var(--spacing-md);
        }

        .service-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .service-actions {
          display: flex;
          gap: var(--spacing-sm);
          margin-top: auto;
          padding-top: var(--spacing-md);
        }

        /* Account Page Styles */
        .account-page-container {
          padding-top: calc(72px + var(--spacing-3xl));
        }

        .team-section {
          margin-bottom: var(--spacing-2xl);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-lg);
        }

        .team-member {
          text-align: center;
        }

        .team-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--ix-green), var(--ix-green-dark));
          margin: 0 auto var(--spacing-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--pure-white);
          font-weight: 600;
          font-size: 24px;
        }

        .team-name {
          font-weight: 600;
          color: var(--dark-gray);
          margin-bottom: var(--spacing-xs);
        }

        .team-role {
          font-size: 14px;
          color: var(--medium-gray);
        }

        /* Table Styles */
        .table-container {
          background-color: var(--pure-white);
          border-radius: 8px;
          padding: var(--spacing-lg);
          box-shadow: var(--shadow-sm);
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        thead th {
          text-align: left;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--medium-gray);
          padding: var(--spacing-sm) var(--spacing-md);
          border-bottom: 2px solid var(--border-color);
        }

        tbody tr {
          border-bottom: 1px solid var(--border-color);
          transition: background-color var(--transition-base);
        }

        tbody tr:hover {
          background-color: var(--light-gray);
        }

        tbody td {
          padding: var(--spacing-md);
          font-size: 14px;
          color: var(--dark-gray);
        }

        .download-icon {
          color: var(--ix-green);
          cursor: pointer;
          font-size: 18px;
          transition: color var(--transition-base);
        }

        .download-icon:hover {
          color: var(--ix-green-dark);
        }

        /* Footer CTA */
        .footer-cta {
          background: linear-gradient(135deg, var(--deep-navy), var(--navy-light));
          border-radius: 8px;
          padding: var(--spacing-3xl);
          text-align: center;
          color: var(--pure-white);
          margin-top: var(--spacing-3xl);
        }

        .footer-avatars {
          display: flex;
          justify-content: center;
          margin-bottom: var(--spacing-xl);
        }

        .footer-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--ix-green), var(--ix-green-dark));
          border: 3px solid var(--pure-white);
          margin: 0 -8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--pure-white);
          font-weight: 600;
        }

        .footer-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: var(--spacing-md);
        }

        .footer-subtitle {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: var(--spacing-xl);
        }

        /* Detail Page Styles */
        .detail-hero {
          background: linear-gradient(180deg, var(--deep-navy) 0%, rgba(26, 38, 66, 0.95) 100%);
          padding: var(--spacing-2xl) 0;
          color: var(--pure-white);
          margin-top: 72px;
        }

        .detail-hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--spacing-lg);
        }

        .back-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-sm);
          font-size: 14px;
          margin-bottom: var(--spacing-md);
          transition: color var(--transition-base);
          background: none;
          border: none;
          cursor: pointer;
        }

        .back-link:hover {
          color: var(--pure-white);
        }

        .detail-title {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: var(--spacing-lg);
        }

        .detail-subtitle {
          font-size: 20px;
          opacity: 0.9;
          line-height: 1.6;
        }

        /* Pills Navigation */
        .pills-nav {
          display: flex;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xl);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: var(--spacing-md);
        }

        .pill {
          padding: var(--spacing-sm) var(--spacing-lg);
          border-radius: 20px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all var(--transition-base);
          background-color: var(--light-gray);
          color: var(--dark-gray);
          border: none;
        }

        .pill:hover {
          background-color: rgba(0, 212, 170, 0.1);
          color: var(--ix-green);
        }

        .pill.active {
          background: linear-gradient(135deg, var(--ix-green), var(--ix-green-dark));
          color: var(--pure-white);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }

          .content-grid,
          .grid-2,
          .services-grid {
            grid-template-columns: 1fr;
          }

          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-stats {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }

          .metrics-content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 32px;
          }

          .section-title {
            font-size: 24px;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

          .user-info {
            display: none;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="top-nav">
        <div className="nav-container">
          <a href="#" className="brand-logo" onClick={(e) => { e.preventDefault(); navigateTo('dashboard'); }}>
            <div className="brand-icon">iX</div>
            <div className="brand-text">Healthcare</div>
            <div className="brand-subtitle">AI-Powered Excellence</div>
          </a>
          
          <div className="nav-links">
            {navLinks.map(link => (
              <button
                key={link.id}
                className={`nav-link ${activePage === link.page ? 'active' : ''}`}
                onClick={() => navigateTo(link.page)}
              >
                {link.label}
              </button>
            ))}
          </div>
          
          <div className="user-section">
            <div className="user-avatar">VM</div>
            <div className="user-info">
              <div className="user-name">Vanessa Mo</div>
              <div className="user-role">Healthcare Business</div>
            </div>
            <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-links">
            {navLinks.map(link => (
              <button
                key={link.id}
                className="mobile-nav-link"
                onClick={() => navigateTo(link.page)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Dashboard Page */}
      <div className={`page ${activePage === 'dashboard' ? 'active' : ''}`}>
        <div className="hero-section">
          <div className="hero-bg-circle-1"></div>
          <div className="hero-bg-circle-2"></div>
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <div className="hero-badge-icon">✓</div>
                <span className="hero-badge-text">Welcome back, Vanessa</span>
              </div>
              <h1 className="hero-title">Transform Healthcare Delivery with AI</h1>
              <p className="hero-subtitle">Your personalized dashboard for healthcare excellence powered by intelligent automation</p>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">22%</div>
                <div className="hero-stat-label">Reduction in average handle time</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">13.5%</div>
                <div className="hero-stat-label">Improvement in patient satisfaction</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">20%</div>
                <div className="hero-stat-label">Reduction in search time</div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-container">
          <div className="dashboard-grid">
            {/* Left Sidebar */}
            <div className="sidebar">
              {/* Chat Assistant */}
              <div className="chat-card">
                <div className="chat-header">
                  <span>iX Healthcare Assistant</span>
                  <MoreVertical className="w-5 h-5" />
                </div>
                <div className="chat-body">
                  <div className="chat-message assistant">
                    Hot off the presses! Your Team Space has the Q2 healthcare benchmarks.
                  </div>
                  <div className="chat-message assistant">
                    We have curated additional content, based on your interests:
                    <br />• Latest insights on emerging contact drivers
                    <br />• Automation case studies
                    <br />• Our latest thinking on KPIs of the future
                  </div>
                  <div className="chat-message user">
                    I want to know more about your benchmarks report...
                  </div>
                </div>
                <div className="chat-input-container">
                  <input type="text" className="chat-input" placeholder="Ask anything..." />
                  <button className="chat-send-btn">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Team Card */}
              <div className="card" style={{ marginTop: 'var(--spacing-lg)' }}>
                <h3 className="card-title">Your Healthcare Team</h3>
                <div style={{ display: 'flex', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                  {teamMembers.map((member, i) => (
                    <div key={i} className="user-avatar" style={{ width: '48px', height: '48px' }}>{member.initials}</div>
                  ))}
                </div>
                <p className="card-description">
                  Good, better or ugly we'd love to get your feedback on how we're doing. The survey should only take about 3 to 5 minutes of your time.
                </p>
                <button className="btn btn-text">Take Survey →</button>
              </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
              {/* Healthcare Insights */}
              <div className="metrics-card">
                <h2 className="card-title" style={{ marginBottom: 'var(--spacing-md)' }}>Healthcare Performance Insights</h2>
                <div className="metrics-tabs">
                  {tabs.map((tab, i) => (
                    <button
                      key={i}
                      className={`metric-tab ${activeTab === i ? 'active' : ''}`}
                      onClick={() => setActiveTab(i)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="metrics-content">
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: 'var(--spacing-md)' }}>Your Contact Center vs. Industry Peers</h3>
                    <p className="card-description">
                      Your healthcare contact center ranks in the top 15% for first call resolution and top 25% for patient satisfaction. Key opportunity areas include reducing average handle time for insurance verification.
                    </p>
                    <div className="metric-highlights">
                      <div className="metric-item">
                        <div className="metric-value">92%</div>
                        <div className="metric-label">First Contact Resolution</div>
                        <div className="metric-change">+8% vs. Industry Avg</div>
                      </div>
                      <div className="metric-item">
                        <div className="metric-value">3.2 min</div>
                        <div className="metric-label">Average Handle Time</div>
                        <div className="metric-change">Industry Avg: 4.1 min</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ backgroundColor: 'var(--light-gray)', borderRadius: '8px', padding: 'var(--spacing-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: 'var(--medium-gray)' }}>Performance Chart</span>
                  </div>
                </div>
              </div>

              {/* Quick Access Cards */}
              <div className="content-grid" style={{ marginTop: 'var(--spacing-lg)' }}>
                <div className="card">
                  <div className="card-icon-emoji">💰</div>
                  <h3 className="card-title">5000 Credits</h3>
                  <p className="card-description">
                    Your engagement credits can fund a 4-week CX consulting engagement. Want to dig deeper on that FCR rate?
                  </p>
                  <button className="btn btn-secondary">Request Info</button>
                </div>

                <div className="card">
                  <div className="card-icon-emoji">📋</div>
                  <h3 className="card-title">Agentic Readiness Assessment</h3>
                  <p className="card-description">
                    A diagnostic tool that shows how your data, org design, and platform readiness compare to industry best practices.
                  </p>
                  <button className="btn btn-primary">Start Assessment</button>
                </div>

                <div className="card">
                  <div className="card-icon-emoji">📊</div>
                  <h3 className="card-title">Healthcare Trends</h3>
                  <p className="card-description">
                    Top 10 Contact Drivers That Didn't Exist Last Year - discover shifting patient expectations and service gaps.
                  </p>
                  <button className="btn btn-secondary">Download Report</button>
                </div>

                <div className="card">
                  <div className="card-icon-emoji">🏆</div>
                  <h3 className="card-title">Success Stories</h3>
                  <p className="card-description">
                    How One Health System Automated 20% of Patient Inquiries - a detailed walkthrough of phased automation.
                  </p>
                  <button className="btn btn-secondary">Read Case Study</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Page */}
      <div className={`page ${activePage === 'solutions' ? 'active' : ''}`}>
        <div className="hero-section">
          <div className="hero-bg-circle-1"></div>
          <div className="hero-bg-circle-2"></div>
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">Healthcare Experience Solutions</h1>
              <p className="hero-subtitle">Transform patient experiences, clinical workflows, and administrative processes with AI-powered solutions designed specifically for healthcare</p>
            </div>
          </div>
        </div>

        <div className="main-container">
          <div className="section-header">
            <h2 className="section-title">Transforming Healthcare Experiences</h2>
            <p className="section-subtitle">Comprehensive solutions tailored for healthcare organizations</p>
          </div>

          <div className="services-grid">
            {serviceCards.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-emoji">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                <div className="card-tags">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="service-actions">
                  <button 
                    className="btn btn-primary" 
                    onClick={() => service.detailId && setActivePage('detail')}
                  >
                    Learn More
                  </button>
                  <button className="btn btn-secondary">Download Case Study</button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="footer-cta">
            <div className="footer-avatars">
              {['JS', 'RW', 'JK', 'MC', 'OP'].map((initials, i) => (
                <div key={i} className="footer-avatar">{initials}</div>
              ))}
            </div>
            <h3 className="footer-title">Don't see what you're looking for?</h3>
            <p className="footer-subtitle">Contact your healthcare team for custom solutions</p>
            <button className="btn btn-primary" style={{ background: 'var(--pure-white)', color: 'var(--deep-navy)' }}>Contact Your Team</button>
          </div>
        </div>
      </div>

      {/* Account Page */}
      <div className={`page ${activePage === 'account' ? 'active' : ''}`}>
        <div className="main-container account-page-container">
          <div className="section-header">
            <h1 className="section-title">Account Overview</h1>
            <p className="section-subtitle">Manage your team, services, and billing</p>
          </div>

          {/* Team Section */}
          <div className="team-section">
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
                <h2 className="card-title">Your Healthcare Team</h2>
                <button className="btn btn-text">Contact Team →</button>
              </div>
              <div className="team-grid">
                {teamMembers.map((member, i) => (
                  <div key={i} className="team-member">
                    <div className="team-avatar">{member.initials}</div>
                    <div className="team-name">{member.name}</div>
                    <div className="team-role">{member.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Credits Card */}
          <div className="grid-3" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <div className="card">
              <div className="card-icon-emoji">💰</div>
              <h3 className="card-title">5000 Credits</h3>
              <p className="card-description">
                Your engagement credits can fund a 4-week CX consulting engagement.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>

            <div className="card">
              <div className="card-icon-emoji">🎯</div>
              <h3 className="card-title">iX Healthcare Suite</h3>
              <p className="card-description">
                Upgrade to unlock advanced AI features, custom models, and enterprise support.
              </p>
              <button className="btn btn-secondary">Upgrade Now</button>
            </div>

            <div className="card">
              <div className="card-icon-emoji">📊</div>
              <h3 className="card-title">Usage Analytics</h3>
              <p className="card-description">
                Track your AI usage, performance metrics, and ROI across all services.
              </p>
              <button className="btn btn-secondary">View Dashboard</button>
            </div>
          </div>

          {/* Invoices Section */}
          <div className="table-container">
            <h2 className="card-title" style={{ marginBottom: 'var(--spacing-lg)' }}>Recent Invoices</h2>
            <table>
              <thead>
                <tr>
                  <th>Invoice #</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td>{invoice.id}</td>
                    <td>{invoice.date}</td>
                    <td>{invoice.amount}</td>
                    <td>{invoice.service}</td>
                    <td><span className="tag">{invoice.status}</span></td>
                    <td><Download className="download-icon" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Agentic Readiness Detail Page */}
      <div className={`page ${activePage === 'detail' ? 'active' : ''}`}>
        <div className="detail-hero">
          <div className="detail-hero-content">
            <button className="back-link" onClick={() => setActivePage('solutions')}>
              <ChevronLeft className="w-4 h-4" /> Back to Solutions
            </button>
            <h1 className="detail-title">Agentic Readiness for Healthcare</h1>
            <p className="detail-subtitle">
              Transform your healthcare organization with AI-powered autonomous agents that enhance clinical workflows, improve patient experiences, and streamline administrative processes while maintaining the highest standards of safety and compliance.
            </p>
          </div>
        </div>

        <div className="main-container">
          <div className="pills-nav">
            {['Overview', 'Implementation', 'Benefits', 'Case Studies', 'FAQs'].map((pill) => (
              <button
                key={pill}
                className={`pill ${activePill === pill.toLowerCase() ? 'active' : ''}`}
                onClick={() => setActivePill(pill.toLowerCase())}
              >
                {pill}
              </button>
            ))}
          </div>

          <div className="grid-3" style={{ marginBottom: 'var(--spacing-2xl)' }}>
            <div className="card">
              <div className="card-icon-emoji">📊</div>
              <h3 className="card-title">67%</h3>
              <p className="card-description">Reduction in routine processing time</p>
            </div>
            <div className="card">
              <div className="card-icon-emoji">😊</div>
              <h3 className="card-title">43%</h3>
              <p className="card-description">Increase in employee satisfaction</p>
            </div>
            <div className="card">
              <div className="card-icon-emoji">💰</div>
              <h3 className="card-title">3.8x</h3>
              <p className="card-description">ROI within the first year</p>
            </div>
          </div>

          <div className="section-header">
            <h2 className="section-title">Key Components of Agentic Readiness</h2>
            <p className="section-subtitle">A comprehensive approach to implementing autonomous agents in healthcare</p>
          </div>

          <div className="grid-3" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <div className="card">
              <div className="card-icon-emoji">🔍</div>
              <h3 className="card-title">Readiness Assessment</h3>
              <p className="card-description">
                Comprehensive evaluation of your organization's capabilities, data infrastructure, and process maturity to identify opportunities.
              </p>
            </div>
            <div className="card">
              <div className="card-icon-emoji">📊</div>
              <h3 className="card-title">Data Foundations</h3>
              <p className="card-description">
                Establish robust data architecture that autonomous agents require, including validation and appropriate access controls.
              </p>
            </div>
            <div className="card">
              <div className="card-icon-emoji">👥</div>
              <h3 className="card-title">Human-AI Collaboration</h3>
              <p className="card-description">
                Define optimal interaction models between your team and AI agents, with clear handoff protocols and oversight mechanisms.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <button className="btn btn-primary" style={{ fontSize: '16px', padding: 'var(--spacing-md) var(--spacing-xl)' }}>
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IXHealthcarePortal;