// import { Link } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Zap, BarChart3 } from "lucide-react"


export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen py-2">
      <div className="flex flex-col justify-center items-center text-center ">
        <section className="max-w-4xl max-auto mt-18">

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -top-1 -left-20 animate-float" style={{ animationDelay: "0s" }}>
            </div>
            <div
              className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl -bottom-10 -right-20 animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center animate-slide-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                Track Crypto. Trade Smart.
              </span>
            </h1>
            <p className="text-lg sm:text-ml text-foreground/80 mb-8 leading-relaxed text-gray-400">
              Real-time cryptocurrency insights, advanced charting, and AI-powered <br />
              market analysis all in one premium platform.
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-2 justify-center max-w-auto max-w-7xl mx-auto animate-slide-in delay-200">
            <Link href="/dashboard" className="w-50 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:scale-105  transition-all duration-300">
              Get Started
              <ArrowRight className="inline-block ml-2" />
            </Link >
            <Link href="/dashboard" className="ml-4 px-8 py-4 rounded-lg border-1 border-blue-300 text-foreground/80 hover:text-foreground transition-colors">
              Learn More
            </Link>
          </div>
          <div className="relative mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-in delay-400">
            <div>
              <h1 className="text-4xl font-bold text-indigo-800">10k+</h1>
              <p>Active Trader</p>
            </div>

            <div>
              <h1 className="text-4xl font-bold text-emerald-600">+ 1.2B $</h1>
              <p>Volume Traded</p>
            </div>

            <div>
              <h1 className="text-4xl font-bold text-green-500">24/7</h1>
              <p>Market Converge</p>
            </div>
          </div>

        </section>

        <section id="features" className="max-w-4xl mx-auto mt-32 mb-16">
          <h1 className="text-5xl font-bold mb-8">Powerful Features
          </h1>

          <p className="text-lg sm:text-ml mb-8 leading-relaxed text-gray-400">
            Explore the cutting-edge features that make our platform the ultimate <br /> tool for cryptocurrency traders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {
              [
                {
                  title: "Advanced Charting",
                  description: "Interactive charts with multiple indicators to analyze market trends effectively.",
                  icon: <TrendingUp className="w-8 h-8 text-primary mb-4" />
                },
                {
                  title: "Secure Wallet",
                  description: "State-of-the-art security features to protect your digital assets.",
                  icon: <Shield className="w-8 h-8 text-primary mb-4" />
                },
                {
                  title: "AI-Powered Insights",
                  description: "Leverage artificial intelligence to gain market predictions and trading signals.",
                  icon: <Zap className="w-8 h-8 text-primary mb-4" />
                },
                {
                  title: "Portfolio Management",
                  description: "Easily track and manage your cryptocurrency investments in one place.",
                  icon: <BarChart3 className="w-8 h-8 text-primary mb-4" />
                }
              ].map((feature,idx) => (
                <div
                  key={idx}
                  className="rounded-lg p-6 border border-border/50 transition-all duration-300 hover:border-primary/50 hover:translate-y-[-2px] group bg-card/50 backdrop-blur-sm animate-slide-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                      {feature.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-foreground/70">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto h-100 mb-20  flex justify-center items-center ">
          <div className="relativemax-w-7xl mx-auto text-center animate-slide-in rouneded-full p-8 bg-card/50 
            backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 transition-all">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Elevate Your Crypto Trading?
            </h2>
            <p className="text-lg sm:text-ml mb-8 leading-relaxed text-gray-400">
              Join thousands of traders who trust our platform for real-time insights and advanced tools.
            </p>
            <Link href="/dashboard" className="w-50 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:scale-105 transition-all duration-300">
              Start Trading Now
              <ArrowRight className="inline-block ml-2" />
            </Link >
          </div>
        </section>

        {/* Footer */}
        <section className="max-w-4xl mx-auto">
          <footer className="w-full border-t border-border/30 py-6 mt-10 text-center">
            <p className="text-sm text-foreground/60">
              &copy; {new Date().getFullYear()} CryptoVault. All rights reserved.
            </p>
          </footer>
        </section>
      </div>
    </div>
  );
}
