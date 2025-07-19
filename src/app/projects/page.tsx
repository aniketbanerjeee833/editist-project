"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Project Alpha",
      description: "A revolutionary new platform for enterprise-level quantum computing.",
      imageUrl: "https://placehold.co/600x400.png",
      hint: "technology abstract"
    },
    {
      title: "Project Beta",
      description: "An innovative mobile app that connects local farmers with consumers.",
      imageUrl: "https://placehold.co/600x400.png",
      hint: "farm mobile"
    },
    {
      title: "Project Gamma",
      description: "A web-based tool for visualizing complex data sets with stunning 3D graphics.",
      imageUrl: "https://placehold.co/600x400.png",
      hint: "data visualization"
    },
    {
      title: "Project Delta",
      description: "A machine learning model to predict stock market trends with high accuracy.",
      imageUrl: "https://placehold.co/600x400.png",
      hint: "stock market"
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
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
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
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Check out some of the amazing projects we've brought to life.
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
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
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
                <CardContent className="p-6">
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">{project.description}</CardDescription>
                  <Button variant="outline">View Project</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
