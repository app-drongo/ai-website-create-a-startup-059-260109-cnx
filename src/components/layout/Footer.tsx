'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  CreditCard,
  Shield,
  TrendingUp,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleCTA = () => {
    // Choose appropriate route based on context and available pages:
    // "/" available
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleNewsletterSignup = () => {
    // Handle newsletter subscription
    console.log('Newsletter signup initiated');
  };

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Digital Banking', href: '/' },
        { name: 'Payment Processing', href: '/' },
        { name: 'Investment Tools', href: '/' },
        { name: 'API Integration', href: '/' },
        { name: 'Mobile SDK', href: '/' },
        { name: 'Developer Portal', href: '/' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Business Banking', href: '/' },
        { name: 'Personal Finance', href: '/' },
        { name: 'Merchant Services', href: '/' },
        { name: 'Crypto Trading', href: '/' },
        { name: 'Lending Platform', href: '/' },
        { name: 'Wealth Management', href: '/' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/' },
        { name: 'Security Center', href: '/' },
        { name: 'API Documentation', href: '/' },
        { name: 'System Status', href: '/' },
        { name: 'Contact Support', href: '/' },
        { name: 'Community Forum', href: '/' },
      ],
    },
    {
      title: 'Compliance',
      links: [
        { name: 'Privacy Policy', href: '/' },
        { name: 'Terms of Service', href: '/' },
        { name: 'GDPR Compliance', href: '/' },
        { name: 'PCI DSS', href: '/' },
        { name: 'Regulatory Info', href: '/' },
        { name: 'Audit Reports', href: '/' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
  ];

  return (
    <footer className="bg-background border-t border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <CreditCard className="size-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">Fintech Startup</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Revolutionizing financial services with cutting-edge technology. Secure, scalable,
                and compliant solutions for modern banking, payments, and investment management.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">support@fintechstartup.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (888) 555-BANK</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Financial District, New York, NY</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Financial Insights</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3" onClick={handleNewsletterSignup}>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get market updates and fintech insights. Secure and unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Fintech Startup. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                <Shield className="size-3 text-primary" /> Bank-grade security
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border/30">
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Get Started
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs h-auto p-0 text-primary hover:text-primary/80"
              onClick={handleCTA}
            >
              Open Account
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
