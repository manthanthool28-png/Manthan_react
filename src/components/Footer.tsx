/*

import React from 'react'
import { FaInstagram, FaBehance, FaLinkedin } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="social-links">
        <a
          href="https://www.instagram.com/deadpool.619/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.behance.net/manthanthool"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Behance"
        >
          <FaBehance />
        </a>
        <a
          href="https://in.linkedin.com/in/manthanthool28?original_referer=https%3A%2F%2Fwww.google.com%2F"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Manthan Thool | UI Designer </p>
    </footer>
  )
}

export default Footer


*/

import React from 'react'
import { FaInstagram, FaBehance, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { staggerChildren: 0.2, duration: 0.6 } 
    }
  }

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="site-footer">
      <motion.div
        className="social-links"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="https://instagram.com/deadpool.619/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          variants={iconVariants}
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          href="https://www.behance.net/manthanthool"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Behance"
          variants={iconVariants}
        >
          <FaBehance />
        </motion.a>
        <motion.a
          href= " https://in.linkedin.com/in/manthanthool28?original_referer=https%3A%2F%2Fwww.google.com%2F"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          variants={iconVariants}
        >
          <FaLinkedin />
        </motion.a>
      </motion.div>
      <p>© {new Date().getFullYear()} Manthan Thool | UI Designer</p>
    </footer>
  )
}

export default Footer

