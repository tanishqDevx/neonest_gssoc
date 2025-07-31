"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Github,
  ExternalLink,
  BookOpen,
  MessageCircle,
} from "lucide-react";

export default function NeoNestFooter() {
  const features = [
    { name: "Growth Tracker", href: "/Growth" },
    { name: "Feed Scheduler", href: "/Feeding" },
    { name: "Sleep Tracker", href: "/Sleep" },
    { name: "Vaccine Tracker", href: "/Medical" },
    { name: "Inventory Tracker", href: "/Essentials" },
  ];

  const support = [
    { name: "About NeoNest", href: "/" },
    { name: "FAQs", href: "/Faqs" },
    { name: "Resources", href: "/Resources" },
    { name: "NeoNest AI", href: "/NeonestAi" },
    { name: "Memories, Community & Blogs", href: "/Memories" },
  ];

  const projectLinks = [
    {
      name: "GitHub Repository",
      icon: Github,
      href: "https://github.com/AditiGupta-tech/neonest",
    },
    {
      name: "Live Website",
      icon: ExternalLink,
      href: "https://neonest-babycare.vercel.app/",
    },
    {
      name: "Contributing Guide",
      icon: BookOpen,
      href: "https://github.com/AditiGupta-tech/neonest/blob/main/Contributing.md",
    },
    {
      name: "GitHub Discussions",
      icon: MessageCircle,
      href: "https://github.com/AditiGupta-tech/neonest/discussions",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col justify-end">
      <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden shadow-2xl">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-400/60 to-transparent"></div>

        {/* Subtle floating elements */}
        <div className="absolute top-6 left-8 w-16 h-16 bg-pink-400/8 rounded-full blur-xl"></div>
        <div className="absolute top-8 right-12 w-20 h-20 bg-blue-400/8 rounded-full blur-xl"></div>
        <div className="absolute bottom-8 left-1/3 w-18 h-18 bg-purple-400/8 rounded-full blur-xl"></div>

        <div className="max-w-6xl mx-auto px-6 py-12 relative">
          {/* Main footer content */}
          <div className="flex flex-wrap lg:flex-nowrap lg:gap-20 mb-8">
            {/* Brand */}
            <div className="flex-shrink-0 lg:w-72 mb-8 lg:mb-0">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center gap-x-1 mb-2">
                    <Image
                      src="/logoFooter.png"
                      alt="NeoNest Logo"
                      width={40}
                      height={40}
                      className="object-contain -mt-1.5"
                    />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    NeoNest
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Supporting parents through their baby's incredible first year
                  with expert guidance, AI assistance, and a loving
                  community—making parenting 10x easier, calmer, and more
                  connected.
                </p>
                <div className="flex items-center space-x-2 text-pink-400 font-medium text-sm">
                  <span>Happy baby, Happy you!</span>
                  <Heart className="w-4 h-4 fill-current animate-pulse" />
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="min-w-0 flex-1 mb-6 lg:mb-0">
              <h3 className="text-base font-semibold text-white mb-3 flex items-center">
                <div className="w-1.5 h-4 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full mr-2"></div>
                Features
              </h3>
              <ul className="space-y-1.5">
                {features.map((item, index) => (
                  <li key={index} className="group">
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-pink-300 transition-colors duration-200 flex items-center text-sm"
                    >
                      <span className="w-1 h-1 bg-pink-400/70 rounded-full mr-2 group-hover:bg-pink-300 transition-colors"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="min-w-0 flex-1 mb-6 lg:mb-0">
              <h3 className="text-base font-semibold text-white mb-3 flex items-center">
                <div className="w-1.5 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-2"></div>
                Support
              </h3>
              <ul className="space-y-1.5">
                {support.map((item, index) => (
                  <li key={index} className="group">
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-blue-300 transition-colors duration-200 flex items-center text-sm"
                    >
                      <span className="w-1 h-1 bg-blue-400/70 rounded-full mr-2 group-hover:bg-blue-300 transition-colors"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Links */}
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-semibold text-white mb-3 flex items-center">
                <div className="w-1.5 h-4 bg-gradient-to-b from-green-400 to-blue-400 rounded-full mr-2"></div>
                Project Links
              </h3>
              <ul className="space-y-1.5">
                {projectLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <li key={index} className="group">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-green-300 transition-colors duration-200 flex items-center text-sm"
                      >
                        <span className="w-1 h-1 bg-green-400/70 rounded-full mr-2 group-hover:bg-green-300 transition-colors"></span>
                        <Icon className="w-4 h-4 mr-2" />
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-white/20 pt-4">
            <div className="text-center space-y-1">
              <div className="text-gray-300 text-sm flex items-center justify-center space-x-2">
                <span>© 2025 NeoNest by</span>
                <span className="font-semibold text-pink-300">Aditi Gupta</span>
                <span>• Released under the</span>
                <span className="font-semibold text-blue-300">
                  MIT License
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
                <span>for parents and babies</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
