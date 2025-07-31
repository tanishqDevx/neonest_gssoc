"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Facebook, Twitter, Instagram, Github, ExternalLink, Users, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

// Soft Floating Hearts Background Component
const FloatingHeartsBackground = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    left: Math.random() * 100,
    animationDelay: Math.random() * 20,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-200/20"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 0.6, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.animationDelay,
            ease: "easeInOut",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

// Soft Gradient Orbs Background
const SoftGradientOrbs = () => {
  const orbs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 20 + 15,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full opacity-10"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            background: `radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(219, 39, 119, 0.1) 50%, transparent 100%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [-20, 20, -20],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-pink-50 via-white to-rose-50 text-gray-800 py-12 px-4 overflow-hidden border-t border-pink-100">
      {/* Soft Background Effects */}
      <SoftGradientOrbs />
      <FloatingHeartsBackground />
      
      {/* Main Content */}
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-x-2 mb-4">
              <Image
                src="/logoFooter.png"
                alt="NeoNest Logo"
                width={40}
                height={40}
                className="object-contain"  
              />
              <span className="font-semibold text-xl text-pink-600">NeoNest</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Supporting parents through their baby's incredible first year with expert guidance, AI assistance, and a loving community—making parenting 10x easier, calmer, and more connected.
            </p>
            <p className="text-pink-500 font-medium text-sm mt-2">
              Happy baby, Happy you! ❤️
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-pink-600">Features</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/Growth" className="hover:text-pink-500 transition-colors block py-1 hover:translate-x-1 transform duration-200">
                  Growth Tracker
                </Link>
              </li>
              <li>
                <Link href="/Feeding" className="hover:text-pink-500 transition-colors block py-1 hover:translate-x-1 transform duration-200">
                  Feed Scheduler
                </Link>
              </li>
              <li>
                <Link href="/Sleep" className="hover:text-pink-500 transition-colors block py-1 hover:translate-x-1 transform duration-200">
                  Sleep Tracker
                </Link>
              </li>
              <li>
                <Link href="/Medical" className="hover:text-pink-500 transition-colors block py-1 hover:translate-x-1 transform duration-200">
                  Vaccine Tracker
                </Link>
              </li>
              <li>
                <Link href="/Essentials" className="hover:text-pink-500 transition-colors block py-1 hover:translate-x-1 transform duration-200">
                  Inventory Tracker
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-pink-600">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-pink-500 transition-colors block py-1 hover:translate-x-1 transform duration-200">
                  About NeoNest
                </Link>
              </li>
              <li>
                <Link href="/Faqs" className="hover:text-pink-500 transition-colors block py-1 hover:translate-x-1 transform duration-200">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/Resources" className="hover:text-pink-500 transition-colors block py-1 hover:translate-x-1 transform duration-200">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/NeonestAi" className="hover:text-pink-500 transition-colors block py-1 hover:translate-x-1 transform duration-200">
                  NeoNest AI
                </Link>
              </li>
              <li>
                <Link href="/Memories" className="hover:text-pink-500 transition-colors block py-1 hover:translate-x-1 transform duration-200">
                  Memories, Community & Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Project Links & Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-pink-600">Project Links</h4>
            
            {/* Project Links */}
            <div className="mb-6">
              <div className="space-y-2 text-sm text-gray-600">
                <a href="https://github.com/AditiGupta-tech/neonest" className="flex items-center gap-2 hover:text-pink-500 transition-colors py-1 hover:translate-x-1 transform duration-200">
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <a href="https://neonest-babycare.vercel.app/" className="flex items-center gap-2 hover:text-pink-500 transition-colors py-1 hover:translate-x-1 transform duration-200">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Website</span>
                </a>
                <a href="https://github.com/AditiGupta-tech/neonest/blob/main/Contributing.md" className="flex items-center gap-2 hover:text-pink-500 transition-colors py-1 hover:translate-x-1 transform duration-200">
                  <Users className="w-4 h-4" />
                  <span>Contributing Guide</span>
                </a>
                <a href="https://github.com/AditiGupta-tech/neonest/discussions" className="flex items-center gap-2 hover:text-pink-500 transition-colors py-1 hover:translate-x-1 transform duration-200">
                  <MessageSquare className="w-4 h-4" />
                  <span>GitHub Discussions</span>
                </a>
              </div>
            </div>
        {/* Footer Bottom */}
        <div className="border-t border-pink-200 pt-6 text-center">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-600">
              © 2025 NeoNest by <span className="text-pink-600 font-medium">Aditi Gupta</span>. 
              Released under the <span className="text-pink-600">MIT License</span>.
            </p>
            <p className="text-sm text-gray-600">
              Made with <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-pink-500 inline-block"
              >❤️</motion.span> for parents and babies.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;