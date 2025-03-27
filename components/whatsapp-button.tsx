"use client"
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

export function WhatsAppButton() {
  const openWhatsApp = () => {
    const phoneNumber = "+918595866973" // Replace with your actual WhatsApp number
    const message = "Hi! I'm interested in your web development services. Can you help me?"
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <motion.button
      onClick={openWhatsApp}
      className="fixed bottom-4 right-4 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#128C7E] transition-colors duration-200 flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <FaWhatsapp size={24} />
    </motion.button>
  )
}

