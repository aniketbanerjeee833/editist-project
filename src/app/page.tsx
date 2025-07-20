
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Film, Palette, PlaySquare, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { TimedPopup } from "@/components/timed-popup"

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
          className="text-center py-20 md:py-32"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Professional Video Editing, For Your Vision
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We provide high-quality, professional video editing services to bring your story to life. From corporate videos to cinematic films, we make your content shine.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="features" 
          className="py-20 bg-secondary/30"
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
               <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={cardVariants}>
                <Card className="h-full bg-secondary/30">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        <Star /><Star /><Star /><Star /><Star />
                      </div>
                    </div>
                    <blockquote className="text-lg italic">"The editing completely transformed our project. The attention to detail was incredible. Highly recommended!"</blockquote>
                    <p className="text-right font-semibold mt-4">- Alex Johnson, Film Director</p>
                  </CardContent>
                </Card>
              </motion.div>
               <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={cardVariants}>
                <Card className="h-full bg-secondary/30">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        <Star /><Star /><Star /><Star /><Star />
                      </div>
                    </div>
                    <blockquote className="text-lg italic">"An essential partner for our marketing videos. The quality is always top-notch and they are a pleasure to work with."</blockquote>
                    <p className="text-right font-semibold mt-4">- Samantha Lee, Marketing Head</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
      <TimedPopup />
    </>
  )
}
