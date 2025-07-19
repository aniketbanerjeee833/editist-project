
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Check, Zap, Code, Rocket, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

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
            The Future of Awesome is Here
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover a new way to be more productive and creative. Our platform provides the tools you need to succeed and stand out.
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
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold">Features You'll Love</h3>
            <p className="text-muted-foreground mt-2">Everything you need to boost your workflow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}>
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Experience unparalleled speed and performance that keeps you in the flow.</p>
                </CardContent>
              </Card>
            </motion.div>
             <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}>
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Developer Friendly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Easy-to-use APIs and documentation that developers will adore.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}>
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Ready to Launch</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Get started in minutes and deploy your projects with a single click.</p>
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
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold">What Our Users Say</h3>
            <p className="text-muted-foreground mt-2">Real stories from happy customers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}>
              <Card className="h-full bg-secondary/30">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <Star /><Star /><Star /><Star /><Star />
                    </div>
                  </div>
                  <blockquote className="text-lg italic">"This app has revolutionized my workflow. I can't imagine working without it now. Highly recommended!"</blockquote>
                  <p className="text-right font-semibold mt-4">- Alex Johnson</p>
                </CardContent>
              </Card>
            </motion.div>
             <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}>
              <Card className="h-full bg-secondary/30">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <Star /><Star /><Star /><Star /><Star />
                    </div>
                  </div>
                  <blockquote className="text-lg italic">"An essential tool for any serious professional. The features are top-notch and the support is incredible."</blockquote>
                  <p className="text-right font-semibold mt-4">- Samantha Lee</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
