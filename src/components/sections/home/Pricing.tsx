'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, TrendingUp, Shield, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  const handleEnterpriseContact = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Personal',
      description: 'Smart banking for individuals starting their financial journey',
      price: '$0',
      period: '/month',
      badge: null,
      features: [
        'Digital checking account',
        'Mobile banking app',
        'Basic investment tracking',
        'Budgeting tools',
        '24/7 customer support',
        'Fee-free ATM network',
      ],
      cta: 'Open Personal Account',
      popular: false,
      icon: <Clock className="size-5 text-primary" />,
    },
    {
      name: 'Premium',
      description: 'Advanced financial tools for wealth building and optimization',
      price: '$12',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Everything in Personal',
        'Automated investing portfolio',
        'Tax-loss harvesting',
        'Financial advisor access',
        'Premium market research',
        'Advanced analytics dashboard',
        'Priority customer support',
        'Cashback rewards program',
      ],
      cta: 'Start Premium Trial',
      popular: true,
      icon: <TrendingUp className="size-5 text-primary" />,
    },
    {
      name: 'Business',
      description: 'Complete financial solutions for growing businesses',
      price: '$49',
      period: '/month',
      badge: 'Best for Teams',
      features: [
        'Business checking & savings',
        'Expense management tools',
        'Payroll integration',
        'Invoice automation',
        'Multi-user access controls',
        'Advanced reporting suite',
        'Dedicated account manager',
        'API access for integrations',
      ],
      cta: 'Launch Business Account',
      popular: false,
      icon: <Shield className="size-5 text-primary" />,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            Transparent Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Banking That Grows
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              With Your Success
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the financial plan that matches your ambitions. No hidden fees, no minimum
            balances, and the flexibility to upgrade as you grow.
          </p>

          {/* Value Proposition */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <div className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              All plans include FDIC insurance up to $250,000
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge
                    variant="outline"
                    className="mb-4 mx-auto w-fit bg-accent/10 text-accent border-accent/20"
                  >
                    {plan.badge}
                  </Badge>
                )}

                <div className="flex justify-center mb-4">{plan.icon}</div>

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>

                {plan.name === 'Personal' && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Forever free • No monthly fees
                  </p>
                )}
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.name === 'Business' ? handleEnterpriseContact : handlePrimaryAction}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Premium' && (
                  <p className="text-center text-sm text-muted-foreground">
                    30-day free trial • Cancel anytime
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="bg-card border border-border/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Need Custom Financial Solutions?</h3>
            <p className="text-muted-foreground mb-6">
              We work with enterprises, investment firms, and financial institutions to create
              tailored banking and investment solutions that scale with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleScheduleDemo} variant="outline" size="lg">
                Schedule Consultation
              </Button>
              <Button onClick={handleSecondaryAction} size="lg">
                View Investment Guide
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by over 50,000 individuals and 2,000+ businesses
          </p>
          <div className="flex justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="size-4" />
              <span className="text-sm">Bank-level Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4" />
              <span className="text-sm">FDIC Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="size-4" />
              <span className="text-sm">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
