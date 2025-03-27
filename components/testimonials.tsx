"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "NOX Media created a website that perfectly captured my brand's essence. Their attention to detail and responsive design have contributed to a significant increase in my online inquiries and sales. Truly impressed!",
      author: "Arjun Malhotra",
      position: "Founder",
      location: "Mumbai",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "The SEO strategy NOX Media implemented has transformed our business. We're now ranking on page one for all our target keywords, and our organic traffic has increased by over 200%. Their team is knowledgeable and professional.",
      author: "Meera Rajput",
      position: "Marketing Director",
      location: "Delhi",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "Working with NOX Media has been a game-changer for our e-commerce store. They redesigned our user experience and implemented conversion optimization strategies that have significantly improved our sales. Highly recommended!",
      author: "Vikram Singhania",
      position: "CEO",
      location: "Bangalore",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Are Saying</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with NOX Media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/50 backdrop-blur-sm border border-white/10 h-full">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.position} - {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

