"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Terminal } from "@/components/terminal"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AboutPage() {
  const [introComplete, setIntroComplete] = useState(false)
  const [bioComplete, setBioComplete] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Use useEffect to ensure we're only rendering the Terminal component on the client
  useEffect(() => {
    setIsClient(true)
  }, [])

  const experiences = [
    {
      title: "Operations Analyst Intern",
      company: "Wells Fargo",
      period: "Summer 2025",
      description:
        "Initiated GenAI Integration within the Wealth Management Division using Natural Language Processing techniques for Wealth Management Analysts to utilize while navigating the onboarding process and optimize efficiency in task responsibilities. Meeting Summarization App, Document Parsing System, Auditing Reconciliation Platform.",
    },
    {
      title: "Software Engineering Intern",
      company: "Ameriprise Financial",
      period: "Summer 2024",
      description:
        "Created JavaScript Templates for Timeline Infographics. Resized them to ensure compability across all device screen sizes. My projects helped Advisors pitch Ameriprise to recruit potential clients.",
    },
    {
      title: "Data Science Intern",
      company: "SD County Sheriff's Department",
      period: "Summer 2023",
      description: "Restructured datasets, learned SQL, and made a classification prediction model for Convict Charges",
    },
  ]

  const skills = [
    { category: "Languages", items: ["Python", "Type/JavaScript", "SQL", "R", "Matlab", "Stata"] },
    { category: "Frontend", items: ["React", "Next.js", "Vue.js", "CSS/SCSS", "Tailwind CSS"] },
    {
      category: "Office Tools",
      items: ["Jira", "Confluence", "BitBucket", "Jenkins", "Git", "Microsoft Office Suite"],
    },
    {
      category: "AI/ML - Data Science Toolkit",
      items: ["Matplotlib", "PyTorch", "Plotly", "Apache Spark", "Sci-kit Learn"],
    },
  ]

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" }) // Reset form
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <div className="space-y-16">
      <section>
        {isClient && (
          <>
            <Terminal
              text="Initializing personal profile... Access granted. Loading bio data..."
              typingSpeed={30}
              className="max-w-3xl mx-auto"
              onComplete={() => setIntroComplete(true)}
            />

            {introComplete && (
              <Terminal
                text="Hey! I'm Levy. A Data Science Major @ UC San Diego with a passion for learning about all things AI/ML, Finance, Sports, Business and building cool stuff. Welcome!"
                typingSpeed={20}
                className="max-w-3xl mx-auto mt-4"
                showPrompt={false}
                onComplete={() => setBioComplete(true)}
              />
            )}
          </>
        )}
      </section>

      {(bioComplete || !isClient) && (
        <>
          <section>
            <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-button terminal-button-red"></div>
                    <div className="terminal-button terminal-button-yellow"></div>
                    <div className="terminal-button terminal-button-green"></div>
                    <div className="terminal-title">{exp.company}.ls</div>
                  </div>
                  <div className="terminal-content">
                    <p className="mb-1">
                      <span className="text-primary">$</span> internship.txt
                    </p>
                    <div className="mb-2">
                      <p>
                        <span className="text-primary">title:</span> {exp.title}
                      </p>
                      <p>
                        <span className="text-primary">period:</span> {exp.period}
                      </p>
                      <p>
                        <span className="text-primary">description:</span> {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">System Specs</h2>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">skills.ls</div>
              </div>
              <div className="terminal-content">
                <p className="mb-4">
                  <span className="text-primary">$</span> levsah /tech/skills
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-primary font-bold">{skillGroup.category}</h3>
                      <ul className="space-y-1">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-center gap-2">
                            <span className="text-primary">-</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                  <div className="terminal-title">contact_form.ls</div>
                </div>
                <div className="terminal-content">
                  <p className="mb-4">
                    <span className="text-primary">$</span> ./send_message.ls
                  </p>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm mb-1">
                        <span className="text-primary">name:</span>
                      </label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        className="bg-background border-border"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-1">
                        <span className="text-primary">email:</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-background border-border"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm mb-1">
                        <span className="text-primary">message:</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        rows={4}
                        className="bg-background border-border"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    {submitStatus === "success" && (
                      <p className="text-green-600 text-sm">
                        <span className="text-primary">$</span> Message sent successfully!
                      </p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-red-600 text-sm">
                        <span className="text-primary">$</span> Error sending message. Please try again.
                      </p>
                    )}
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </div>

              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                  <div className="terminal-title">network_connections.ls</div>
                </div>
                <div className="terminal-content">
                  <p className="mb-4">
                    <span className="text-primary">$</span> ntwk/w/levsah
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-primary">github:</p>
                      <Link
                        href="https://github.com/levsah"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        github.com/levsah
                      </Link>
                    </div>
                    <div>
                      <p className="mb-1 text-primary">linkedin:</p>
                      <Link
                        href="https://www.linkedin.com/in/levy-sahoo"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={16} />
                        linkedin.com/in/levy-sahoo
                      </Link>
                    </div>
                    <div>
                      <p className="mb-1 text-primary">Email:</p>
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        sahoolevy@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
