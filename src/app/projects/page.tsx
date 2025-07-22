
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Corporate Ad",
      description: "A sleek and professional advertisement for a new tech product launch.",
      imageUrl: "https://placehold.co/600x400.png",
      hint: "video production"
    },
    {
      title: "Music Video",
      description: "A vibrant and energetic music video for an up-and-coming indie artist.",
      imageUrl: "https://placehold.co/600x400.png",
      hint: "music video"
    },
    {
      title: "Wedding Film",
      description: "A beautiful and cinematic wedding film capturing a couple's special day.",
      imageUrl: "https://placehold.co/600x400.png",
      hint: "wedding film"
    },
    {
      title: "Documentary Short",
      description: "An impactful short documentary about local community heroes.",
      imageUrl: "https://placehold.co/600x400.png",
      hint: "documentary film"
    },
  ];

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
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section className="py-20 md:py-32 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Check out some of the stunning video projects we've brought to life.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col bg-gradient-to-br from-card to-secondary/30">
                <CardHeader className="p-0">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint={project.hint}
                  />
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow items-center">
                  <CardTitle className="text-2xl mb-4 text-center">{project.title}</CardTitle>
                  <div className="mt-auto">
                    <Button className="transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1">
                      View Project
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
