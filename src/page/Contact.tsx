
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thanks ${name}! Message received.`)
    setName('')
    setEmail('')
    setMessage('')
  }

  // Animation variants for staggered form fields
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="page contact">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.label variants={itemVariants}>
            Name
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </motion.label>

          <motion.label variants={itemVariants}>
            Email
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </motion.label>

          <motion.label variants={itemVariants}>
            Message
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={6}
              required
            />
          </motion.label>

          <motion.button
            type="submit"
            className="animated-btn"
            whileHover={{ scale: 1.05, backgroundColor: '#1d4ed8' }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
  

