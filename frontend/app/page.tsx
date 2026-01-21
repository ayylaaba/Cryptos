// // import { Link } from "lucide-react";
// import Image from "next/image";

// import Link from 'next/link'
// import { ArrowRight, TrendingUp, Shield, Zap, BarChart3 } from "lucide-react"
// import Navbar from "@/component/navbar";

// export default function Home() {
//   return (
//     <div className="flex items-center justify-center min-h-screen py-2">
//       <Navbar/>
//       <div className="flex flex-col justify-center items-center text-center ">
//         <section className="max-w-4xl max-auto mt-35">

//           <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -top-1 -left-20 animate-float" style={{ animationDelay: "0s" }}>
//             </div>
//             <div
//               className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl -bottom-10 -right-20 animate-float"
//               style={{ animationDelay: "1s" }}
//             ></div>
//           </div>

//           <div className="relative max-w-4xl mx-auto text-center animate-slide-in">
//             <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
//               <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
//                 Track Crypto. Trade Smart.
//               </span>
//             </h1>
//             <p className="text-lg sm:text-ml text-foreground/80 mb-8 leading-relaxed text-gray-400">
//               Real-time cryptocurrency insights, advanced charting, and AI-powered <br />
//               market analysis all in one premium platform.
//             </p>
//           </div>
//           <div className="relative flex flex-col sm:flex-row gap-2 justify-center max-w-auto max-w-7xl mx-auto animate-slide-in delay-200">
//             <Link href="/auth/register" className="w-50 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:scale-105  transition-all duration-300">
//               Get Started
//               <ArrowRight className="inline-block ml-2" />
//             </Link >
//             <Link href="/dashboard" className="ml-4 px-8 py-4 rounded-lg border-1 border-blue-300 text-foreground/80 hover:text-foreground transition-colors">
//               Learn More
//             </Link>
//           </div>
//           <div className="relative mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-in delay-400">
//             <div>
//               <h1 className="text-4xl font-bold text-indigo-800">10k+</h1>
//               <p>Active Trader</p>
//             </div>

//             <div>
//               <h1 className="text-4xl font-bold text-emerald-600">+ 1.2B $</h1>
//               <p>Volume Traded</p>
//             </div>

//             <div>
//               <h1 className="text-4xl font-bold text-green-500">24/7</h1>
//               <p>Market Converge</p>
//             </div>
//           </div>

//         </section>

//         <section id="features" className="w-full mx-auto mt-32 mb-16">
//           <h1 className="text-5xl font-bold mb-8">Powerful Features
//           </h1>

//           <p className="text-lg sm:text-ml mb-8 leading-relaxed text-gray-400">
//             Explore the cutting-edge features that make our platform the ultimate <br /> tool for cryptocurrency traders.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full ml-30 p-4 rounded-lg">
//             {
//               [
//                 {
//                   title: "Advanced Charting",
//                   description: "Interactive charts with multiple indicators to analyze market trends effectively.",
//                   icon: <TrendingUp className="w-8 h-8 text-primary mb-4" />
//                 },
//                 {
//                   title: "Secure Wallet",
//                   description: "State-of-the-art security features to protect your digital assets.",
//                   icon: <Shield className="w-8 h-8 text-primary mb-4" />
//                 },
//                 {
//                   title: "AI-Powered Insights",
//                   description: "Leverage artificial intelligence to gain market predictions and trading signals.",
//                   icon: <Zap className="w-8 h-8 text-primary mb-4" />
//                 },
//                 {
//                   title: "Portfolio Management",
//                   description: "Easily track and manage your cryptocurrency investments in one place.",
//                   icon: <BarChart3 className="w-8 h-8 text-primary mb-4" />
//                 }
//               ].map((feature,idx) => (
//                 <div
//                   key={idx}
//                   className="w-120 mr-20 rounded-lg p-6 border border-border/50 transition-all duration-300 hover:border-primary/50 hover:translate-y-[-2px] group bg-card/50 backdrop-blur-sm animate-slide-in"
//                   style={{ animationDelay: `${idx * 0.1}s` }}
//                 >
//                   <div className="flex items-start gap-2 ml-10">
//                     <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
//                       {feature.icon}
//                     </div>
//                     <div className="text-left">
//                       <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                       <p className="text-foreground/70">{feature.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </section>
        
//         <section className="max-w-4xl mx-auto h-100 mb-20  flex justify-center items-center ">
//           <div className="relativemax-w-7xl mx-auto text-center animate-slide-in rouneded-full p-8 bg-card/50 
//             backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 transition-all">
//             <h2 className="text-4xl font-bold mb-6">
//               Ready to Elevate Your Crypto Trading?
//             </h2>
//             <p className="text-lg sm:text-ml mb-8 leading-relaxed text-gray-400">
//               Join thousands of traders who trust our platform for real-time insights and advanced tools.
//             </p>
//             <Link href="/dashboard" className="w-50 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:scale-105 transition-all duration-300">
//               Start Trading Now
//               <ArrowRight className="inline-block ml-2" />
//             </Link >
//           </div>
//         </section>

//         {/* Footer */}
//         <section className="max-w-4xl mx-auto">
//           <footer className="w-full border-t border-border/30 py-6 mt-10 text-center">
//             <p className="text-sm text-foreground/60">
//               &copy; {new Date().getFullYear()} CryptoVault. All rights reserved.
//             </p>
//           </footer>
//         </section>
//       </div>
//     </div>
//   );
// }

import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  LineChart, 
  Lock, 
  Globe, 
  Users,
  CheckCircle,
  Sparkles,
  Rocket,
  Target,
  Award,
  Clock,
  DollarSign,
  Briefcase,
  Bell,
  Cpu,
  Server
} from "lucide-react"

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full border-b border-gray-800/50 z-50 backdrop-blur-xl bg-gray-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href='/' className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
              <span className="text-white font-bold text-lg">₿</span>
            </div>
          </div>
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              CryptoVault
            </span>
            <p className="text-xs text-gray-400">Professional Trading Platform</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors font-medium flex items-center gap-2">
            <Sparkles size={16} /> Features
          </a>
          <a href="#stats" className="text-gray-300 hover:text-white transition-colors font-medium flex items-center gap-2">
            <TrendingUp size={16} /> Stats
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors font-medium flex items-center gap-2">
            <Users size={16} /> Community
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/auth/login"
            className="px-5 py-2.5 text-gray-300 hover:text-white transition-colors font-medium hidden md:block"
          >
            Sign In
          </Link>
          <Link
            href="/auth/register"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight className="inline-block ml-2" size={18} />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default function page() {
  const stats = [
    { value: "10k+", label: "Active Traders", icon: Users, color: "from-blue-500 to-cyan-500", description: "Global community" },
    { value: "$1.2B+", label: "Volume Traded", icon: DollarSign, color: "from-emerald-500 to-green-500", description: "Daily average" },
    { value: "24/7", label: "Market Coverage", icon: Clock, color: "from-orange-500 to-red-500", description: "Real-time data" },
    { value: "99.9%", label: "Uptime", icon: Server, color: "from-purple-500 to-pink-500", description: "Service reliability" },
  ]

  const features = [
    {
      title: "Advanced Charting",
      description: "Professional-grade charts with 50+ technical indicators, drawing tools, and real-time market depth.",
      icon: LineChart,
      color: "from-blue-500 to-cyan-500",
      capabilities: ["50+ Indicators", "Custom Alerts", "Multiple Timeframes"]
    },
    {
      title: "Secure Wallet",
      description: "Institutional-grade security with multi-signature protection, cold storage, and insurance coverage.",
      icon: Lock,
      color: "from-emerald-500 to-green-500",
      capabilities: ["Multi-Sig", "Cold Storage", "Insurance"]
    },
    {
      title: "AI-Powered Insights",
      description: "Machine learning algorithms provide predictive analytics, sentiment analysis, and automated signals.",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      capabilities: ["Predictive Analytics", "Sentiment AI", "Auto Signals"]
    },
    {
      title: "Portfolio Management",
      description: "Comprehensive portfolio tracking with performance analytics, tax reporting, and risk assessment.",
      icon: Briefcase,
      color: "from-orange-500 to-amber-500",
      capabilities: ["Performance Tracking", "Tax Reports", "Risk Analysis"]
    },
  ]

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Professional Trader",
      text: "CryptoVault transformed my trading strategy. The AI insights are incredibly accurate.",
      image: "/avatar-1.jpg",
      profit: "+42% ROI"
    },
    {
      name: "Sarah Johnson",
      role: "Institutional Investor",
      text: "The security features give us confidence to manage large portfolios on the platform.",
      image: "/avatar-2.jpg",
      profit: "$5.8M Managed"
    },
    {
      name: "Marcus Rivera",
      role: "Crypto Fund Manager",
      text: "Best charting tools in the industry. The execution speed is unmatched.",
      image: "/avatar-3.jpg",
      profit: "+210% YTD"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl -top-20 -left-20 animate-float" 
             style={{ animationDelay: "0s" }}></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl -bottom-20 -right-20 animate-float"
             style={{ animationDelay: "2s" }}></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-500/10 to-green-500/10 blur-3xl top-1/2 left-1/4 animate-float"
             style={{ animationDelay: "4s" }}></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <Sparkles className="text-blue-400" size={16} />
              <span className="text-blue-400 text-sm font-medium">TRUSTED BY 10K+ TRADERS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                Advanced Crypto Trading
              </span>
              <br />
              <span className="text-white">Made Accessible</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Institutional-grade tools, AI-powered insights, and bank-level security in one 
              comprehensive platform for modern cryptocurrency traders.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/auth/register" 
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#features" 
                className="px-8 py-4 rounded-xl border-2 border-gray-700 text-gray-300 hover:text-white hover:border-blue-500/50 transition-all duration-300 flex items-center gap-2"
              >
                <BarChart3 size={20} />
                Explore Features
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div id="stats" className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} w-fit mb-4`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</p>
                <p className="text-gray-500 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Trading Tools</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to trade like a pro, whether you're a beginner or institutional investor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} w-fit`}>
                    <feature.icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 mb-6">{feature.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {feature.capabilities.map((cap, capIdx) => (
                        <span 
                          key={capIdx} 
                          className="px-3 py-1.5 rounded-full bg-gray-800/50 text-gray-300 text-sm font-medium"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Highlight */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Real-time Market Intelligence
                </h3>
                <p className="text-gray-400 mb-6">
                  Get instant access to market sentiment, order book analysis, and predictive price movements 
                  with our advanced AI algorithms.
                </p>
                <ul className="space-y-3">
                  {[
                    "Live order book visualization",
                    "Social sentiment analysis",
                    "Whale wallet tracking",
                    "Market maker activity"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="text-green-500" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="p-6 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl border border-blue-500/20">
                  <div className="text-center">
                    <Target className="w-16 h-16 mx-auto text-blue-400 mb-4" />
                    <p className="text-2xl font-bold text-white">0.05%</p>
                    <p className="text-gray-400">Average Execution Advantage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of successful traders and institutions who trust CryptoVault.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 w-fit">
                  <span className="text-green-400 font-semibold">{testimonial.profit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10"></div>
            <div className="relative z-10 p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Trading?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Start your 14-day free trial. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/auth/register" 
                  className="px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2"
                >
                  <Rocket size={20} />
                  Start Free Trial
                </Link>
                <Link 
                  href="/dashboard" 
                  className="px-8 py-4 rounded-xl bg-transparent border-2 border-white/30 text-white hover:border-white/50 transition-all flex items-center justify-center gap-2"
                >
                  Explore Demo
                  <ArrowRight size={20} />
                </Link>
              </div>
              <p className="text-white/60 text-sm mt-6">
                Join 10,000+ traders already using CryptoVault
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} CryptoVault. All rights reserved.
              </p>
              <div className="flex items-center gap-6 mt-2 md:mt-0">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">Discord</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">Telegram</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
