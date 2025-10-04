'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Sparkles,
  Users,
  Zap,
  Shield,
  TrendingUp,
  DollarSign,
  Lock,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Cta() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const stats = [
    { value: '$2.4B+', label: 'Assets Managed', icon: TrendingUp },
    { value: '99.9%', label: 'Uptime SLA', icon: Shield },
    { value: '50K+', label: 'Active Accounts', icon: Users },
    { value: '4.5%', label: 'Savings APY', icon: DollarSign },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-0 left-1/4 size-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 size-96 bg-accent/20 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA */}
        <Card className="border-primary/20 bg-background/80 backdrop-blur-sm shadow-2xl shadow-primary/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          <CardContent className="relative p-12 lg:p-16">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-8">
                <Sparkles className="size-4 mr-2" />
                FDIC Insured • Bank-Grade Security
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Ready to Transform Your
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Financial Future?
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Join over 50,000 smart investors and savers who trust Fintech Startup with their
                financial goals. Start earning 4.5% APY on savings and get AI-powered investment
                insights today.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button
                  size="lg"
                  className="group text-base px-8 py-4"
                  onClick={handlePrimaryAction}
                >
                  Open Account
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-4"
                  onClick={handleSecondaryAction}
                >
                  Investment Guide
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="text-center mb-12">
                <p className="text-sm text-muted-foreground mb-6">
                  Trusted by leading financial institutions and backed by top-tier investors
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {/* Financial partner logos placeholders */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-24 bg-gradient-to-r from-muted to-muted/50 rounded opacity-50"
                    />
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="size-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="size-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <DollarSign className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold">No Minimum Balance</h3>
              <p className="text-sm text-muted-foreground">
                Start with any amount, earn 4.5% APY from day one
              </p>
            </div>

            <div className="space-y-2">
              <div className="size-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Lock className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold">FDIC Protected</h3>
              <p className="text-sm text-muted-foreground">
                Your deposits insured up to $250,000 per account
              </p>
            </div>

            <div className="space-y-2">
              <div className="size-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Zap className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold">Instant Setup</h3>
              <p className="text-sm text-muted-foreground">
                Open your account in under 3 minutes with mobile verification
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
