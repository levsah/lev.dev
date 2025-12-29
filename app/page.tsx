"use client"

import { useState } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { BlogCard } from "@/components/blog-card"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  const featuredProjects = [
    {
      id: "Olympinomics",
      title: "Olympinomics",
      description:
        "Deep dive into how a Nation's GDP, Population, Geographical location influences their medal counts at the Olympics.",
      image:
        "https://static.vecteezy.com/system/resources/previews/022/792/120/non_2x/olympic-games-official-symbol-logo-white-abstract-design-with-black-background-free-vector.jpg",
      technologies: ["Pandas", "Sklearn", "Matplotlib"],
    },

    {
      id: "digital-twins",
      title: "Digital Twins with Smartwatches",
      description: "Investigating biosignal monitoring for unusual anomaly detection in public health measures.",
      image: "/digiTwin.png",
      technologies: ["Python", "Jupyter Notebook", "Sklearn"],
    },
  ]

  const latestPosts = [
    {
      id: "future-treble-winners",
      title: "The Philosophy of Poker",
      excerpt: "What a card game reveals about life, trust, and human nature.",
      date: "2025-12-25",
      readingTime: "8 min read",
    },
  ]

  const skills = [
    "Python",
    "SQL",
    "Jupyter Notebook",
    "sklearn",
    "matplotlib",
    "pandas",
    "NumPy",
    "TensorFlow",
    "PyTorch",
    "Seaborn",
    "React",
    "AWS",
  ]

  return (
    <div className="space-y-16">
      <section className="py-12">
        <Terminal
          text="Levy Sahoo (levsah) is Data Science student @ UC San Diego. Loves exploring and learning about all things in Tech (AI/ML/DS), Business (FinTech/Banking/VC/Startups), and Sports. FC Barcelona fan, Minnesota Sports enthusiast, and enjoys cooking / trying new dishes. Welcome to Lev.Dev"
          typingSpeed={40}
          className="max-w-3xl mx-auto"
          onComplete={() => setIntroComplete(true)}
        />

        {introComplete && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
            >
              Learn more about me <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Involvements</h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">organizations.levsah</div>
          </div>
          <div className="terminal-content overflow-hidden">
            <div className="relative flex overflow-x-hidden">
              <div className="animate-marquee flex items-center gap-16 py-6">
                <div className="flex items-center justify-center min-w-[200px] h-24 grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="/ucsd-logo.png" alt="UC San Diego Logolol" className="object-contain max-h-20" />
                </div>
                <div className="flex items-center justify-center min-w-[200px] h-24 grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="/wells-fargo-logo.png" alt="Wells Fargo Logo" className="object-contain max-h-20" />
                </div>
                <div className="flex items-center justify-center min-w-[200px] h-24 grayscale hover:grayscale-0 transition-all duration-300">
                  <img
                    src="/Ameri-Arrow.png"
                    alt="Ameriprise Financial Logo"
                    className="object-contain max-h-20"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[200px] h-24 grayscale hover:grayscale-0 transition-all duration-300">
                  <img
                    src="/sd-county.png"
                    alt="Sheriff's Department Logo"
                    className="object-contain max-h-20"
                  />
                </div>
              </div>
              <div className="absolute top-0 animate-marquee2 flex items-center gap-16 py-6">
                <div className="flex items-center justify-center min-w-[200px] h-24 grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="/ucsd-logo.png" alt="UC San Diego Logo" className="object-contain max-h-20" />
                </div>
                <div className="flex items-center justify-center min-w-[200px] h-24 grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="/wells-fargo-logo.png" alt="Wells Fargo Logo" className="object-contain max-h-20" />
                </div>
                <div className="flex items-center justify-center min-w-[200px] h-24 grayscale hover:grayscale-0 transition-all duration-300">
                  <img
                    src="/Ameri-Arrow.png"
                    alt="Ameriprise Financial Logo"
                    className="object-contain max-h-20"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[200px] h-24 grayscale hover:grayscale-0 transition-all duration-300">
                  <img
                    src="/sd-county.png"
                    alt="Sheriff's Department Logo"
                    className="object-contain max-h-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">lately</h2>
          <Link href="/projects" className="text-primary hover:underline inline-flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Toolkit</h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">toolkit.levsah</div>
          </div>
          <div className="terminal-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-white">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Latest from My Passions</h2>
          <Link href="/passions" className="text-primary hover:underline inline-flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>
    </div>
  )
}
