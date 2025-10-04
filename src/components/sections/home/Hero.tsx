'use client'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, Globe, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Hero() {
  const router = useRouter()
  const [counters, setCounters] = useState({ users: 0, countries: 0, uptime: 0, satisfaction: 0 })
  
  // ACTION_PLACEHOLDER_START
  // Primary CTA - main conversion action
  const handlePrimaryAction = () => {
    router.push('/get-started') // TARGET: /signup, /demo, /pricing
  }
  
  // Secondary CTA - engagement action
  const handleSecondaryAction = () => {
    router.push('/case-studies') // TARGET: /testimonials, /about, /results
  }
  
  // Badge action - optional navigation
  const handleBadgeAction = () => {
    router.push('/changelog') // TARGET: /updates, /blog, /news
  }
  // ACTION_PLACEHOLDER_END

  // Animate counters on mount
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps
    
    const targets = { users: 50000, countries: 120, uptime: 99.9, satisfaction: 98 }
    let currentStep = 0
    
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      setCounters({
        users: Math.floor(targets.users * easeOutQuart),
        countries: Math.floor(targets.countries * easeOutQuart),
        uptime: Math.floor(targets.uptime * easeOutQuart * 10) / 10,
        satisfaction: Math.floor(targets.satisfaction * easeOutQuart)
      })
      
      if (currentStep >= steps) clearInterval(timer)
    }, interval)
    
    return () => clearInterval(timer)
  }, [])

  const stats = [
    { 
      icon: Users, 
      value: counters.users.toLocaleString() + '+',
      label: 'Active users',
      color: 'text-primary'
    },
    { 
      icon: Globe, 
      value: counters.countries.toString(),
      label: 'Countries',
      color: 'text-primary'
    },
    { 
      icon: TrendingUp, 
      value: counters.uptime + '%',
      label: 'Uptime SLA',
      color: 'text-primary'
    },
    { 
      icon: Sparkles, 
      value: counters.satisfaction + '%',
      label: 'Satisfaction',
      color: 'text-primary'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <Badge 
              variant="secondary"
              className="px-4 py-1.5 cursor-pointer hover:bg-secondary/80 transition-colors"
              onClick={handleBadgeAction}
            >
              <TrendingUp className="size-3 mr-2" />
              Record-breaking growth in 2024
              <ArrowRight className="ml-2 size-3" />
            </Badge>
          </div>
          
          {/* Headline */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
              Trusted by teams
              <span className="block text-primary">worldwide</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of companies using our platform to accelerate growth, 
              streamline operations, and deliver exceptional results.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className={`inline-flex p-3 rounded-2xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                  <stat.icon className="size-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="group text-base px-8"
              onClick={handlePrimaryAction}
            >
              Start building today
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8"
              onClick={handleSecondaryAction}
            >
              View success stories
            </Button>
          </div>
          
          {/* Logo cloud */}
          <div className="pt-12 border-t border-border">
            <p className="text-center text-sm text-muted-foreground mb-8">
              Powering the world's best teams
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-8 w-28 bg-muted rounded animate-pulse"
                  aria-label={`Company logo ${i}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}