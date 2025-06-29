"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const blogData = [
  {
    src: "/Aurum.jpg",
    title: "Introducing Aurum: Your Always-On Digital Co-Founder",
    category: "AI & Automation",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          A look into Aurum, MidasCreed's flagship AI engine that automates operations, 
          enhances service delivery, and transforms how businesses interact with technology 
          — all accessible via WhatsApp.
        </p>
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          Aurum represents the next generation of business automation, seamlessly integrating 
          with your existing workflows to provide intelligent assistance around the clock. 
          From customer service to operational efficiency, Aurum is your digital co-founder 
          that never sleeps.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
            AI
          </span>
          <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-200">
            Automation
          </span>
          <span className="px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900 dark:text-purple-200">
            WhatsApp
          </span>
        </div>
      </div>
    ),
  },
  {
    src: "/QUBE.jpg",
    title: "QUBE: Quantum Resilience for African Cities",
    category: "Urban Development",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          How the Quantum Urban Balance Engine (QUBE) is leveraging hybrid weather forecasting 
          and emissions tracking for urban sustainability and SDG-aligned development across Africa.
        </p>
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          QUBE represents a revolutionary approach to urban planning, combining cutting-edge 
          quantum computing with environmental science to create resilient, sustainable cities 
          that can adapt to climate change and support the UN's Sustainable Development Goals.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
            Quantum Computing
          </span>
          <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-200">
            Sustainability
          </span>
          <span className="px-3 py-1 text-sm bg-orange-100 text-orange-800 rounded-full dark:bg-orange-900 dark:text-orange-200">
            SDG
          </span>
        </div>
      </div>
    ),
  },
  {
    src: "/TeleHealth.jpeg",
    title: "The TeleHealth Leap: Revolutionizing Care with AI",
    category: "Healthcare",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          Our journey building a flexible, accessible telemedicine platform, now generalized 
          for any health startup to offer virtual consultations, prescriptions, and follow-ups 
          — all powered by intelligent design.
        </p>
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          This platform democratizes healthcare access, making quality medical care available 
          to anyone with an internet connection. The AI-powered system ensures accurate 
          diagnoses and personalized treatment plans.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
            Telemedicine
          </span>
          <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-200">
            AI
          </span>
          <span className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded-full dark:bg-red-900 dark:text-red-200">
            Healthcare
          </span>
        </div>
      </div>
    ),
  },
  {
    src: "/Empathic voice.jpg",
    title: "Empathic Voice: The Future of Conversational AI",
    category: "AI & NLP",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          Exploring how Aurum uses empathic voice modulation and NLP enhancements to respond 
          to human tone, emotion, and intent in a way that feels truly personal.
        </p>
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          This breakthrough in conversational AI creates more human-like interactions, 
          understanding context, emotion, and subtle nuances in communication to provide 
          responses that feel genuinely empathetic and helpful.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
            NLP
          </span>
          <span className="px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900 dark:text-purple-200">
            Voice AI
          </span>
          <span className="px-3 py-1 text-sm bg-pink-100 text-pink-800 rounded-full dark:bg-pink-900 dark:text-pink-200">
            Empathy
          </span>
        </div>
      </div>
    ),
  },
  {
    src: "/PayChangu.png",
    title: "PayChangu Payments: Inline Simplicity Meets Server-Side Verification",
    category: "Fintech",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          How we integrated PayChangu into our apps to ensure secure, instant transactions 
          for bookings, with server-side verification for robust backend logic.
        </p>
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          This integration provides a seamless payment experience while maintaining the highest 
          security standards. The server-side verification ensures that every transaction 
          is legitimate and properly processed.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-200">
            Payments
          </span>
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
            Security
          </span>
          <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-900 dark:text-yellow-200">
            Integration
          </span>
        </div>
      </div>
    ),
  },
  {
    src: "/MCP.png",
    title: "Model Context Protocol: Scaling AI Responsiveness in Real-Time",
    category: "AI Infrastructure",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          An overview of our custom MCP servers that allow Aurum to remember context across 
          user sessions and workflows — crucial for enterprise-grade AI adoption.
        </p>
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          The Model Context Protocol enables seamless continuity in AI interactions, 
          maintaining conversation history and user preferences across sessions. This 
          creates a more personalized and efficient user experience.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
            MCP
          </span>
          <span className="px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900 dark:text-purple-200">
            Context
          </span>
          <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-200">
            Enterprise
          </span>
        </div>
      </div>
    ),
  },
];

export default function BlogPage() {
  const carouselItems = blogData.map((blog, index) => (
    <Card key={index} card={blog} index={index} />
  ));

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated backgrounds */}
      <StarsBackground className="z-0" />
      <ShootingStars className="z-0" />
      
      <div className="container py-8 mt-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Exploring the intersection of technology, innovation, and human potential. 
            Discover insights, breakthroughs, and stories from the forefront of AI and digital transformation.
          </p>
        </div>
        
        <Carousel items={carouselItems} />
      </div>
    </div>
  );
} 