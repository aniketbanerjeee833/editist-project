
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
import { Badge } from "@/components/ui/badge"

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
              <Badge variant="outline" className="mb-4">TESTIMONIALS</Badge>
              <h3 className="text-3xl md:text-4xl font-bold">Don't take our word for it!</h3>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Hear it from our partners who have experienced our service first-hand.</p>
            </div>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col bg-gradient-to-br from-secondary/30 via-secondary/20 to-secondary/30 border-primary/20">
                        <CardContent className="pt-6 flex flex-col items-start gap-4 flex-grow">
                          <blockquote className="text-left text-foreground/90 text-lg flex-grow">
                          "{testimonial.quote}"
                          </blockquote>
                          <div className="flex items-center gap-4 mt-auto w-full">
                            <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                width={48}
                                height={48}
                                className="rounded-full"
                                draggable="false"
                            />
                            <div>
                                <p className="font-semibold text-base" style={{fontFamily: "'Space Grotesk', sans-serif"}}>{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                            </div>
                           </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="h-full bg-secondary/30 overflow-hidden">
                        <CardContent className="p-0 flex flex-col items-start gap-4 relative">
                          <Image
                            src="https://i.imgur.com/gC51m4A.png"
                            alt="Video testimonial"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover"
                            draggable="false"
                          />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Button variant="ghost" size="icon" className="w-16 h-16 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm">
                              <PlaySquare className="w-8 h-8 text-white" />
                            </Button>
                          </div>
                           <div className="absolute bottom-0 left-0 p-6">
                            <p className="font-semibold text-white text-lg" style={{fontFamily: "'Space Grotesk', sans-serif"}}>Pri Patat</p>
                            <p className="text-sm text-white/80">Product Designer at Lightdash</p>
                          </div>
                           <div className="absolute top-4 right-4">
                            <Image
                                src="https://placehold.co/100x100.png"
                                alt="Pri Patat"
                                width={40}
                                height={40}
                                className="rounded-full border-2 border-white/50"
                                draggable="false"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </motion.section>
      </div>
      <TimedPopup />
    </>
  )
}
