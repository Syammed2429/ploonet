"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

const notFoundAnimationUrl =
  "https://assets5.lottiefiles.com/packages/lf20_kcsr6fcp.json";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    setMounted(true);
    // Fetch the Lottie animation data
    fetch(notFoundAnimationUrl)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Oops! Page not found
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>

        {animationData && (
          <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link
          href="/"
          className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Go back home
        </Link>
      </motion.div>
    </div>
  );
}
