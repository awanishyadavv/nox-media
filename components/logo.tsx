"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/">
      <motion.div className="relative flex items-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <motion.path
            d="M50 10 L90 50 L50 90 L10 50 L50 10"
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
          />
          <motion.path
            d="M50 20 L80 50 L50 80 L20 50 L50 20"
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1, delay: 0.5 }}
          />
          <motion.path
            d="M50 30 L70 50 L50 70 L30 50 L50 30"
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1, delay: 1 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
          </defs>
        </svg>
        <div className="font-bold text-xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">NOX</span>
          <span className="text-white ml-1 font-light">Media</span>
        </div>
      </motion.div>
    </Link>
  )
}

