'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  Shield,
  Smartphone,
  Clock,
  PieChart,
  CreditCard,
  DollarSign,
  Users,
  Banknote,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Smart Investment Tracking',
      description:
        'Real-time portfolio monitoring with AI-powered insights and automated rebalancing recommendations.',
      badge: 'Investment',
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description:
        '256-bit encryption, multi-factor authentication, and FDIC insurance protection for your peace of mind.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Mobile Banking',
      description:
        'Complete banking experience on your phone with instant transfers, bill pay, and expense tracking.',
      badge: 'Mobile',
    },
    {
      icon: Clock,
      title: 'Instant Transactions',
      description:
        'Send money, pay bills, and make investments in seconds with our lightning-fast processing.',
      badge: 'Speed',
    },
    {
      icon: PieChart,
      title: 'Wealth Analytics',
      description:
        'Comprehensive financial dashboards with spending insights, savings goals, and investment performance.',
      badge: 'Analytics',
    },
    {
      icon: CreditCard,
      title: 'Smart Debit Cards',
      description:
        'Contactless payments with real-time spending notifications and automatic cashback rewards.',
      badge: 'Payments',
    },
    {
      icon: DollarSign,
      title: 'High-Yield Savings',
      description: 'Earn 4.5% APY on savings accounts with no minimum balance and no monthly fees.',
      badge: 'Savings',
    },
    {
      icon: Users,
      title: 'Business Solutions',
      description:
        'Streamlined business banking with invoicing, payroll integration, and expense management tools.',
      badge: 'Business',
    },
    {
      icon: Banknote,
      title: 'Automated Investing',
      description:
        'Set-and-forget investment strategies with automatic deposits and diversified portfolio management.',
      badge: 'Automation',
    },
  ];

  const handleOpenAccount = () => {
    console.log('Opening account flow initiated');
    // Account opening logic here
  };

  const handleViewGuide = () => {
    console.log('Investment guide requested');
    // Investment guide logic here
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Financial Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Modern Banking for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Smart Investors
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience the future of finance with our comprehensive suite of banking, investment,
            and wealth management tools designed for today's entrepreneurs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to transform your financial future?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleOpenAccount}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Open Account
            </button>
            <button
              onClick={handleViewGuide}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Investment Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
