
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Film, Palette, PlaySquare, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { TimedPopup } from "@/components/timed-popup"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    quote: "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
    name: "Alex Johnson",
    title: "Film Director",
    avatar: "https://placehold.co/100x100.png"
  },
  {
    quote: "An essential partner for our marketing videos. The quality is always top-notch and they are a pleasure to work with.",
    name: "Samantha Lee",
    title: "Marketing Head",
    avatar: "https://placehold.co/100x100.png"
  },
  {
    quote: "The editing completely transformed our project. The attention to detail was incredible. Highly recommended!",
    name: "Michael Chen",
    title: "YouTuber",
    avatar: "https://placehold.co/100x100.png"
  },
    {
    quote: "Working with them was a breeze. They understood our vision perfectly and delivered beyond our expectations.",
    name: "Emily Rodriguez",
    title: "Startup Founder",
    avatar: "https://placehold.co/100x100.png"
  },
];


export default function Home() {

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <div className="flex flex-col min-h-screen pt-16">
        <motion.section
          id="hero"
          className="py-20 md:py-32"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                  Professional Video Editing, For Your Vision
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0 mb-8">
                  We provide high-quality, professional video editing services to bring your story to life. From corporate videos to cinematic films, we make your content shine.
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                  <Button size="lg" asChild className="transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1">
                    <Link href="/contact">Get in touch</Link>
                  </Button>
                </div>
              </div>
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <Image
                  src="https://cdn0.iconfinder.com/data/icons/web-illustrations-2/600/179-512.png"
                  alt="Video editing illustration"
                  width={500}
                  height={500}
                  className="mx-auto"
                  draggable="false"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="features" 
          className="py-20 bg-gradient-to-b from-background via-secondary/20 to-background"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold">Services We Offer</h3>
              <p className="text-muted-foreground mt-2">Everything you need for a stunning final cut.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={cardVariants}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                      <Film className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="mt-4">Cinematic Editing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Story-driven editing that captivates your audience from start to finish.</p>
                  </CardContent>
                </Card>
              </motion.div>
               <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={cardVariants}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                      <Palette className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="mt-4">Color Grading</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Professional color correction and grading to set the perfect mood and tone.</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={cardVariants}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                      <PlaySquare className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="mt-4">Motion Graphics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Engaging animations and titles to elevate your video's production value.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>

        <motion.section
          id="testimonials"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h3>
              <p className="text-muted-foreground mt-2">Real stories from happy collaborators.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="bg-secondary/30 border-border/50">
                    <CardContent className="pt-6 flex flex-col">
                        <div className="flex items-center mb-4">
                        <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                            draggable="false"
                        />
                        <div className="ml-4">
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                        </div>
                        <blockquote className="text-lg italic text-foreground/90 border-l-2 pl-4 border-primary/20">
                        {testimonial.quote}
                        </blockquote>
                    </CardContent>
                    </Card>
                ))}
            </div>
          </div>
        </motion.section>
      </div>
      <TimedPopup />
    </>
  )
}

